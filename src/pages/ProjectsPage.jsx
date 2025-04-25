import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Github, Eye } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import baclaranImg from '../assets/baclaran.png';
import arduinoImg from '../assets/arduino.png';
import barangayImg from '../assets/barangay.jpeg';
import instaImg from '../assets/insta.jpeg';
import tiktokImg from '../assets/tiktok.png';
import scholarshipImg from '../assets/scholarship.jpeg';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Project categories
  const categories = [
    { id: 'all', name: 'ALL' },
    { id: 'web', name: 'WEB' },
    { id: 'arduino', name: 'ARDUINO' },
  ];

  // Updated projects data
  const projects = [
    {
      id: 1,
      title: "Baclaran Church Website",
      description: "This is a simple website for Baclaran Church. It shows information about the church, its history, mass schedules, and other church activities.",
      image: baclaranImg, 
      category: "web",
      technologies: ["HTML", "CSS"],
      view: "https://imgur.com/a/nqvMo5U" 
    },
    {
      id: 2,
      title: "Smart Vault: Arduino-Based Personal Saving Machine",
      description: "An Arduino-based savings machine that stores coins and bills, tracks your balance, and uses a PIN and servo motor for secure access.",
      image: arduinoImg, 
      category: "arduino",
      technologies: ["Arduino", "C++"],
      view: "https://imgur.com/a/uf7lKKZ"
    },
    {
      id: 3,
      title: "Barangay Molino IV Website Front End",
      description: "A collaborative front-end project replicating the Barangay Molino IV website.",
      image: barangayImg, 
      category: "web",
      technologies: ["HTML", "CSS"],
      view: "https://imgur.com/a/6wQl46W"
    },
    {
      id: 4,
      title: "Instagram Website Front End",
      description: "Group project focused on rebuilding Instagram's front-end interface.",
      image: instaImg, 
      category: "web",
      technologies: ["HTML", "CSS"],
      view: "https://imgur.com/a/OQl4By3"
    },
    {
      id: 5,
      title: "Tiktok Front End Website",
      description: "A group project recreating the front-end of TikTok.",
      image: tiktokImg, 
      category: "web",
      technologies: ["HTML", "CSS"],
      view: "https://imgur.com/a/kKIcoO3"
    },
    {
      id: 6,
      title: "Scholarship Management System",
      description: "A responsive Web-based Scholarship System made by 14 people.",
      image: scholarshipImg, 
      category: "web",
      technologies: ["HTML/CSS", "PHP", "Javascript", "MySQL"],
      view: "https://imgur.com/a/61f5hko "
    }
  ];

  // Filter projects 
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className={`min-h-screen w-full px-4 pb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <PageHeader 
          title="Our"
          highlightedWord="Projects"
          subtitle="Projects built by our team, exploring new possibilities through web development and Arduino."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 border rounded-md font-mono text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-900/50 to-fuchsia-900/50 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-500/20'
                  : 'border-gray-700 text-gray-400 hover:border-cyan-700 hover:text-cyan-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;