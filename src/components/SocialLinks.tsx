// components/SocialLinks.tsx
import React from 'react';
import Icon from './ui/icon'; // ✅ correct path to your icon.tsx

const SocialLinks: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 20 }}>
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Icon name="FaInstagram" size={30} color="#E1306C" />
      </a>

      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Icon name="FaTwitter" size={30} color="#1DA1F2" />
      </a>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <Icon name="FaWhatsapp" size={30} color="#25D366" />
      </a>
    </div>
  );
};

export default SocialLinks;
