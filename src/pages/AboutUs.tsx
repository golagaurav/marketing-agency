import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p>Information about our company and team.</p>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
