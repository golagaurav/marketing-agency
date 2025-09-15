import React from 'react';



const SimpleSolutions = () => {
return (
    <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-end animate-fadeInUp">
        <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
            alt="Working Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
        />
        </div>
        <div className="animate-fadeInUp delay-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Simple 4‑Step Process</h2>
        <div className="space-y-6">
            {[
            { number: 1, title: "Reach Out", description: "Tell us your goals & challenges." },
            { number: 2, title: "Plan & Strategize", description: "We map out your roadmap." },
            { number: 3, title: "Execute", description: "We build, launch & optimize." },
            { number: 4, title: "Grow", description: "You scale & thrive." },
            ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                {step.number}
                </div>
                <div>
                <h3 className="font-semibold mb-1 text-lg">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                </div>
            </div>
            ))}
        </div>
        <div className="mt-8 space-x-4">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition">
            Get Started
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary/10 transition">
            Learn More
            </button>
        </div>
        </div>
    </div>
    </section>
);
};

export default SimpleSolutions;
