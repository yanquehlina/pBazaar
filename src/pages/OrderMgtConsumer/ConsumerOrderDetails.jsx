import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { useParams } from 'react-router-dom';

const ConsumerOrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [review, setReview] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const response = await API.get(`/user/order/${id}`, { headers: { Authorization: `Bearer ${user.token}` } });
        setOrder(response.data);
      } catch (error) {
        setError('Failed to load order details.');
        toast.error('Failed to load order details.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const submitReview = async () => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      await API.post(`/user/order/${id}/review`, { review }, { headers: { Authorization: `Bearer ${user.token}` } });
      toast.success('Review submitted.');
    } catch (error) {
      toast.error('Failed to submit review.');
    }
  };

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
        ) : order ? (
          <div>
            <h2 className="text-3xl font-heading mb-6">Order Details</h2>
            <div>
              <span className="font-bold">Order ID:</span> {order._id}
            </div>
            <div>
              <span className="font-bold">Status:</span> {order.status}
            </div>
            <div>
              <span className="font-bold">Amount:</span> ${order.amount}
            </div>
            <div>
              <span className="font-bold">Products:</span>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>{product.name} - ${product.price} x {product.quantity}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bold">Leave a Review:</span>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                rows="4"
              />
              <button
                onClick={submitReview}
                className="mt-2 px-4 py-2 bg-secondary text-white rounded"
              >
                Submit Review
              </button>
            </div>
          </div>
        ) : (
          <p>No order found.</p>
        )}
      </main>
    </div>
  );
};

export default ConsumerOrderDetails;
