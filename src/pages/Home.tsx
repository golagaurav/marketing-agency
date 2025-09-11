import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">working is process</h1>
        <div className="flex justify-center mb-16">
          <img
            src="https://www.cflowapps.com/wp-content/uploads/2021/06/improve_proceswork.jpg"
            alt="Process Work"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Services Section */}
        <section id="services" className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              We Provide The Best Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🔍",
                  title: "SEO/SEM",
                  description:
                    "Optimize your online presence and reach your target audience effectively.",
                },
                {
                  icon: "📊",
                  title: "Marketing",
                  description:
                    "Strategic marketing solutions tailored to your business goals.",
                },
                {
                  icon: "🎨",
                  title: "Web Design",
                  description:
                    "Create stunning websites that convert visitors into customers.",
                },
                {
                  icon: "📱",
                  title: "Others",
                  description:
                    "Comprehensive digital solutions for your business needs.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://illustrations.popsy.co/amber/remote-work.svg"
                  alt="Solutions Illustration"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">Simple Solutions!</h2>
                <div className="space-y-6">
                  {[
                    {
                      number: 1,
                      title: "Contact us",
                      description: "Reach out to discuss your needs",
                    },
                    {
                      number: 2,
                      title: "Consult",
                      description: "We analyze your requirements",
                    },
                    {
                      number: 3,
                      title: "Place order",
                      description: "Choose your perfect solution",
                    },
                    {
                      number: 4,
                      title: "Payment",
                      description: "Secure and flexible payment options",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-x-4">
                  <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                    Get Started
                  </button>
                  <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary/10 transition-colors">
                    Read more
                  </button>
                </div>
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
