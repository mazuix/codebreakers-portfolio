import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import TeamMemberCard from '../components/TeamMemberCard';
import hazelPic from '../assets/hazel.jpg';
import danielaPic from '../assets/danielapic.png';
import chaPic from '../assets/chapic.jpg';
import jaspic from '../assets/jaspic.png';
import joeypic from '../assets/joeypic.jpg';

const TeamPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredMember, setHoveredMember] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Team members data with slugs matching route paths
    const teamMembers = [
        {
            id: 1,
            slug: "hazel", 
            name: "Hazel Anne Bautista",
            role: "Designer",
            shortBio: "Well driven on creating and finishing projects.",
            skills: ["PHP", "JavaScript", "C++"],
            image: hazelPic
        },
        {
            id: 2,
            slug: "daniela", 
            name: "Daniela Gervacio",
            role: "Frontend",
            shortBio: "Dedicated to creating strong, reliable, and innovative programs.",
            skills: ["React", "JavaScript ", "C++", "Python"],
            image: danielaPic
        },
        {
            id: 3,
            slug: "cha", 
            name: "Charice Morales",
            role: "Project Manager",
            shortBio: "Student just trying her best at everything",
            skills: ["React", "JavaScript", "DOM"],
            image: chaPic
        },
        {
            id: 4,
            slug: "jasmine", 
            name: "Jasmine Pangilin",
            role: "Designer, Frontend",
            shortBio: "Debugging both code and life.",
            skills: ["Tailwind CSS", "React", "Figma"],
            image: jaspic
        },
        {
            id: 5,
            slug: "joey", 
            name: "Joey Sangil",
            role: "QA Tester",
            shortBio: "Focused on delivering bug-free, high-quality software.",
            skills: ["Figma", "React", "Tailwind"],
            image: joeypic
        },
    ];

    return (
        <div className={`min-h-screen w-full px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-[90rem] mx-auto">
                
                <PageHeader
                    title="Meet Our"
                    highlightedWord="Team"
                    subtitle="The minds behind the digital innovation"
                />

                {/* Team Members Grid/Row */}
                <div className="mt-12">
                    {/* On mobile: grid, On desktop: flex row with scroll */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 justify-items-center">
                        {teamMembers.map(member => (
                            <TeamMemberCard
                                key={member.id}
                                member={member}
                                isHovered={hoveredMember === member.id}
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                            />
                        ))}
                    </div>
                    
                    {/* Desktop view: horizontal scroll */}
                    <div className="hidden lg:flex flex-nowrap justify-start gap-8 overflow-x-auto pb-6">
                        {teamMembers.map(member => (
                            <TeamMemberCard
                                key={member.id}
                                member={member}
                                isHovered={hoveredMember === member.id}
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;