import { SpadeIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#2C3E50] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <h1 className="text-2xl font-bold text-[#E74C3C]">P-Bazzar</h1>
          <span>
            <Sparkles className="text-[#F39C12]" />
          </span>
        </div>

        <div className="space-x-4">
          <Link to="/" className="hover:text-[#F39C12]">
            Home
          </Link>
          <Link to="/signup" className="hover:text-[#F39C12]">
            Sign Up
          </Link>
          <Link to="/login" className="hover:text-[#F39C12]">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
