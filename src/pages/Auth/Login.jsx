import AuthForm from "../../components/AuthForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LoginBg from "../../assets/images/login bg.jpg"

const Login = () => {
  return (
    <div>
      <img src={LoginBg} alt="Login Background" className="fixed w-full h-full -z-40" />
      <div className="fixed w-full h-full -z-10 bg-[#2C3E50] opacity-80"></div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <AuthForm isSignup={false} className=""/>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
