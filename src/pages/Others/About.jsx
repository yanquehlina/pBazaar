// import founder1 from '../assets/founder1.jpg'; // Example image path for Founder 1
// import founder2 from '../assets/founder2.jpg'; // Example image path for Founder 2

import { User, Leaf, Globe, MapPin } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Navbar />

      {/* About Us Section */}
      <section className="p-12 bg-white text-center">
        <h1 className="text-4xl font-heading text-primary mb-6">About Us</h1>
        <p className="text-lg md:text-xl text-textSecondary mb-8">
          Our mission is to connect poultry farmers, suppliers, and consumers
          through a reliable platform, ensuring quality, transparency, and
          sustainability in the poultry supply chain.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className="p-12 bg-lightGray text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded shadow-md">
            <Leaf className="text-primary mx-auto h-12 w-12 mb-4" />
            <h2 className="text-3xl font-heading text-primary mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-textSecondary">
              To build a sustainable poultry industry where farmers, suppliers,
              and consumers thrive together.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow-md">
            <Globe className="text-primary mx-auto h-12 w-12 mb-4" />
            <h2 className="text-3xl font-heading text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-textSecondary">
              To empower farmers with technology, streamline the poultry supply
              chain, and offer consumers high-quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl font-heading text-primary mb-8">
          Meet Our Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Founder 1 */}
          <div className="p-6 bg-lightGray rounded shadow-md text-left">
            {/* <img
              src={founder1}
              alt="Founder 1"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
            /> */}
            <h3 className="text-2xl font-bold text-primary text-center mb-4">
              Abigail Asante
            </h3>
            <p className="text-lg text-textSecondary">
              Abigail, co-founder and CEO, brings over a decade of expertise in
              agritech, focused on advancing sustainable poultry farming in
              Ghana.
            </p>
            <p className="flex items-center justify-center mt-4 text-gray-500">
              <MapPin className="h-5 w-5 mr-2" /> Accra, Ghana
            </p>
          </div>

          {/* Founder 2 */}
          <div className="p-6 bg-lightGray rounded shadow-md text-left">
            {/* <img
              src={founder2}
              alt="Founder 2"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
            /> */}
            <h3 className="text-2xl font-bold text-primary text-center mb-4">
              Maame Yankeh Cornelius
            </h3>
            <p className="text-lg text-textSecondary">
              Maame, co-founder and COO, excels in logistics and operations,
              ensuring smooth and efficient connections between farmers and
              consumers.
            </p>
            <p className="flex items-center justify-center mt-4 text-gray-500">
              <MapPin className="h-5 w-5 mr-2" /> Takoradi, Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-12 bg-primary text-white text-center">
        <h2 className="text-3xl font-heading mb-4">Join Us on Our Journey!</h2>
        <p className="text-lg md:text-xl mb-8">
          Together, we can revolutionize the poultry industry. Whether you're a
          farmer, supplier, or consumer, our platform is here to connect you.
        </p>
        <a
          href="/signup"
          className="bg-accent text-white py-3 px-6 rounded font-bold text-lg"
        >
          Sign Up Now
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default About;
