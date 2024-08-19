import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../assets/api.json";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ConsumerDashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(API.products); // Fetch product data
  }, []);

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart.`);
  };

  const handleFavorite = (product) => {
    console.log(`Marked ${product.name} as favorite.`);
  };

  return (
    <div className="bg-background text-textPrimary min-h-screen flex flex-col items-center mt-[80px] ms-[240px]">
      <header className="flex justify-between items-center py-6 px-10 bg-primary text-white w-full">
        <div className="text-2xl font-heading">Poultry Bazaar</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => navigate("/profile")}>Profile</button>
            </li>
            <li>
              <button onClick={() => navigate("/orders")}>My Orders</button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="mt-10 w-full max-w-6xl">
        <h2 className="text-3xl font-heading text-center mb-6">
          Available Products
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow-md flex">
              <img
                src={product.imageUrl || "default_image.png"}
                alt={product.name}
                className="w-40 h-40 object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="text-yellow-500 h-5 w-5" />
                  <Star className="text-yellow-500 h-5 w-5" />
                  <Star className="text-yellow-500 h-5 w-5" />
                  <Star className="text-yellow-500 h-5 w-5" />
                  <Star className="text-gray-300 h-5 w-5" />
                </div>
                <p className="text-gray-700 text-lg mb-2">GHS {product.price}</p>
                <p className="text-gray-500 mb-4">Stock: {product.stockQuantity}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-4 py-2 bg-secondary text-white rounded flex items-center"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </button>
                  <button
                    onClick={() => handleFavorite(product)}
                    className="px-4 py-2 bg-red-500 text-white rounded flex items-center"
                  >
                    <Heart className="mr-2 h-5 w-5" /> Favorite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
