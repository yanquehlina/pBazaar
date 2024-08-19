import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/user/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="bg-background text-textPrimary min-h-screen flex flex-col">
      <header className="w-full max-w-4xl flex justify-between items-center py-6 px-10 bg-primary text-white">
        <div className="text-2xl font-heading">Poultry Bazaar</div>
      </header>

      <main className="flex-1 p-6">
        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : product ? (
          <div>
            <h2 className="text-3xl font-heading mb-6">{product.name}</h2>
            <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
            <div>
              <span className="font-bold">Description:</span> {product.description}
            </div>
            <div>
              <span className="font-bold">Price:</span> ${product.price}
            </div>
            {/* Add to cart or edit button for Farmer */}
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </main>
    </div>
  );
};

export default ProductDetails;
