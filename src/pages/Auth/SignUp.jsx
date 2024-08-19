import AuthForm from "../../components/AuthForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-[#ECF0F1]">
      <AuthForm isSignup={true} />
    </div>
    <Footer />
    </div>
  );
};

export default SignUp;

