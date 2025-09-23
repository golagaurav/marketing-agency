import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/icon';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <main className="py-16 px-6 max-w-6xl mx-auto text-gray-800">
        <section className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="FaEnvelope" size={30} color="#E53E3E" />
            <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a question, project, or just want to say hello? We'd love to hear from you!
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">📍 Our Office</h3>
              <p>123 Digital Street<br />New Delhi, India</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">📧 Email Us</h3>
              <p>
                <a href="mailto:support@example.com" className="text-primary hover:underline">
                  support@example.com
                </a>
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">📞 Call Us</h3>
              <p>+91 xxxx xxxx99</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
