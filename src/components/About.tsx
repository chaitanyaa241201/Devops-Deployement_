
import { Shield, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Customers' },
    { icon: Zap, number: '2MW+', label: 'Power Generated' },
    { icon: Shield, number: '10+', label: 'Years Experience' },
    { icon: Award, number: '100%', label: 'MNRE Certified' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            About Suncraft Power Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            We are proud distributors of UNISUN Power Solutions, bringing you premium solar energy systems 
            with a commitment to quality, reliability, and environmental sustainability.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-gradient-to-r from-solar-orange to-solar-yellow p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-solar-blue mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
              Your Trusted Solar Energy Partner
            </h3>
            <div className="space-y-4 text-gray-600 font-inter">
              <p>
                <strong className="text-solar-blue">Proprietors:</strong> Sanket Kulkarni & Premanand Gaikwad bring years of expertise 
                in renewable energy solutions, ensuring every installation meets the highest standards.
              </p>
              <p>
                As authorized distributors of UNISUN Power Solutions, we provide only MNRE-certified solar panels 
                that guarantee optimal performance and long-term reliability.
              </p>
              <p>
                Our mission is simple: to make clean, sustainable energy accessible to every home and business 
                while helping you save on electricity costs and reduce your carbon footprint.
              </p>
            </div>

            <div className="mt-8 p-6 bg-solar-lightGreen rounded-lg border-l-4 border-solar-green">
              <h4 className="font-semibold text-solar-green mb-2">Our Commitment</h4>
              <p className="text-gray-700">
                "Clean, cost-saving energy for a greener tomorrow" - This isn't just our tagline, 
                it's our promise to every customer we serve.
              </p>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="bg-gradient-to-br from-solar-blue to-solar-lightBlue rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-solar-orange rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold">MNRE Certified Products</h5>
                    <p className="text-blue-100 text-sm">Government approved and certified solar solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-solar-orange rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold">Expert Installation</h5>
                    <p className="text-blue-100 text-sm">Professional setup by certified technicians</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-solar-orange rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold">Long-term Support</h5>
                    <p className="text-blue-100 text-sm">Comprehensive warranty and maintenance services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-solar-orange rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold">Cost Effective</h5>
                    <p className="text-blue-100 text-sm">Maximum savings with premium quality panels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
