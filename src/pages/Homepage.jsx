import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Containers from '../components/Containers';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import logo from '../assets/logo.png';
import TeamPage from "./TeamPage.jsx";
import '../index.css'; 

const HomePage = () => {
  const location = useLocation();
  const topRef = useRef(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const handleInitialScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 120;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'instant'
          });
        }
      } else if (initialLoad) {
        window.scrollTo(0, 0);
      }
      setInitialLoad(false);
    };

    setTimeout(handleInitialScroll, 100);
  }, []);

  useEffect(() => {
    if (!initialLoad && location.hash) {
      const targetId = location.hash.substring(1);
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
  }, [location.hash, initialLoad]);

  return (
    <div ref={topRef} className="relative flex flex-col items-center justify-center min-h-screen pt-10 mt-10 overflow-x-hidden">

      {/* Page Header */}
      <div className="mt-10 md:mt-12 px-6 md:px-8 lg:px-12 w-full max-w-7xl"> 
        <PageHeader
          title="Welcome to"
          highlightedWord="CodeBreakers!"
          subtitle="We are a group of student developers who love building things, 
          from websites that works smoothly to hardware projects. 
          We're always learning and exploring new ideas, combining creativity and technology to bring projects to life."
        />
      </div>

      {/* Logo */}
      <div className="-mt-2 mb-4 px-6 md:px-8 lg:px-12">
        <div className="relative w-48 md:w-56 aspect-square logo-container">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain rounded-2xl animate-logo-spin hover:scale-110 transition-all duration-500 ease-in-out shadow-xl"
          />
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-6 mt-6 w-full px-6 md:px-8 lg:px-12 max-w-7xl"> 
        {/* Mission */}
        <div className="backdrop-blur-sm bg-black/30 p-6 border border-fuchsia-900/50 rounded-lg shadow-lg shadow-fuchsia-500/20 group hover:bg-fuchsia-950/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-fuchsia-400 mb-3 uppercase tracking-wider">
            Mission
          </h3>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mb-4"></div>
          <p className="text-gray-300 font-mono">
            We create reliable software and technology using modern tools to solve problems, improve work,
            and help businesses grow in the digital world.
          </p>
        </div>

        {/* Vision */}
        <div className="backdrop-blur-sm bg-black/30 p-6 border border-cyan-900/50 rounded-lg shadow-lg shadow-cyan-500/20 group hover:bg-cyan-950/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-cyan-400 mb-3 uppercase tracking-wider">
            Vision
          </h3>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-4"></div>
          <p className="text-gray-300 font-mono">
            To build smart and useful digital solutions that make life easier for businesses and people.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="w-full min-h-screen animate-fade-in mt-20 md:mt-24">
        <AboutPage isEmbedded={true} />
      </section>

      {/* Team */}
      <section id="team" className="w-full min-h-screen animate-fade-in mt-20 md:mt-5">
        <TeamPage />
      </section>

      {/* Projects */}
      <section id="projects" className="w-full min-h-screen animate-fade-in mt-10 2xl:-mt-40">
        <ProjectsPage />
      </section>

      {/* Contact */}
      <section id="contact" className="w-full min-h-screen animate-fade-in mt-8 md:mt-20">
        <ContactPage isEmbedded={true} />
      </section>


    </div>
  );
};

export default HomePage;