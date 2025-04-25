import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamMemberCard = ({ member, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className="backdrop-blur-sm bg-black/30 rounded-lg border border-gray-800 overflow-hidden group hover:border-cyan-900/70 transition-all duration-300 shadow-lg w-72" 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Member Image */}
            <div className="h-64 bg-gray-900 relative overflow-hidden">
                <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                />

                {/* Overlay with "See More" link on hover */}
                <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                    <Link
                        to={`/member/${member.slug}`}
                        className="px-4 py-2 border border-cyan-500 rounded-md bg-black/50 text-lg font-mono text-cyan-400 hover:bg-cyan-900/30 transition-all duration-300"
                    >
                        See More
                    </Link>
                </div>

                {/* Role Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 text-xs font-mono bg-black/70 border border-fuchsia-800 text-fuchsia-400 uppercase rounded">
                    {member.role}
                </div>
            </div>

            {/* Member Info */}
            <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                </h3>
                <p className="text-gray-400 text-xs mb-2 font-mono truncate">
                    {member.shortBio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {member.skills.slice(0, 3).map((skill, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-0.5 rounded-md bg-black/50 border border-gray-800 text-cyan-400 font-mono"
                        >
              {skill}
            </span>
                    ))}
                    {member.skills.length > 3 && (
                        <span className="text-xs px-2 py-0.5 rounded-md bg-black/50 border border-gray-800 text-fuchsia-400 font-mono">
              +{member.skills.length - 3}
            </span>
                    )}
                </div>

                {/* View Profile Link */}
                <Link
                    to={`/member/${member.slug}`}
                    className="flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                >
                    <span>View Profile</span>
                    <ChevronRight size={14} className="ml-1" />
                </Link>
            </div>

            {/* Border Glow Effect */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
};

export default TeamMemberCard;