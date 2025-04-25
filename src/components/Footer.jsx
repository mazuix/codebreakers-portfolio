import React from 'react';
import { useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    
    // Handling for home navigation
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 120; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Hide footer on member profile pages
  if (location.pathname.includes('/member/')) {
    return null;
  }

  return (
    <footer className="py-10 px-4 border-t border-cyan-900/50 backdrop-blur-sm bg-black/30">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              {/* Logo Image */}
              <div className="w-15 h-10 mr-3">
                <img
                  src={logoImage}
                  alt="Logo"
                  className="ml-5 w-10 h-10"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                    CODE<span className="text-fuchsia-400">BREAKERS</span>
                  </span>
                </h3>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              </div>
            </div>
            <p className="text-gray-400 font-mono text-sm">
              We're a driven team of developers, building practical and meaningful solutions through code and creativity.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-cyan-400 font-mono uppercase tracking-wider mb-4 text-sm">System Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-300 font-mono text-sm flex items-center"
                >
                  <span className="text-cyan-500 mr-2">→</span> Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-300 font-mono text-sm flex items-center"
                >
                  <span className="text-cyan-500 mr-2">→</span> About
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-300 font-mono text-sm flex items-center"
                >
                  <span className="text-cyan-500 mr-2">→</span> Team
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-300 font-mono text-sm flex items-center"
                >
                  <span className="text-cyan-500 mr-2">→</span> Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-300 font-mono text-sm flex items-center"
                >
                  <span className="text-cyan-500 mr-2">→</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-fuchsia-400 font-mono uppercase tracking-wider mb-4 text-sm">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 font-mono text-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
                contact@codebreakers.com
              </div>
              <div className="flex items-center text-gray-300 font-mono text-sm">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400 mr-2 animate-pulse"></span>
                0912 345 6789
              </div>
              <div className="flex items-center text-gray-300 font-mono text-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
                Cavite Civic Center Palico IV, Imus, Cavite, 4103
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/mazuix/codebreakers-portfolio" className="w-8 h-8 rounded-md border border-cyan-900 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px w-full my-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute h-4 w-4 rounded-full bg-fuchsia-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse"></div>
          <div className="absolute h-10 w-1 bg-cyan-500/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"></div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center items-center pt-4">
          <div className="text-gray-500 font-mono text-xs mb-4 text-center">
            <span className="text-cyan-500">[</span> © {currentYear} CODEBREAKERS. All rights secured. <span className="text-fuchsia-500">]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;