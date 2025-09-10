import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutServices = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p>Details about services we offer.</p>
      </main>
      <Footer />
    </>
  );
};

export default AboutServices;
