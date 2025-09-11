import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-4xl text-center font-bold mb-6">About Us</h1>
        <h1 className="text-3xl font-bold mb-4 text-center">working is process</h1>
        <div className="flex justify-center mb-16">
          <img
            src="https://www.cflowapps.com/wp-content/uploads/2021/06/improve_proceswork.jpg"
            alt="Process Work"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
