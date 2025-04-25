import React from 'react';
import { ChevronRight, Github, Eye } from 'lucide-react';

const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className="backdrop-blur-sm bg-black/30 rounded-lg border border-gray-800 overflow-hidden group hover:border-cyan-900/70 transition-all duration-300 shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Project Image */}
      <div className="h-48 bg-gray-900 relative overflow-hidden">
        {/* Display the actual project image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with links */}
        <div className={`absolute inset-0 bg-black/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {project.github && (
            <a href={project.github} className="w-10 h-10 rounded-full flex items-center justify-center bg-fuchsia-900/50 border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-800/70 transition-all">
              <Github size={18} />
            </a>
          )}
          <a href={project.view} className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-900/50 border border-cyan-500 text-cyan-400 hover:bg-cyan-800/70 transition-all">
            <Eye size={18} />
          </a>
        </div>
        
        {/* Categories */}
        <div className="absolute top-3 right-3 px-2 py-1 text-xs font-mono bg-black/70 border border-fuchsia-800 text-fuchsia-400 uppercase rounded">
          {project.category}
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 font-mono">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-md bg-black/50 border border-gray-800 text-cyan-400 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* View Project Button */}
        <a 
          href={project.view} 
          className="flex items-center text-sm font-mono text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
        >
          <span>View Project</span>
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ProjectCard;