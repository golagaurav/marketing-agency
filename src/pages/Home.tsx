import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
<main className="pt-10 pb-16">
      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap bg-primary text-white py-0">

        {/* ...
        <div className="inline-block animate-marquee text-lg font-semibold px-6">
          Grow Your Business with Us — Trusted by 1,000+ clients worldwide &nbsp;
        </div>
          ... */}

      </div>

      {/* Hero / Banner Section */}
      <section className="relative h-screen md:h-[80vh] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1950&q=80')" }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16">
          {/* Left content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight animate-fadeInUp">
              Transform Your Digital Presence <br className="hidden md:block" /> & Accelerate Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-md animate-fadeInUp delay-200">
              We craft experiences that engage, convert and retain. Your partner in scalable digital solutions.
            </p>

            {/* ...
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4 md:gap-6 mt-6 animate-fadeInUp delay-400">
              <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition">
                Learn More
              </button>
            </div>
            ... */}

            {/* Social proof / small logos or ratings */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 animate-fadeInUp delay-600">
              <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                ⭐️ 4.9/5 Reviews
              </span>

              {/* ...
              <span className="text-gray-200 text-sm">Trusted by 500+ Businesses</span>
              ... */}

            </div>
          </div>

          {/* Right image/illustration */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-zoomIn delay-800">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Digital Growth"
              className="w-full max-w-lg rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      {/* Services Section */}
      <section id="services" className="py-6 bg-secondary px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do Best</h2>
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

      {/* Simple Solutions Section */}
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
              </main>
      <Footer />
    </>
  );
};

export default Home;
