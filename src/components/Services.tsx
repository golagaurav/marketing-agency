import React from 'react';
import Icon from '../components/ui/icon';

const Services = () => {
return (
    <section id="services" className="py-6 bg-secondary px-6">
    <div className="max-w-6xl mx-auto">
        {/* Heading with icon */}
        <div className="flex items-center justify-center gap-3 mb-12">
        <Icon name="FaCheckCircle" size={36} color="#38A169" />
        <h2 className="text-3xl md:text-4xl font-bold text-center">What We Do Best</h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
            { icon: "🔍", title: "SEO/SEM", description: "Reach your audience with precision." },
            { icon: "📊", title: "Marketing", description: "Tailored campaigns that deliver." },
            { icon: "🎨", title: "Web Design", description: "Beautiful, responsive websites." },
            { icon: "📱", title: "Mobile Apps", description: "Engaging apps for Android & iOS." },
        ].map((service, idx) => (
            <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            </div>
        ))}
        </div>
    </div>
    </section>
);
};

export default Services;
