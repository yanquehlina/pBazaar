import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

// Modal backdrop variants for animation
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Modal container variants for animation
const modalVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: {
    opacity: 1,
    y: "0",
    transition: { type: "spring", stiffness: 100 },
  },
  exit: { opacity: 0, y: "-100vh", transition: { duration: 0.5 } },
};

const AddProduct = ({ isOpen, onClose, handleSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('name', name);
  //   formData.append('description', description);
  //   formData.append('price', price);
  //   if (image) {
  //     formData.append('image', image);
  //   }

  //   try {
  //     const user = JSON.parse(sessionStorage.getItem('user'));
  //     await API.post('/user/product', formData, { headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'multipart/form-data' } });
  //     toast.success('Product added successfully.');
  //     navigate('/farmer/products');
  //     onClose(); // Close the modal after submission
  //   } catch (error) {
  //     toast.error('Failed to add product.');
  //   }
  // };

  if (!isOpen) return null; // If modal is closed, return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-white rounded-lg p-8 w-full max-w-lg"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add New Product</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">✕</button>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Product Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full"
            />
          </div>

          <div className="text-center mt-6">
            <button type="submit" className="px-6 py-3 bg-secondary text-white font-bold rounded">
              Add Product
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddProduct;
