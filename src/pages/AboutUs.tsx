import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="py-16 px-6 max-w-6xl mx-auto text-gray-800">
        {/* Hero / Intro Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a passionate team of digital strategists, developers, and designers helping brands grow and thrive in the online world.
          </p>
        </section>

        {/* Company Story */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, our agency has been on a mission to empower businesses through high-impact digital solutions.
            With a focus on innovation, quality, and performance, we’ve helped clients across industries achieve measurable results.
          </p>
        </section>

        {/* Mission / Vision / Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚀 Our Mission</h3>
            <p className="text-gray-600">
              To help businesses scale with result-driven digital strategies and exceptional customer experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🎯 Our Vision</h3>
            <p className="text-gray-600">
              To become the leading digital agency known for innovation, integrity, and impact.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">💡 Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Creativity</li>
              <li>Transparency</li>
              <li>Client Success</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </section>

        {/* Team Section (Optional) */}
        <section className="mb-20 text-center">
          <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Amit Sharma", role: "Founder & CEO" },
              { name: "Neha Patel", role: "Creative Director" },
              { name: "Rahul Verma", role: "Lead Developer" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Let’s Grow Together</h2>
          <p className="text-gray-600 mb-6">
            Ready to take your brand to the next level? We're just a message away.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Contact Us
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
