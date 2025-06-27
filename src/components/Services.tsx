
import { Home, Building, Settings, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete solar solutions for homes with MNRE-certified panels, professional installation, and long-term warranty.',
      features: ['Rooftop Installation', 'Grid-tied Systems', 'Net Metering', 'Energy Storage']
    },
    {
      icon: Building,
      title: 'Commercial Solar',
      description: 'Large-scale solar installations for businesses, offices, and industrial facilities to reduce operational costs.',
      features: ['Industrial Scale', 'Custom Design', 'ROI Analysis', 'Maintenance Plans']
    },
    {
      icon: Settings,
      title: 'Installation & Setup',
      description: 'Expert installation services by certified technicians ensuring optimal performance and safety standards.',
      features: ['Site Assessment', 'Professional Install', 'System Testing', 'Commissioning']
    },
    {
      icon: HeadphonesIcon,
      title: 'Support & Maintenance',
      description: 'Comprehensive after-sales support with regular maintenance and performance monitoring services.',
      features: ['24/7 Support', 'Regular Checkups', 'Performance Monitor', 'Warranty Service']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            From residential rooftops to large commercial installations, we provide comprehensive 
            solar solutions tailored to your energy needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-solar-lightBlue group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-solar-orange to-solar-yellow p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 font-inter">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-solar-green rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href="#contact" 
                  className="text-solar-blue font-semibold hover:text-solar-orange transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-solar-blue to-solar-lightBlue rounded-3xl p-8 md:p-12 text-center text-white animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Ready to Go Solar?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Get a free consultation and quote for your solar energy system today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-solar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:7721926351"
              className="bg-white text-solar-blue hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
