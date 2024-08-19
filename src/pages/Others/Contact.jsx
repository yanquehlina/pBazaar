import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Navbar />
      
      {/* Contact Us Section */}
      <section className="p-12 bg-white text-center">
        <h1 className="text-4xl font-heading text-primary mb-6">Contact Us</h1>
        <p className="text-lg md:text-xl text-textSecondary mb-8">
          We'd love to hear from you! Whether you have a question about the platform, need assistance, or just want to share your thoughts, feel free to reach out.
        </p>
      </section>

      {/* Contact Details Section */}
      <section className="p-12 bg-lightGray text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Contact */}
          <div className="p-6 bg-white rounded shadow-md">
            <Mail className="text-primary mx-auto h-12 w-12 mb-4" />
            <h2 className="text-2xl font-heading text-primary mb-4">Email Us</h2>
            <p className="text-lg text-textSecondary mb-4">
              For any inquiries, please email us at:
            </p>
            <a href="mailto:support@poultryconnect.com" className="text-accent font-semibold">
              support@poultryconnect.com
            </a>
          </div>

          {/* Phone Contact */}
          <div className="p-6 bg-white rounded shadow-md">
            <Phone className="text-primary mx-auto h-12 w-12 mb-4" />
            <h2 className="text-2xl font-heading text-primary mb-4">Call Us</h2>
            <p className="text-lg text-textSecondary mb-4">
              We're available by phone from 9 AM to 6 PM:
            </p>
            <a href="tel:+233555123456" className="text-accent font-semibold">
              +233 555 123 456
            </a>
          </div>

          {/* Office Location */}
          <div className="p-6 bg-white rounded shadow-md">
            <MapPin className="text-primary mx-auto h-12 w-12 mb-4" />
            <h2 className="text-2xl font-heading text-primary mb-4">Visit Us</h2>
            <p className="text-lg text-textSecondary mb-4">
              Come by our office for a chat:
            </p>
            <p className="text-textSecondary font-semibold">
              123 Poultry Lane, Accra, Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl font-heading text-primary mb-6">Send Us a Message</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-6">
            <label className="block text-left text-lg font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-lg font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-3 px-6 rounded font-bold text-lg hover:bg-accent transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
