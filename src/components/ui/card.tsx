import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  footer?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  footer,
  className = '',
}) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 ${className}`}>
      {imageSrc && (
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
