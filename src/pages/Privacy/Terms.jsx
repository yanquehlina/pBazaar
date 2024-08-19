import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Terms of Service
        </h1>
        <p className="text-textPrimary mb-6">
          Welcome to Poultry Bazaar. These terms and conditions outline the
          rules and regulations for the use of Poultry Bazaar's website and
          services.
        </p>
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          1. Introduction
        </h2>
        <p className="text-textSecondary mb-4">
          By accessing this website, we assume you accept these terms and
          conditions in full. Do not continue to use Poultry Bazaar if you do
          not accept all of the terms and conditions stated on this page.
        </p>
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          2. License
        </h2>
        <p className="text-textSecondary mb-4">
          Unless otherwise stated, Poultry Bazaar and/or its licensors own the
          intellectual property rights for all material on Poultry Bazaar. All
          intellectual property rights are reserved.
        </p>
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
