import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Github, Mail, Code, Palette, Database, User } from 'lucide-react';
import chapic from '../assets/chapic.jpg';

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

  const [activeTab, setActiveTab] = useState('skills');

  const profile = {
    name: "Charice Morales",
    role: "Frontend Developer",
    bio: "Passionate developer with a love for clean code and creative solutions. I enjoy building web applications that make a difference.",
    avatar: chapic,
    skills: [
      { name: "Frontend", items: ["React", "Bootstrap", "Tailwind CSS", "JavaScript", "HTML", "CSS"] },
      { name: "Backend", items: ["Python", "Java", "C++","MongoDB"] },
      { name: "Tools", items: ["Git","Figma"] }
    ],
    social: [
      { name: "GitHub", icon: Github, url: "https://github.com/napzoo" },
      { name: "Email", icon: Mail, url: "mailto:ic.charice.morales@cvsu.edu.ph" }
    ]
  };

  const tabs = [
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'about', label: 'About', icon: User }
  ];

  // Function to render skill categories
  const renderSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {profile.skills.map((category, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-pink-600 flex items-center gap-2">
            {category.name === "Frontend" ? <Palette size={18} /> :
              category.name === "Backend" ? <Database size={18} /> : <Code size={18} />}
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map((skill, idx) => (
              <span key={idx} className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // Function to render about
  const renderAbout = () => (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-pink-600">About Me</h3>
      <p className="text-gray-700 mb-4">{profile.bio}</p>
      <p className="text-gray-700">
        I'm a Bachelor of Science on Information Technology student currently enrolled in Cavite State University - Imus branch.
        I am proficient in frontend technologies and languages and currently learning more backend technologies and languages.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-50 to-purple-500 p-6 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header Card */}
        <div className="mt-0 bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-pink-400 to-purple-500 h-32"></div>
          <div className="px-6 py-4 flex flex-col md:flex-row gap-6 items-center">
            <div className="relative -mt-16">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-green-400 w-6 h-6 rounded-full border-4 border-white"></div>
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
              <p className="text-pink-500 font-medium">{profile.role}</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {profile.social.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    className="bg-gray-50 hover:bg-pink-50 text-gray-600 hover:text-pink-500 p-2 rounded-lg transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-6 border-b">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors
                  ${activeTab === tab.id
                    ? "text-pink-600 border-b-2 border-pink-500"
                    : "text-white hover:text-pink-400"}`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'skills' && renderSkills()}
          {activeTab === 'about' && renderAbout()}
        </div>
      </div>
    </div>
  );
}