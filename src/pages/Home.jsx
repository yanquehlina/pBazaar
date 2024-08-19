import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-primary text-white p-12 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-heading mb-6">
          Empowering Farmers, Connecting Consumers
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover fresh, organic products directly from local farmers. Buy or sell produce with ease.
        </p>
        <Link
          to="/signup"
          className="bg-accent text-white py-3 px-6 rounded font-bold text-lg"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl font-heading text-primary mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-background rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Reduce Post-Harvest Loss</h3>
            <p className="text-textSecondary">Our platform ensures that farmers' produce reaches consumers faster, reducing waste.</p>
          </div>
          <div className="p-6 bg-background rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Fair Pricing for Farmers</h3>
            <p className="text-textSecondary">Farmers get the best prices for their products, while consumers enjoy affordable rates.</p>
          </div>
          <div className="p-6 bg-background rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Safe & Secure Transactions</h3>
            <p className="text-textSecondary">Our payment gateways ensure smooth, secure transactions for both farmers and consumers.</p>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="p-12 bg-lightGray text-center">
        <h2 className="text-3xl font-heading text-primary mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Products */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">Fresh Tomatoes</h3>
            <p className="text-lg text-accent">$10.00 per kg</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <img src="https://via.placeholder.com/150" alt="Product 2" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">Organic Yams</h3>
            <p className="text-lg text-accent">$5.00 per kg</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <img src="https://via.placeholder.com/150" alt="Product 3" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">Cassava Flour</h3>
            <p className="text-lg text-accent">$3.00 per kg</p>
          </div>
        </div>
        <Link
          to="/products"
          className="inline-block mt-6 bg-secondary text-white py-3 px-6 rounded font-bold text-lg"
        >
          View All Products
        </Link>
      </section>

      {/* How It Works Section */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl font-heading text-primary mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-background rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Step 1: Sign Up</h3>
            <p className="text-textSecondary">Create an account as a farmer or consumer.</p>
          </div>
          <div className="p-6 bg-background rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Step 2: List or Browse Products</h3>
            <p className="text-textSecondary">Farmers can list their products, while consumers can browse available produce.</p>
          </div>
          <div className="p-6 bg-background rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Step 3: Complete Transaction</h3>
            <p className="text-textSecondary">Consumers purchase products, and farmers fulfill the orders.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-12 bg-lightGray text-center">
        <h2 className="text-3xl font-heading text-primary mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-textSecondary mb-4">
              "Thanks to this platform, I can easily sell my farm produce without worrying about spoilage!"
            </p>
            <p className="text-accent font-bold">— Kwame, Farmer</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-textSecondary mb-4">
              "I love the fresh produce I can get directly from farmers. It's affordable and convenient!"
            </p>
            <p className="text-accent font-bold">— Akosua, Consumer</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-textSecondary mb-4">
              "The secure payment options and fast delivery make this platform my go-to for groceries."
            </p>
            <p className="text-accent font-bold">— Kojo, Consumer</p>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="p-12 bg-primary text-white text-center">
        <h2 className="text-3xl font-heading mb-4">Join the Agribusiness Revolution Today!</h2>
        <Link
          to="/signup"
          className="bg-accent text-white py-3 px-6 rounded font-bold text-lg"
        >
          Sign Up Now
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
