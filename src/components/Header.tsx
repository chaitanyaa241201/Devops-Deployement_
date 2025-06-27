
import { Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-solar-orange to-solar-yellow p-2 rounded-full">
              <Sun className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-solar-blue font-poppins">
                SUNCRAFT
              </h1>
              <p className="text-sm text-gray-600 font-inter">Power Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-solar-blue font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-solar-blue font-medium transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-solar-blue font-medium transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-solar-blue font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-solar-orange to-solar-yellow text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-solar-blue"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-solar-blue font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-solar-blue font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-solar-blue font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-solar-blue font-medium">
                Contact
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-solar-orange to-solar-yellow text-white px-6 py-2 rounded-full font-medium text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
