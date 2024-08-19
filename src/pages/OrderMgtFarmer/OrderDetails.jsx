import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const response = await API.get(`/user/order/${id}`, { headers: { Authorization: `Bearer ${user.token}` } });
        setOrder(response.data);
        setStatus(response.data.status);
      } catch (error) {
        setError('Failed to load order details.');
        toast.error('Failed to load order details.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const updateStatus = async () => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      await API.patch(`/user/order/${id}`, { status }, { headers: { Authorization: `Bearer ${user.token}` } });
      toast.success('Order status updated.');
    } catch (error) {
      toast.error('Failed to update order status.');
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
              <span className="font-bold">Status:</span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="ml-2 p-1 border border-gray-300 rounded"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="canceled">Canceled</option>
              </select>
              <button
                onClick={updateStatus}
                className="ml-4 px-4 py-2 bg-secondary text-white rounded"
              >
                Update Status
              </button>
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
          </div>
        ) : (
          <p>No order found.</p>
        )}
      </main>
    </div>
  );
};

export default OrderDetails;
