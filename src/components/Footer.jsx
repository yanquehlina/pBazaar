import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} P-Bazaar. All Rights Reserved.</p>
        <div className="mt-4 space-x-4">
          <Link to="/terms" className="hover:text-[#F39C12]">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-[#F39C12]">
            Privacy{" "}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
