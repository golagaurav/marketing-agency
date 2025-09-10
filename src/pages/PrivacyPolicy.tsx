import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p>
          Details about how user data is handled and protected.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
