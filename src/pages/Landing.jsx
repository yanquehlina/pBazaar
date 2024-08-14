import CTASection from "../components/CallAction";
import FeaturesSection from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default LandingPage;
