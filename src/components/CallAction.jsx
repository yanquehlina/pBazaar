import { Link } from "react-router-dom";
import HeroBg from "../assets/images/bg.jpg"

const CTASection = () => {
  return (
    <>
         <img src={HeroBg} alt="Login Background" className="fixed w-full h-full -z-40" />
         <div className="fixed w-full h-full -z-10 bg-[#2C3E50] opacity-80"></div>
    <section id="cta" className="py-20  text-white text-center ">
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
    </>
  );
};

export default CTASection;
