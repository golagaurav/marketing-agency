import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/icon';
const OurServices = () => {
  const services = [
    {
      icon: '🔍',
      title: 'SEO & SEM',
      description: 'Drive traffic and visibility with optimized strategies.',
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Grow your audience with data-driven campaigns.',
    },
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Stunning websites that blend creativity and UX.',
    },
    {
      icon: '🛍️',
      title: 'E-Commerce Development',
      description: 'Build powerful online stores for growth and scale.',
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'iOS & Android apps built with performance in mind.',
    },
    {
      icon: '⚙️',
      title: 'Custom Software',
      description: 'Tailor-made tools to solve your unique business challenges.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="py-16 px-6 max-w-7xl mx-auto text-gray-800">
        {/* Updated heading with icon */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="FaServicestack" size={36} color="#38A169" />
            <h1 className="text-4xl font-bold text-primary">Our Services</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the range of digital services we offer to help your business grow and succeed.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-gray-600 mb-6">
            We also offer tailored services to fit your specific project requirements.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition">
            Contact Us
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurServices;
