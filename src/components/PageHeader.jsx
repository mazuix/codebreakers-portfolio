import React from 'react';

const PageHeader = ({ title, highlightedWord, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      {/* Main title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
          {title} <br className="md:hidden" /><span className="text-fuchsia-400">{highlightedWord}</span>
        </span>
      </h2>
      <div className="h-px w-36 md:w-48 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
      
      {/* Subtitle */}
      <p className="text-cyan-400 text-lg md:text-xl tracking-wider font-mono max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;