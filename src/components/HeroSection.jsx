import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
    <section className="bg-[#ECF0F1] text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2C3E50]">
          Welcome to P-Bazaar
        </h1>
        <p className="text-xl text-[#7F8C8D] mt-4">
          Your one-stop-shop for quality Poultry products, Poultry Logistics and support!!!
        </p>
        <Link to="/signup">
          <button className="mt-8 bg-[#E74C3C] text-white py-3 px-6 rounded-full text-lg">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
    {/* Features Section */}
    <section className="py-20 px-10">
        <h2 className="text-4xl font-heading text-center mb-10">We've Got the Needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-4">For Farmers</h3>
            <p className="mb-4">List products, manage orders, and connect with suppliers.</p>
            <h4 className="text-secondary">Join as Farmer</h4>
          </div>
          <div className="p-6 bg-white rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-4">For Suppliers</h3>
            <p className="mb-4">Supply feed and equipment to farmers.</p>
            <h4 className="text-secondary">Join as Supplier</h4>
          </div>
          <div className="p-6 bg-white rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-4">For Consumers</h3>
            <p className="mb-4">Find and purchase fresh poultry products.</p>
            <h4 className="text-secondary">Join as Consumer</h4>
          </div>
        </div>
      </section>
    <section className="py-20 bg-gray-100 text-center px-10">
        <h2 className="text-4xl font-heading mb-6">About P-Bazaar</h2>
        <p className="text-lg max-w-3xl mx-auto">
          P-Bazaar is a platform dedicated to connecting poultry farmers, suppliers, and consumers. We aim to streamline the process of buying and selling poultry products, providing a reliable marketplace for all stakeholders in the poultry industry.
        </p>
      </section>
    </>
    
  );
};

export default HeroSection;
