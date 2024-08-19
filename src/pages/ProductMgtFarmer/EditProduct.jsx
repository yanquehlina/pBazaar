import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import API from "../../assets/api.json";

const EditProductModal = ({ isOpen, onClose }) => {
  const [product, setProduct] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const products = API.products;
        const product = products.find(p => p.id === id);
        setProduct(product);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
      } catch (error) {
        toast.error('Failed to load product details.');
      }
    };

    if (isOpen) {
      fetchProduct(1);
    }
  }, [id, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('description', description);
    // formData.append('price', price);
    // if (image) {
    //   formData.append('image', image);
    // }

    // try {
    //   const user = JSON.parse(sessionStorage.getItem('user'));
    //   await API.patch(`/user/product/${id}`, formData, {
    //     headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'multipart/form-data' }
    //   });
    //   toast.success('Product updated successfully.');
    //   navigate('/farmer/products');
    //   onClose();
    // } catch (error) {
    //   toast.error('Failed to update product.');
    }
  // };

  if (!isOpen) return null;

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

  return (
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
        className="fixed top-1/5 left-2/5 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50 max-w-md w-full p-6"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
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
              Update Product
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>
      </motion.div>
    </>
  );
};

export default EditProductModal;
