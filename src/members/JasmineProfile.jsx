import React, { useState, useEffect } from 'react';
import { User, Github, Mail, Heart, Star } from 'lucide-react';
import profileImage from '../assets/jaspic.png'; 
import { useLocation } from 'react-router-dom';

function JasmineProfile() {
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

  const personalInfo = {
    name: "Jasmine Pangilin",
    title: "Frontend Developer | Designer",
    bio: "I am a passionate frontend developer and designer based in Cavite State University - Imus Campus. I like turning design ideas into real websites that look good and run smoothly.",
    email: "jasminepangilin@cvsu.edu.ph",
    github: "https://github.com/mazuix",
    skills: [
      "HTML / CSS", "Bootstrap", "JavaScript",
      "Tailwind CSS", "Git/GitHub", "Figma", "UI/UX Design"
    ]
  };

  return (
    <div className="font-sans min-h-screen bg-pink-50 overflow-y-auto pt-20">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-pink-50 -z-10">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, #EC4899 25%, transparent 25%, transparent 50%, #EC4899 50%, #EC4899 75%, transparent 75%, transparent)`,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-100 to-pink-100 opacity-80"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-20">
        {/* Header */}
        <header className="flex flex-col items-center justify-center">
          <div className="text-center">
            {/* Profile Photo with border */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 rounded-full bg-pink-300 blur-md opacity-40"></div>

              {/* Circular photo with border */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400">
                <img
                  src={profileImage}
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-pink-600 font-serif">
              {personalInfo.name}
            </h1>

            <h2 className="text-xl mb-4 text-pink-500 font-light">
              | {personalInfo.title} |
            </h2>

            <p className="max-w-lg mx-auto text-base mb-6 text-gray-700">
              {personalInfo.bio}
            </p>

            <div className="flex justify-center space-x-4 mb-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md transition duration-300 hover:scale-110 border-2 border-pink-300"
              >
                <Github size={20} className="text-pink-600" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-white p-3 rounded-full shadow-md transition duration-300 hover:scale-110 border-2 border-pink-300"
              >
                <Mail size={20} className="text-pink-600" />
              </a>
            </div>
          </div>
        </header>

        {/* Divider */}
        <div className="flex justify-center items-center py-2">
          <div className="h-px w-1/3 bg-pink-300"></div>
          <Heart size={20} className="mx-2 text-pink-500" />
          <div className="h-px w-1/3 bg-pink-300"></div>
        </div>

        {/* Skills Section */}
        <section className="py-4">
          <h2 className="text-2xl font-bold mb-4 text-pink-600 font-serif text-center">My Skills</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {personalInfo.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white px-4 py-2 transition duration-300 hover:scale-105 border-2 border-pink-300 rounded-full flex items-center shadow-md cursor-default"
              >
                <Star size={12} className="text-pink-500 mr-2" />
                <p className="text-sm font-medium text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default JasmineProfile;