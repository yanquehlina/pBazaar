import { useState, useEffect } from "react";
import axios from "axios";

const OrderPage = () => {
  // State to store available products and the selected products
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products when the component loads
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("/api/products"); // Replace with your API endpoint
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // Handle adding a product to the cart
  // const handleAddToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);

  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     }

  //     return [...prevCart, { ...product, quantity: 1 }];
  //   });
  // };

  // Calculate total price
  // const calculateTotal = () => {
  //   return cart.reduce(
  //     (total, product) => total + product.price * product.quantity,
  //     0
  //   );
  // };

  // // Handle checkout process (to be further developed)
  // const handleCheckout = () => {
  //   // Redirect to payment page or process order
  //   alert("Proceed to checkout!");
  // };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">Poultry Products</h1>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="mt-2">Price: ${product.price.toFixed(2)}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Overview */}
      {cart.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl mb-4">Your Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <h3 className="text-xl">Total: ${calculateTotal().toFixed(2)}</h3>
            <button
              className="bg-green-500 text-white py-2 px-4 mt-4 rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
