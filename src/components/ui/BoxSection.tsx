import React from 'react';

interface BoxSectionProps {
children: React.ReactNode;
className?: string;
}

const BoxSection: React.FC<BoxSectionProps> = ({ children, className = '' }) => {
return (
    <section className="mb-10">
    <div className={`bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 ${className}`}>
        {children}
    </div>
    </section>
);
};

export default BoxSection;
