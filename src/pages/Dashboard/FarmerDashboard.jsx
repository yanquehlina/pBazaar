import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import API from '../services/api';
import { toast } from 'react-toastify';
import AddProduct from '../ProductMgtFarmer/AddProduct';
import API from "../../assets/api.json"
import Product from '../../components/Product';
import EditProductModal from '../ProductMgtFarmer/EditProduct';
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal';

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [addProductModalOpen, setAddProductModalOpen] = useState(false);
  const [editProductModalOpen, setEditProductModalOpen] = useState(false);
  const [deleteProductModalOpen, setDeleteProductModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    location: '',
    image: ''
  });
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const userData = JSON.parse(sessionStorage.getItem('user'));
  //       if (!userData) {
  //         navigate('/login');
  //         return;
  //       }

  //       const response = await API.get('/user/product', {
  //         headers: {
  //           Authorization: `Bearer ${userData.token}`
  //         }
  //       });
  //       setProducts(response.data);
  //     } catch (error) {
  //       toast.error('Failed to fetch products.');
  //     }
  //   };

  //   fetchProducts();
  // }, [navigate]);

  useEffect(()=> {
    setProducts(API.products);
  }, [])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      const endpoint = editingProduct ? `/user/product/${editingProduct._id}` : '/user/product';
      const method = editingProduct ? 'patch' : 'post';
      const response = await API[method](endpoint, formData, {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      });
      toast.success(`Product ${editingProduct ? 'updated' : 'added'} successfully!`);
      setProducts((prevProducts) => {
        if (editingProduct) {
          return prevProducts.map((product) => 
            product._id === editingProduct._id ? response.data : product
          );
        }
        return [...prevProducts, response.data];
      });
      setEditingProduct(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        quantity: '',
        location: '',
        image: ''
      });
    } catch (error) {
      toast.error(`Failed to ${editingProduct ? 'update' : 'add'} product.`);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      location: product.location,
      image: product.image || ''
    });
  };

  const handleDeleteProduct = async (productId) => {
    // try {
    //   const userData = JSON.parse(sessionStorage.getItem('user'));
    //   await API.delete(`/user/product/${productId}`, {
    //     headers: {
    //       Authorization: `Bearer ${userData.token}`
    //     }
    //   });
    //   setProducts(products.filter((product) => product._id !== productId));
    //   toast.success('Product deleted successfully!');
    // } catch (error) {
    //   toast.error('Failed to delete product.');
    // }
    const filteredProducts = products.filter(product => product.id !== productId);
    setProducts(filteredProducts);
    setDeleteProductModalOpen(false)
  };

  const handleAddProduct = () => {
    
  }

  return (
    <div className="bg-background text-textPrimary min-h-screen flex flex-col items-center mt-[80px] ms-[240px]">
      <header className="flex justify-between items-center py-6 px-10 bg-primary text-white w-full">
        <div className="text-2xl font-heading">Poultry Bazaar</div>
        <nav>
          <ul className="flex space-x-6">
            <li><button onClick={() => navigate('/profile')}>Profile</button></li>
            <li><button onClick={() => navigate('/orders')}>Manage Orders</button></li>
          </ul>
        </nav>
      </header>

      <AddProduct isOpen={addProductModalOpen} onClose={() => setAddProductModalOpen(false)} handleSubmit={handleAddProduct}/>
      <EditProductModal isOpen={editProductModalOpen} onClose={() => setEditProductModalOpen(false)} />
      <DeleteConfirmationModal isOpen={deleteProductModalOpen} onClose={() => setDeleteProductModalOpen(false)} onConfirm={handleDeleteProduct}/>
      
      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-3xl font-heading text-center mb-6">Manage Products</h2>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setAddProductModalOpen(true)}
            className="px-4 py-2 bg-secondary text-white rounded"
          >
            Add New Product
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {products.map((product) => (
           <Product key={product.id} product={product} handleEditProductModal={() => setEditProductModalOpen(true)} handleDeleteProductModal={() => setDeleteProductModalOpen(true)}/>
          ))}
        </div>
      </div>

      {editingProduct !== null && (
        <div className="mt-10 p-6 bg-white rounded shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-heading text-center mb-6">
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Product Name</label>
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
                {editingProduct ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FarmerDashboard;
