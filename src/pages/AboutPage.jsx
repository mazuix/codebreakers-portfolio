import React from 'react';
import PageHeader from '../components/PageHeader';
import { Users, Target } from 'lucide-react';

const AboutPage = ({ isEmbedded = false }) => {
  return (
    <div className={`${isEmbedded ? '' : 'min-h-screen'} py-12 px-4`}>
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="About"
          highlightedWord="Us"
          subtitle="We're a driven team of developers, building practical and meaningful solutions through code and creativity."
        />

        <div className="relative mt-10 space-y-10">
          {/* Background */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-2xl"></div>

          {/* Section: Intro */}
          <div className="relative bg-gradient-to-r from-cyan-800/30 to-fuchsia-800/30 border border-gray-700 rounded-xl shadow-lg backdrop-blur-md p-6 text-gray-300">
            <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-3">Who We Are</h2>
            <p className="text-base leading-relaxed">
              We are a vibrant collective of creatives, developers, and visionaries who share a love for technology and innovation. At our core, we believe in the power of digital solutions to connect, inspire, and solve problems. Our team thrives on collaboration, drawing on diverse backgrounds and skillsets to deliver high-impact digital solutions that push the boundaries of possibility.
            </p>
          </div>

          {/* Combined Section: Team Background & Expertise */}
          <div className="relative grid md:grid-cols-2 gap-8 items-start bg-black/30 border border-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 rounded-xl backdrop-blur p-10">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-cyan-500/10 rounded-full border border-cyan-400">
                <Users className="text-cyan-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">Team Background & Purpose</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  Our team is composed of individuals with backgrounds in web development, UI/UX design, quality assurance, and project management. We share a common purpose: to build user-friendly systems that solve real-world problems. Through practical design and reliable development, we aim to create tools that empower users and enhance their experience in the digital space.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-fuchsia-500/10 rounded-full border border-fuchsia-400">
                <Target className="text-fuchsia-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-fuchsia-300 mb-2">Expertise & Focus Areas</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  We specialize in building digital solutions with a focus on the front end. Using technologies like React, we create responsive, user-friendly interfaces that ensure seamless experiences. Our expertise also includes UI/UX design, PHP development, and MySQL database management, delivering reliable and high-quality systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;