import React from 'react';
import Icon from './ui/icon';

const steps = [
{
    number: 1,
    title: "Reach Out",
    description: "Tell us your goals & challenges.",
    icon: "MdOutlineContactMail",
},
{
    number: 2,
    title: "Plan & Strategize",
    description: "We map out your roadmap.",
    icon: "FaRegLightbulb",
},
{
    number: 3,
    title: "Execute",
    description: "We build, launch & optimize.",
    icon: "AiOutlineBuild",
},
{
    number: 4,
    title: "Grow",
    description: "You scale & thrive.",
    icon: "FaChartLine",
},
];

const SimpleSolutions = () => {
return (
    <section className="py-24 px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Illustration */}
        <div className="flex justify-center md:justify-end animate-fadeInUp">
        <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
            alt="Team collaborating on project"
            className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
            loading="lazy"
            decoding="async"
        />
        </div>

        {/* Content */}
        <div className="animate-fadeInUp delay-200">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            Our Simple <span className="text-indigo-600">4-Step Process</span>
        </h2>

        <div className="space-y-8">
            {steps.map(({ number, title, description, icon }) => (
            <div key={number} className="flex items-start gap-6">
                <div
                aria-label={`Step ${number}`}
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-extrabold
                            bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
                            text-white shadow-lg"
                >
                {number}
                </div>
                <div>
                <div className="flex items-center gap-3 mb-2">
                    <Icon name={icon} size={24} className="text-indigo-600" />
                    <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>
            </div>
            ))}
        </div>

        <div className="mt-8 space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
            Get Started
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition">
            Learn More
            </button>
        </div>
        </div>
    </div>
    </section>
);
};

export default SimpleSolutions;
