import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GetStarted = () => {
return (
    <>
    <Navbar />

<main className="min-h-screen bg-gray-50 py-16 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* ================= Left Content ================= */}
        <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let's Get Started 🚀
            </h1>
            <p className="text-lg text-gray-700">
            Ready to take your business to the next level? Tell us a bit about your project, and our team will be in touch shortly.
            </p>

            <ul className="text-gray-600 list-disc list-inside space-y-1">
            <li>Custom web development</li>
            <li>UI/UX design services</li>
            <li>Marketing & SEO packages</li>
            <li>Ongoing support & maintenance</li>
            </ul>
        </div>

          {/* ================= Right Form ================= */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                type="email"
                placeholder="john@example.com"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Your Project</label>
                <textarea
                rows="5"
                placeholder="Tell us what you need..."
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary-dark transition"
            >
                Submit Inquiry
            </button>
            </form>
        </div>
    </div>
</main>

    <Footer />
    </>
);
};

export default GetStarted;
