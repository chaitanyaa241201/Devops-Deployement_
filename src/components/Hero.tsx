
import { Zap, Award, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-solar-blue via-blue-600 to-solar-lightBlue min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-solar-orange rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-solar-yellow rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-solar-lightOrange rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-solar-green rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-solar-yellow" />
              <span className="text-solar-lightOrange font-medium">Trusted Solar Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
              Power Your Future with
              <span className="bg-gradient-to-r from-solar-orange to-solar-yellow bg-clip-text text-transparent">
                {" "}Clean Energy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-inter">
              MNRE-certified solar panels for homes & businesses. 
              Clean, cost-saving energy for a greener tomorrow.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-solar-yellow" />
                <span className="text-blue-100">MNRE Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-solar-green" />
                <span className="text-blue-100">Eco-Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-solar-orange" />
                <span className="text-blue-100">Cost Saving</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-solar-orange to-solar-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-solar-blue transition-all"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-gradient-to-br from-solar-orange to-solar-yellow rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-white/20 h-8 rounded"></div>
                  ))}
                </div>
                <div className="text-white text-center font-semibold">Solar Panel Array</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-white">
                  <span>Energy Production</span>
                  <span className="font-bold text-solar-yellow">↗ 95%</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>Monthly Savings</span>
                  <span className="font-bold text-solar-green">₹12,500</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>CO₂ Reduced</span>
                  <span className="font-bold text-solar-lightGreen">2.5 tons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
