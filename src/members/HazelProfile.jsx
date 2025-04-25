import React, { useState, useEffect } from 'react';
import { User, Github, Mail, Instagram } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import headerImage from '../assets/Camellya.jpg';
import profileImage from '../assets/hazel.jpg';

const ProfilePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top 
    window.scrollTo(0, 0);

    // Navigation from navbar
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash && location.pathname === '/') {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 120;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    handleHashNavigation();
  }, [location.pathname]);

  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 pt-20 px-4">
      {/* Profile Card */}
      <div className="w-full max-w-5xl bg-black border border-red-600 rounded-xl mt-0 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="relative h-60">
          <img
            src={headerImage}
            alt="Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-10 bottom-[-72px] w-36 h-36 rounded-full border-4 border-white bg-white overflow-hidden shadow-md">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="pt-32 px-6 text-center">
          <h2 className="text-3xl font-bold text-white text-left">Hazel Anne</h2>
          <p className="text-red-400 text-base text-left">Front-End Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-end space-x-6 pt-4 pr-6">
          <a href="https://github.com/monoclesire" target="_blank" rel="noopener noreferrer">
            <Github size={24} className="text-white hover:text-red-400 transition-colors" />
          </a>
          <a href="https://instagram.com/roryxz404" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="text-white hover:text-red-400 transition-colors" />
          </a>
          <a href="mailto:ic.hazelanne.bautista@cvsu" target="_blank" rel="noopener noreferrer">
            <Mail size={24} className="text-white hover:text-red-400 transition-colors" />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-red-500 text-sm font-medium">
          <button
            onClick={() => setActiveTab('skills')}
            className={`flex-1 py-3 px-4 transition-all ${activeTab === 'skills' ? 'border-b-2 border-red-500 text-red-400' : 'text-white/60'
              }`}
          >
            <span className="inline-flex items-center gap-1">
              <span>&lt;/&gt;</span> Skills
            </span>
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 py-3 px-4 transition-all ${activeTab === 'about' ? 'border-b-2 border-red-500 text-red-400' : 'text-white/60'
              }`}
          >
            <span className="inline-flex items-center gap-1">
              <User size={14} /> About
            </span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="bg-red-950 border border-red-700 rounded-lg p-5">
                <h4 className="text-red-400 font-semibold mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">HTML</span>
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">JavaScript</span>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-red-950 border border-red-700 rounded-lg p-5">
                <h4 className="text-red-400 font-semibold mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">C++</span>
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">Python</span>
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">Java</span>
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">MySQL</span>
                </div>
              </div>

              {/* Tools */}
              <div className="bg-red-950 border border-red-700 rounded-lg p-5">
                <h4 className="text-red-400 font-semibold mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">Git</span>
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">VS Code</span>
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full">Terminal</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
              <p>
                I’m a passionate developer who enjoys building full-stack web applications with a strong foundation in C++, Python, and modern web technologies. My focus is on creating efficient and visually striking digital solutions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
