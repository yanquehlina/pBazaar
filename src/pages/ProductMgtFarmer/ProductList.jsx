import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import API from '../services/api';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader'; // Import a loader component if available
import API from "../../assets/api.json"

const ProductList = ({products}) => {
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const user = JSON.parse(sessionStorage.getItem('user'));
  //       const response = await API.get('/user/product', { headers: { Authorization: `Bearer ${user.token}` } });
  //       setProducts(response.data);

  //     } catch (error) {
  //       setError('Failed to load products.');
  //       toast.error('Failed to load products.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="bg-background text-textPrimary min-h-screen flex flex-col">
      <header className="w-full max-w-4xl flex justify-between items-center py-6 px-10 bg-primary text-white">
        <div className="text-2xl font-heading">Poultry Bazaar</div>
      </header>

      <main className="flex-1 p-6">
        <h2 className="text-3xl font-heading mb-6">Product List</h2>
        <Link to="/farmer/products/add" className="bg-secondary text-white px-4 py-2 rounded mb-4 inline-block">
          Add New Product
        </Link>

        {loading ? (
          <Loader /> // Display a loader while fetching
        ) : error ? (
          <p className="text-red-500">{error}</p> // Display error message
        ) : (
          <ul>
            {products.map(product => (
              <li key={product._id} className="border-b py-2">
                {product.name} - ${product.price}
                <Link to={`/farmer/products/edit/${product._id}`} className="text-blue-500 ml-4">Edit</Link>
                <button
                  onClick={async () => {
                    try {
                      await API.delete(`/user/product/${product._id}`, { headers: { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('user')).token}` } });
                      setProducts(products.filter(p => p._id !== product._id));
                      toast.success('Product deleted.');
                    } catch (error) {
                      toast.error('Failed to delete product.');
                    }
                  }}
                  className="text-red-500 ml-4"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default ProductList;
