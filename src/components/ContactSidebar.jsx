import React from 'react';
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';

// Sidebar component showing contact details and social links
const ContactSidebar = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Contact info section */}
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
          Contact Information
        </h3>
        
        {/* List of contact details with icons */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-start">
            <Mail className="mr-2 md:mr-3 text-fuchsia-400 mt-1 flex-shrink-0" size={16} />
            <div>
              <p className="text-gray-400 text-xs md:text-sm">Email us at</p>
              <p className="text-gray-200 text-sm md:text-[13px] lg:text-base">contact@codebreakers.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="mr-2 md:mr-3 text-fuchsia-400 mt-1 flex-shrink-0" size={16} />
            <div>
              <p className="text-gray-400 text-xs md:text-sm">Call us at</p>
              <p className="text-gray-200 text-sm md:text-base">0912 345 6789</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="mr-2 md:mr-3 text-fuchsia-400 mt-1 flex-shrink-0" size={16} />
            <div className="flex-1">
              <p className="text-gray-400 text-xs md:text-sm">Our location</p>
              <p className="text-gray-200 text-sm md:text-base break-words">Cavite Civic Center Palico IV, Imus, Cavite, 4103</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="mr-2 md:mr-3 text-fuchsia-400 mt-1 flex-shrink-0" size={16} />
            <div>
              <p className="text-gray-400 text-xs md:text-sm">Working hours</p>
              <p className="text-gray-200 text-sm md:text-base">Mon - Fri: 9AM - 5PM<br/>Weekend: Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
          Connect With Us
        </h3>
        
        {/* Social media section */}
        <div className="flex space-x-3">
          <a
            href="https://github.com/mazuix/codebreakers-portfolio"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800/50 text-gray-300 hover:bg-cyan-900 hover:text-cyan-300 transition-all"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;