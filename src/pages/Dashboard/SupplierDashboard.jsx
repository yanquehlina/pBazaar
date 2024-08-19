import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import API from '../services/api';
import { toast } from 'react-toastify';

const SupplierDashboard = () => {
  const [supplies, setSupplies] = useState([]);
  const [editingSupply, setEditingSupply] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    location: '',
    image: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSupplies = async () => {
      try {
        const userData = JSON.parse(sessionStorage.getItem('user'));
        if (!userData) {
          navigate('/login');
          return;
        }

        const response = await API.get('/user/supply', {
          headers: {
            Authorization: `Bearer ${userData.token}`
          }
        });
        setSupplies(response.data);
      } catch (error) {
        toast.error('Failed to fetch supplies.');
      }
    };

    fetchSupplies();
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      const endpoint = editingSupply ? `/user/supply/${editingSupply._id}` : '/user/supply';
      const method = editingSupply ? 'patch' : 'post';
      const response = await API[method](endpoint, formData, {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      });
      toast.success(`Supply ${editingSupply ? 'updated' : 'added'} successfully!`);
      setSupplies((prevSupplies) => {
        if (editingSupply) {
          return prevSupplies.map((supply) => 
            supply._id === editingSupply._id ? response.data : supply
          );
        }
        return [...prevSupplies, response.data];
      });
      setEditingSupply(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        quantity: '',
        location: '',
        image: ''
      });
    } catch (error) {
      toast.error(`Failed to ${editingSupply ? 'update' : 'add'} supply.`);
    }
  };

  const handleEditSupply = (supply) => {
    setEditingSupply(supply);
    setFormData({
      name: supply.name,
      description: supply.description,
      price: supply.price,
      quantity: supply.quantity,
      location: supply.location,
      image: supply.image || ''
    });
  };

  const handleDeleteSupply = async (supplyId) => {
    try {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      await API.delete(`/user/supply/${supplyId}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      });
      setSupplies(supplies.filter((supply) => supply._id !== supplyId));
      toast.success('Supply deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete supply.');
    }
  };

  return (
    <div className="bg-background text-textPrimary min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-10 bg-primary text-white w-full">
        <div className="text-2xl font-heading">Poultry Bazaar</div>
        <nav>
          <ul className="flex space-x-6">
            <li><button onClick={() => navigate('/profile')}>Profile</button></li>
            <li><button onClick={() => navigate('/orders')}>Manage Orders</button></li>
          </ul>
        </nav>
      </header>

      {/* Supplies List */}
      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-3xl font-heading text-center mb-6">Manage Supplies</h2>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setEditingSupply(null)}
            className="px-4 py-2 bg-secondary text-white rounded"
          >
            Add New Supply
          </button>
        </div>
        <div className="space-y-4">
          {supplies.map((supply) => (
            <div key={supply._id} className="p-4 bg-white shadow rounded flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{supply.name}</h3>
                <p>{supply.description}</p>
                <p>Price: {supply.price}</p>
                <p>Quantity: {supply.quantity}</p>
                <p>Location: {supply.location}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEditSupply(supply)}
                  className="px-4 py-2 bg-accent text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteSupply(supply._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supply Form */}
      {editingSupply !== null && (
        <div className="mt-10 p-6 bg-white rounded shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-heading text-center mb-6">
            {editingSupply ? 'Edit Supply' : 'Add New Supply'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Supply Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="px-6 py-3 bg-secondary text-white font-bold rounded">
                {editingSupply ? 'Update Supply' : 'Add Supply'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SupplierDashboard;
