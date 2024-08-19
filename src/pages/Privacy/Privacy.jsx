import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-textPrimary mb-6">
          Poultry Bazaar is committed to protecting and respecting your privacy.
          This Privacy Policy explains how we collect, use, and disclose your
          personal information.
        </p>
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          1. Information We Collect
        </h2>
        <p className="text-textSecondary mb-4">
          We collect information that you provide directly to us, such as when
          you create or modify your account, use our services, or communicate
          with us.
        </p>
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-textSecondary mb-4">
          We use the information we collect to provide, maintain, and improve
          our services, to communicate with you, and to protect Poultry Bazaar
          and our users.
        </p>
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
