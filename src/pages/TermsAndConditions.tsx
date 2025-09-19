import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Divider } from '@heroui/react';
import Icon from '../components/ui/icon';

const LAST_UPDATED = 'September 11, 2025';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="py-16 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">
          Terms and Conditions
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Last updated: <strong>{LAST_UPDATED}</strong>
        </p>

        {/* 1. Introduction */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaFileContract" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
          </div>
          <p>
            These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you
            agree to comply with and be bound by these terms.
          </p>
          <Divider className="mt-4" />
        </section>

        {/* 2. Use of Services */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaCogs" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">2. Use of Services</h2>
          </div>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>You must be at least 18 years old or have legal parental/guardian consent.</li>
            <li>You agree not to use our services for any unlawful or unauthorized purpose.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          </ul>
          <Divider className="mt-4" />
        </section>

        {/* 3. Payments & Billing */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaCreditCard" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">3. Payments & Billing</h2>
          </div>
          <p>
            All payments must be made in full before service delivery unless otherwise agreed. We reserve the right to change
            pricing at any time with appropriate notice.
          </p>
          <Divider className="mt-4" />
        </section>

        {/* 4. Intellectual Property */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaLightbulb" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          </div>
          <p>
            All content, trademarks, and intellectual property on this site belong to us or our partners. You may not reproduce,
            distribute, or use our materials without permission.
          </p>
          <Divider className="mt-4" />
        </section>

        {/* 5. Limitation of Liability */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaExclamationTriangle" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
          </div>
          <p>
            We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
            Use of our website is at your own risk.
          </p>
          <Divider className="mt-4" />
        </section>

        {/* 6. Termination */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaPowerOff" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">6. Termination</h2>
          </div>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice.
          </p>
          <Divider className="mt-4" />
        </section>

        {/* 7. Governing Law */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaBalanceScale" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">7. Governing Law</h2>
          </div>
          <p>
            These Terms are governed by and interpreted in accordance with the laws of [Your Country/State], without regard to
            conflict of law principles.
          </p>
          <Divider className="mt-4" />
        </section>

        {/* 8. Changes to Terms */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaEdit" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">8. Changes to These Terms</h2>
          </div>
          <p>
            We reserve the right to update or modify these Terms at any time. Continued use of our site after changes implies
            acceptance of the new Terms.
          </p>
          <Divider className="mt-4" />
        </section>

        {/* 9. Contact Us */}
        <section className="mb-10 p-6 border rounded-lg transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaEnvelope" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          </div>
          <p>If you have any questions about these Terms, feel free to contact us:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              Email:{' '}
              <a href="mailto:support@example.com" className="text-primary">
                support@example.com
              </a>
            </li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
          <Divider className="mt-4" />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default TermsAndConditions;
