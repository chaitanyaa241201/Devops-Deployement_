
import { MapPin, Phone, Mail, Globe, Clock, User } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Atharva RH no. 106, Muralidhar Nagar', 'Pathardi Phata Nashik 422010']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['7721926351', '8411927703']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['suncraftpowersolutions@gmail.com']
    },
    {
      icon: Globe,
      title: 'Website',
      details: ['www.unisunpowersolutions.com']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Ready to switch to solar energy? Contact our experts for a free consultation 
            and personalized quote for your home or business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-poppins">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-gradient-to-r from-solar-orange to-solar-yellow p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-gradient-to-r from-solar-blue to-solar-lightBlue rounded-lg text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6" />
                <h4 className="text-xl font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Proprietors */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-solar-orange">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-6 w-6 text-solar-orange" />
                <h4 className="text-xl font-semibold text-gray-900">Meet Our Proprietors</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><strong>Sanket Kulkarni</strong> - Solar Energy Specialist</p>
                <p><strong>Premanand Gaikwad</strong> - Technical Expert</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                Request a Free Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-transparent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-transparent transition-colors">
                    <option>Select property type</option>
                    <option>Residential Home</option>
                    <option>Commercial Building</option>
                    <option>Industrial Facility</option>
                    <option>Agricultural Land</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Electricity Bill (₹)
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-transparent transition-colors">
                    <option>Select bill range</option>
                    <option>₹1,000 - ₹3,000</option>
                    <option>₹3,000 - ₹5,000</option>
                    <option>₹5,000 - ₹10,000</option>
                    <option>₹10,000 - ₹20,000</option>
                    <option>₹20,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-transparent transition-colors"
                    placeholder="Tell us about your solar energy requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-solar-orange to-solar-yellow text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
