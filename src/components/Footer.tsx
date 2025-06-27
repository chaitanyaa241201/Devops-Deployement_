
import { Sun, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-solar-orange to-solar-yellow p-2 rounded-full">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins">SUNCRAFT</h3>
                <p className="text-gray-400">Power Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 font-inter max-w-md">
              Trusted solar experts for homes & businesses. MNRE-certified panels providing 
              clean, cost-saving energy for a greener tomorrow.
            </p>
            
            <div className="text-sm text-gray-400">
              <p className="mb-2">Proprietors:</p>
              <p>• Sanket Kulkarni</p>
              <p>• Premanand Gaikwad</p>
              <p className="mt-2">Distributor Partner of UNISUN Power Solutions</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-solar-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-solar-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-solar-orange transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-solar-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-solar-orange mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Atharva RH no. 106,</p>
                  <p>Muralidhar Nagar</p>
                  <p>Pathardi Phata Nashik 422010</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-solar-orange" />
                <div className="text-gray-300 text-sm">
                  <p>7721926351</p>
                  <p>8411927703</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-solar-orange" />
                <p className="text-gray-300 text-sm">suncraftpowersolutions@gmail.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-solar-orange" />
                <p className="text-gray-300 text-sm">www.unisunpowersolutions.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Suncraft Power Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Powered by Clean Energy</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-solar-green rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-solar-yellow rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-solar-orange rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
