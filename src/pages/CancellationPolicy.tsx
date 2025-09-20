import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Divider } from '@heroui/react';
import Icon from '../components/ui/icon';
import BoxSection from '../components/ui/BoxSection'; // ✅ Imported reusable section wrapper

const CancellationPolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="py-16 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">
          Cancellation Policy
        </h1>

        <p className="mb-6 text-gray-600 text-center">
          Last updated: <strong>September 11, 2025</strong>
        </p>

        {/* Section 1 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaTimesCircle" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">1. Order Cancellations</h2>
          </div>
          <p>
            You may cancel your order within <strong>24 hours</strong> of purchase for a full refund,
            provided that the service or product has not yet been delivered or processed.
          </p>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 2 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaTools" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">2. Service-Based Cancellations</h2>
          </div>
          <p>For digital services (e.g., web design, SEO, marketing):</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Cancellations made within 24 hours are eligible for a full refund.</li>
            <li>Cancellations after 24 hours may incur partial charges based on work completed.</li>
            <li>Once a project has entered the final phase, cancellations are not eligible for refund.</li>
          </ul>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 3 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaSyncAlt" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">3. Subscription Services</h2>
          </div>
          <p>
            You can cancel your subscription at any time. Your access will remain active until the end
            of the billing cycle. We do not offer prorated refunds for unused time after cancellation.
          </p>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 4 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaPhoneAlt" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">4. How to Cancel</h2>
          </div>
          <p>To request a cancellation, please contact us via:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              Email:{' '}
              <a href="mailto:support@example.com" className="text-primary">
                support@example.com
              </a>
            </li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Live Chat available on our website</li>
          </ul>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 5 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaExclamationTriangle" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">5. Exceptions</h2>
          </div>
          <p>
            Some promotional offers or one-time discounted services may be marked as non-refundable.
            These exceptions will be clearly stated at the time of purchase.
          </p>
          <Divider className="mt-4" />
        </BoxSection>

        {/* Section 6 */}
        <BoxSection>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="FaEdit" size={20} className="text-primary" />
            <h2 className="text-2xl font-semibold">6. Policy Changes</h2>
          </div>
          <p>
            We reserve the right to update or modify this Cancellation Policy at any time. Changes will
            be effective immediately upon posting on this page.
          </p>
          <Divider className="mt-4" />
        </BoxSection>
      </main>
      <Footer />
    </>
  );
};

export default CancellationPolicy;
