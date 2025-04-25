import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Github, 
  Mail, 
  Code, 
  CheckCircle,
  User 
} from 'lucide-react';
import joeypic from '../assets/joeypic.jpg'; 

export default function ProfilePage() {
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

  const profile = {
    name: "Joey Sangil",
    role: "QA Tester",
    bio: "Detail-oriented QA tester ensuring software quality through rigorous testing and sharp analytical skills. I specialize in identifying issues before they reach production, with experience in both manual and automated testing.",
    avatar: joeypic, 
    skills: [
      "HTML", "CSS", "JavaScript", "React", "Figma"
    ],
    social: [
      { name: "GitHub", icon: Github, url: "https://github.com/jooeeessss" },
      { name: "Email", icon: Mail, url: "mailto:ic.joey.sangil@cvsu.edu.ph" }
    ]
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 md:p-8 pt-20"> 
      <div className="max-w-3xl mx-auto"> 
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 mt-15 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-green-100"
            />
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
              <p className="text-green-600 font-medium">{profile.role}</p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
                {profile.social.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      className="text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                      aria-label={link.name}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <User size={20} className="text-green-600" />
            About Me
          </h2>
          
          <div className="bg-green-100 text-green-700 px-4 py-3 rounded-md">
            <p className="leading-relaxed">{profile.bio}</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Code size={20} className="text-green-600" />
            Skills & Expertise
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center bg-green-100 text-green-700 px-3 py-2 rounded-md text-sm">
                <CheckCircle size={14} className="mr-1" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}