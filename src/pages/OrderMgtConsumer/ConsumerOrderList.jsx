import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

const ConsumerOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const response = await API.get('/user/order', { headers: { Authorization: `Bearer ${user.token}` } });
        setOrders(response.data);
      } catch (error) {
        setError('Failed to load orders.');
        toast.error('Failed to load orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-background text-textPrimary min-h-screen flex flex-col">
      <header className="w-full max-w-4xl flex justify-between items-center py-6 px-10 bg-primary text-white">
        <div className="text-2xl font-heading">Poultry Bazaar</div>
      </header>

      <main className="flex-1 p-6">
        <h2 className="text-3xl font-heading mb-6">My Orders</h2>

        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ul>
            {orders.map(order => (
              <li key={order._id} className="border-b py-4">
                <div>
                  <span className="font-bold">Order ID:</span> {order._id}
                </div>
                <div>
                  <span className="font-bold">Status:</span> {order.status}
                </div>
                <div>
                  <span className="font-bold">Amount:</span> ${order.amount}
                </div>
                <Link to={`/consumer/orders/${order._id}`} className="text-blue-500 mt-2 inline-block">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default ConsumerOrderList;
