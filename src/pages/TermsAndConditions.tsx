import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        <p>
          The legal terms and conditions for using this website/app.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
