import { LifeBuoy, Phone, Mail, FileText } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const SMESupport = () => {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Navbar />
      
      {/* SME Support Header */}
      <section className="p-12 bg-white text-center">
        <h1 className="text-4xl font-heading text-primary mb-6">SME Support</h1>
        <p className="text-lg md:text-xl text-textSecondary mb-8">
          We are here to help your business thrive. Explore the resources and support options available for SMEs on our platform.
        </p>
      </section>

      {/* Support Resources Section */}
      <section className="p-12 bg-lightGray text-center">
        <h2 className="text-3xl font-heading text-primary mb-6">Support Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow-md flex flex-col items-center text-center">
            <LifeBuoy className="text-primary h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Business Consulting</h3>
            <p className="text-lg text-textSecondary">
              Get expert advice on how to grow your SME. Our consulting services cover everything from marketing strategies to financial planning.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow-md flex flex-col items-center text-center">
            <FileText className="text-primary h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Educational Resources</h3>
            <p className="text-lg text-textSecondary">
              Access a wealth of resources including guides, tutorials, and webinars to help you navigate the challenges of running a business.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow-md flex flex-col items-center text-center">
            <Phone className="text-primary h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Dedicated Support</h3>
            <p className="text-lg text-textSecondary">
              Reach out to our support team for personalized assistance. We’re here to help you with any challenges you may face.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl font-heading text-primary mb-6">Get in Touch</h2>
        <p className="text-lg text-textSecondary mb-8">
          If you need further assistance, don’t hesitate to reach out to us through the following channels:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex items-center text-left">
            <Phone className="text-primary h-8 w-8 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-textPrimary">Call Us</h3>
              <p className="text-lg text-textSecondary">+233 123 456 789</p>
            </div>
          </div>
          <div className="flex items-center text-left">
            <Mail className="text-primary h-8 w-8 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-textPrimary">Email Us</h3>
              <p className="text-lg text-textSecondary">support@poultryconnect.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-12 bg-primary text-white text-center">
        <h2 className="text-3xl font-heading mb-4">Ready to Take Your Business to the Next Level?</h2>
        <p className="text-lg md:text-xl mb-8">
          Join our network of successful SMEs and gain access to exclusive resources and support. Let's grow together!
        </p>
        <a
          href="/sign-up"
          className="bg-accent text-white py-3 px-6 rounded font-bold text-lg"
        >
          Sign Up Now
        </a>
      </section>
      
      <Footer />
    </div>
  );
};

export default SMESupport;
