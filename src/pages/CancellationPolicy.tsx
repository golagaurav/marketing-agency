import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CancellationPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cancellation Policy</h1>
        <p>
          Here we describe the terms and conditions for cancellation.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default CancellationPolicy;
