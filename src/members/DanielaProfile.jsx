import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import danielaPic from '../assets/daniela.png';
import {
  Info,
  Play,
  Github,
  Mail,
  FileCode2,
  FileJson,
  Braces,
  Atom,
  Terminal,
  GitBranch,
  FileCode
} from 'lucide-react';

// Update the Header component
const Header = () => {
  return (
    <header className='z-10 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-40 py-6 md:py-8 mt-8 md:mt-20'> {/* Changed mt-16 to mt-8 for mobile */}
      <div className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center md:text-left mb-4 md:mb-0">
        GERVACIO, DANIELA BAYRON
      </div>
      <div className='flex gap-5'>
        <a className='text-2xl hover:text-gray-500 duration-300' href="#"><Github size={24} /></a>
        <a className='text-2xl hover:text-gray-500 duration-300' href="#"><Mail size={24} /></a>
      </div>
    </header>
  )
}

// Update the main content layout
const DanielaProfile = () => {
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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-4 md:px-8 lg:px-12 pt-20"> 
      <Header />

      <main className="flex-grow container mx-auto py-4 md:py-6 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8"> 
        {/* Left side content */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-4 md:mt-6 px-2 md:px-4 lg:px-6"> 
          <button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium py-2 px-6 rounded-full flex items-center justify-center md:justify-start mb-6">
            <Info className="mr-2" size={20} />
            Know Me Better
          </button>

          <h2 className="text-2xl md:text-3xl lg:text-4xl text-purple-400 font-bold mb-4 text-center md:text-left">
            Providing the best solution
          </h2>

          <p className="text-gray-300 mb-6 text-center md:text-left">
            I am currently a 3rd-year student pursuing a Bachelor of Science in
            Information Technology at Cavite State University - Imus Campus. My
            goal is to develop practical and efficient solutions that solve real-world
            problems and improve user experience.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="border border-white text-white py-2 px-8 rounded flex items-center hover:bg-white hover:text-black transition duration-300">
              <Play className="mr-2" size={16} />
              CONTACT ME
            </button>
          </div>

          {/* Skills section */}
          <div className="mt-8 md:mt-12 px-2 md:px-4"> 
            <h3 className="text-2xl text-purple-400 mb-4 md:mb-6 text-center md:text-left">Skills</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 overflow-x-auto pb-4">
              {/* HTML Skill */}
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-20 md:w-24">
                <div className="text-orange-500 mb-2">
                  <FileCode2 size={28} />
                </div>
                <span className="font-medium text-sm">HTML</span>
                <span className="text-xs">95%</span>
              </div>

              {/* CSS Skill */}
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-20 md:w-24">
                <div className="text-blue-500 mb-2">
                  <FileCode size={28} />
                </div>
                <span className="font-medium text-sm">CSS</span>
                <span className="text-xs">90%</span>
              </div>

              {/* JavaScript Skill */}
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-20 md:w-24">
                <div className="text-yellow-500 mb-2">
                  <FileJson size={28} />
                </div>
                <span className="font-medium text-sm">JavaScript</span>
                <span className="text-xs">85%</span>
              </div>

              {/* React Skill */}
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-20 md:w-24">
                <div className="text-blue-400 mb-2">
                  <Atom size={28} />
                </div>
                <span className="font-medium text-sm">React</span>
                <span className="text-xs">80%</span>
              </div>

              {/* Node.js Skill */}
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-20 md:w-24">
                <div className="text-green-500 mb-2">
                  <Terminal size={28} />
                </div>
                <span className="font-medium text-sm">Node.js</span>
                <span className="text-xs">75%</span>
              </div>

              {/* Git Skill */}
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-20 md:w-24">
                <div className="text-red-500 mb-2">
                  <GitBranch size={28} />
                </div>
                <span className="font-medium text-sm">Git</span>
                <span className="text-xs">80%</span>
              </div>

              {/* Python Skill */}
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-20 md:w-24">
                <div className="text-blue-600 mb-2">
                  <Braces size={28} />
                </div>
                <span className="font-medium text-sm">Python</span>
                <span className="text-xs">85%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image adjusts size for different screens */}
        <motion.div
          initial={{ y: 0 }}
          animate={{
            rotateY: [-10, 10, -10],
            y: [-15, 15, -15],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
          className="relative z-10 order-1 md:order-2 w-full md:w-auto -mb-4 md:mb-0 px-4 md:px-6 lg:px-8" 
        >

          <motion.div 
            animate={{
              boxShadow: [
                "0 0 25px 5px rgba(139, 92, 246, 0.5)",
                "0 0 25px 5px rgba(59, 130, 246, 0.5)",
                "0 0 25px 5px rgba(139, 92, 246, 0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center p-1 md:p-2 mx-auto"
          >
            <img
              src={danielaPic}
              alt="Daniela Bayron"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.div>

      </main>
    </div>
  );
};

export default DanielaProfile;