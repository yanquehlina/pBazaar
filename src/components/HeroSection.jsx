import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-[#ECF0F1] text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2C3E50]">
          Welcome to P-Bazaar
        </h1>
        <p className="text-xl text-[#7F8C8D] mt-4">
          Your one-stop-shop for quality Poultry products.
        </p>
        <Link to="/signup">
          <button className="mt-8 bg-[#E74C3C] text-white py-3 px-6 rounded-full text-lg">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
