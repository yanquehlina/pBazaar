import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-[#F39C12] text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold">Join Us Today</h2>
        <p className="mt-4 text-lg">
          Sign up now and start shopping the best deals!
        </p>
        <Link to="/signup">
          <button className="mt-8 bg-[#E74C3C] text-white py-3 px-6 rounded-full text-lg">
            Sign Up
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
