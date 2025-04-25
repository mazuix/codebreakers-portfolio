import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const handleNavClick = (e, path) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage with path
      window.location.href = path; 
    } else {
      // If on homepage, smooth scroll
      if (path === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const targetId = path.substring(2);
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
      }
    }
  };
  
  // Nav items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/#about' },
    { name: 'Team', path: '/#team' },
    { name: 'Projects', path: '/#projects' }
  ];
  
  
  const subtleGlow = '0 0 8px rgba(106, 59, 223, 0.4), 0 0 12px rgba(32, 121, 226, 0.2)';
  
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-20 pt-4">
      <nav 
        className="flex items-center justify-between px-4 md:px-5 py-2 mx-4 md:mx-auto transition-all duration-300 bg-opacity-85 backdrop-blur-md"
        style={{ 
          backgroundColor: '#0F0821',
          width: '100%',  
          maxWidth: '800px',
          boxShadow: subtleGlow,
          borderRadius: '4px',
          borderTop: '1px solid #973CCD',
          borderBottom: '1px solid #2079E2',
          borderLeft: '1px solid #973CCD',
          borderRight: '1px solid #2079E2',
          filter: 'drop-shadow(0 0 4px rgba(106, 59, 223, 0.2))'
        }}
      >
        <div 
          className="absolute inset-0 rounded opacity-20"
          style={{ 
            background: 'radial-gradient(ellipse at center, rgba(106, 59, 223, 0.1) 0%, rgba(32, 121, 226, 0.05) 70%, transparent 100%)',
            zIndex: -1,
            transform: 'scale(1.05)',
            pointerEvents: 'none'
          }}
        ></div>
        
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-lg md:text-xl" style={{ 
            fontFamily: 'monospace', 
            letterSpacing: '1px',
            textShadow: '0 0 6px rgba(106, 59, 223, 0.6)',
            position: 'relative'
          }}>
            <span style={{ color: '#973CCD' }}>{'<'}</span> 
            CODE<span style={{ color: '#2079E2' }}>BREAKERS</span> 
            <span style={{ color: '#973CCD' }}>{'/>'}</span>
            <div style={{
              position: 'absolute',
              bottom: '-4px',
              left: '0',
              height: '1px',
              width: '100%',
              background: 'linear-gradient(90deg, transparent, #6A3BDF, transparent)',
              animation: 'pulsate 2s infinite'
            }}></div>
          </Link>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-white hover:text-blue-300 transition-all duration-300 relative group text-sm"
              onMouseEnter={() => setHoverItem(item.name)}
              onMouseLeave={() => setHoverItem(null)}
              onClick={(e) => handleNavClick(e, item.path)}
            >
              {item.name}
              <span 
                className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                style={{ 
                  width: hoverItem === item.name ? '100%' : '0',
                  background: 'linear-gradient(90deg, #6A3BDF, #2079E2)',
                  boxShadow: '0 0 4px #2079E2'
                }}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-[#0F0821] border border-[#973CCD] rounded-lg md:hidden">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="block px-4 py-2 text-white hover:bg-[#2079E2]/10 transition-all duration-300"
                onClick={(e) => {
                  handleNavClick(e, item.path);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <Link 
              to="/#contact" 
              className="block px-4 py-2 mt-2 border-t border-[#973CCD]/30"
              onClick={(e) => {
                handleNavClick(e, '/#contact');
                setIsMenuOpen(false);
              }}
            >
              <span className="text-white hover:text-[#2079E2] transition-all duration-300">
                Contact Us
              </span>
            </Link>
          </div>
        )}
        
        {/* Contact Button, hidden on mobile */}
        <div className="hidden md:block">
          <Link to="/#contact">
            <button 
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="px-3 py-1 text-white text-sm transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              style={{ 
                background: '#0F0821',
                border: '1px solid #973CCD',
                borderRadius: '2px',
                boxShadow: '0 0 5px rgba(151, 60, 205, 0.3)'
              }}
            >
              <span className="relative z-10">CONTACT US</span>
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #973CCD, #2079E2)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
              ></div>
            </button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 relative">
            <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'top-2 rotate-45' : 'top-0'
            }`}></span>
            <span className={`absolute w-full h-0.5 bg-white top-2 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
            }`}></span>
          </div>
        </button>
      </nav>
      
      {/* Add a style for the pulsate animation */}
      <style jsx global>{`
        @keyframes pulsate {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}