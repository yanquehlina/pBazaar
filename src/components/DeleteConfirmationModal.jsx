import React from 'react';
import { motion } from 'framer-motion';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {

  const modalVariants = {
    hidden: { opacity: 0, y: '-50px' },
    visible: { opacity: 1, y: '0', transition: { duration: 0.3 } },
    exit: { opacity: 0, y: '-50px', transition: { duration: 0.3 } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return isOpen ? (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />

      <motion.div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50 max-w-sm w-full p-6"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this item? This action cannot be undone.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black font-semibold rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </>
  ) : null;
};

export default DeleteConfirmationModal;
