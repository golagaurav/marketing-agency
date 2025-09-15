import { Link } from 'wouter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SimpleSolutions from '../components/SimpleSolutions';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="pt-6 pb-10 md:pt-10 md:pb-16">

        {/* ================== Hero Section ================== */}
        <section
          className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden"
          aria-label="Hero section"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1950&q=80')",
            }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-16 py-8">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-8">
              <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight animate-fadeInUp">
                Transform Your Digital Presence <br className="hidden md:block" /> & Accelerate
                Growth
              </h1>
              <p className="text-base md:text-xl text-gray-200 max-w-md mx-auto md:mx-0 animate-fadeInUp delay-200">
                We craft experiences that engage, convert and retain. Your partner in scalable
                digital solutions.
              </p>

              {/* CTA and Social Proof */}
              <div className="mt-6 flex flex-col md:flex-row items-center gap-4 animate-fadeInUp delay-600 justify-center md:justify-start">
                <Link href="/get-started">
                  <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                    Get Started
                  </button>
                </Link>
                <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  ⭐️ 4.9/5 Reviews
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center animate-zoomIn delay-800">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Team working on digital project"
                className="w-full max-w-full md:max-w-lg rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ================== Services Section ================== */}
        <section aria-label="Our Services">
          <Services />
        </section>

        {/* ================== Simple Solutions Section ================== */}
        <section aria-label="Simple Solutions">
          <SimpleSolutions />
        </section>
      </main>

      {/* ================== Footer ================== */}
      <Footer />
    </>
  );
};

export default Home;
