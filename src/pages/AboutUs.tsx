import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/icon'; // Make sure this path is correct
import AmitImg from '../assets/team/amit.webp';
import NehaImg from '../assets/team/neha.webp';
import RahulImg from '../assets/team/rahul.webp';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="py-16 px-6 max-w-6xl mx-auto text-gray-800">
        {/* Hero / Intro Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="FaInfoCircle" size={30} color="#cde546ff" />
            <h1 className="text-4xl font-bold text-primary">About Us</h1>
          </div>
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

        {/* ✅ Team Section with Colorful Social Icons */}
        <section className="mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Icon name="FaUsers" size={26} color="#45d4b1ff" />
              <h2 className="text-2xl font-bold">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amit Sharma',
                role: 'Founder & CEO',
                img: AmitImg,
                socials: [
                  { name: 'FaInstagram', url: 'https://www.instagram.com/neha', color: '#E1306C' },
                  { name: 'FaTwitter', url: 'https://twitter.com/rahul', color: '#1DA1F2' },
                  { name: 'FaWhatsapp', url: 'https://wa.me/918888888888', color: '#25D366' },
                ],
              },
              {
                name: 'Neha Patel',
                role: 'Creative Director',
                img: NehaImg,
                socials: [
                  { name: 'FaInstagram', url: 'https://www.instagram.com/neha', color: '#E1306C' },
                  { name: 'FaTwitter', url: 'https://twitter.com/rahul', color: '#1DA1F2' },
                  { name: 'FaWhatsapp', url: 'https://wa.me/918888888888', color: '#25D366' },
                ],
              },
              {
                name: 'Rahul Verma',
                role: 'Lead Developer',
                img: RahulImg,
                socials: [
                  { name: 'FaInstagram', url: 'https://www.instagram.com/neha', color: '#E1306C' },
                  { name: 'FaTwitter', url: 'https://twitter.com/rahul', color: '#1DA1F2' },
                  { name: 'FaWhatsapp', url: 'https://wa.me/918888888888', color: '#25D366' },
                ],
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-4">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name.replace('Fa', '')}
                      className="hover:scale-110 transition"
                    >
                      <Icon name={social.name} size={22} color={social.color} />
                    </a>
                  ))}
                </div>
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
