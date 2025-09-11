import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <main className="py-16 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">Terms and Conditions</h1>

        <p className="text-center text-gray-600 mb-6">
          Last updated: <strong>September 11, 2025</strong>
        </p>

        {/* 1. Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you
            agree to comply with and be bound by these terms.
          </p>
        </section>

        {/* 2. Use of Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">2. Use of Services</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>You must be at least 18 years old or have legal parental/guardian consent.</li>
            <li>You agree not to use our services for any unlawful or unauthorized purpose.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          </ul>
        </section>

        {/* 3. Payments & Billing */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">3. Payments & Billing</h2>
          <p>
            All payments must be made in full before service delivery unless otherwise agreed. We reserve the right to change
            pricing at any time with appropriate notice.
          </p>
        </section>

        {/* 4. Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property on this site belong to us or our partners. You may not reproduce,
            distribute, or use our materials without permission.
          </p>
        </section>

        {/* 5. Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
            Use of our website is at your own risk.
          </p>
        </section>

        {/* 6. Termination */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice.
          </p>
        </section>

        {/* 7. Governing Law */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">7. Governing Law</h2>
          <p>
            These Terms are governed by and interpreted in accordance with the laws of [Your Country/State], without regard to
            conflict of law principles.
          </p>
        </section>

        {/* 8. Changes to Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">8. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms at any time. Continued use of our site after changes implies
            acceptance of the new Terms.
          </p>
        </section>

        {/* 9. Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, feel free to contact us:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Email: <a href="mailto:support@example.com" className="text-primary">support@example.com</a></li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
