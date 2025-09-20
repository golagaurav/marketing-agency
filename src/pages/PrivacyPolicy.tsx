import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Divider } from '@heroui/react';
import Icon from '../components/ui/icon';
import BoxSection from '../components/ui/BoxSection'; // 👈 Import the reusable component

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="py-16 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">
          Privacy Policy
        </h1>

        <p className="mb-4">
          Last updated: <strong>September 11, 2025</strong>
        </p>

        <p className="mb-6">
          This Privacy Policy describes how we collect, use, and protect your personal information when you use our website or services.
        </p>

        {/* Section 1 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaInfoCircle" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          </div>
          <p className="mb-2">We may collect the following types of information:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Personal details (e.g., name, email, phone number)</li>
            <li>Usage data and analytics</li>
            <li>Cookies and tracking technologies</li>
          </ul>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 2 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaUserShield" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          </div>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>To provide and maintain our services</li>
            <li>To improve and personalize your experience</li>
            <li>To communicate with you</li>
            <li>To comply with legal obligations</li>
          </ul>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 3 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaShareAlt" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
          </div>
          <p>
            We do not sell or rent your personal information to third parties. We may share data with trusted partners for processing or legal reasons.
          </p>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 4 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaLock" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
          </div>
          <p>
            We use reasonable technical and organizational measures to protect your data from unauthorized access, disclosure, or misuse.
          </p>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 5 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaGavel" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          </div>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Access and update your information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 6 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaEdit" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
          </div>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
          </p>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 7 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaEnvelope" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          </div>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <br />
            <strong>Email:</strong> support@example.com
          </p>
          <Divider className="mt-4" />
        </BoxSection>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
