import React from 'react';

// Container component with stylings
const Containers = ({ 
  children, 
  className = '', 
  accentColor = 'cyan', 
  title = '', 
  fullWidth = false, 
  centered = false, 
  quote = '' 
}) => {
  const colorClasses = {
    border: accentColor === 'cyan' ? 'border-cyan-900/50' : 'border-fuchsia-900/50',
    shadow: accentColor === 'cyan' ? 'shadow-cyan-500/30' : 'shadow-fuchsia-500/30',
    hover: accentColor === 'cyan' ? 'hover:bg-cyan-950/20' : 'hover:bg-fuchsia-950/20',
    title: accentColor === 'cyan' ? 'text-cyan-300 glowing-text typing-text' : 'text-fuchsia-400 glowing-text typing-text',
    accent: accentColor === 'cyan' ? 'text-cyan-400' : 'text-fuchsia-400',
    divider: accentColor === 'cyan' 
      ? 'bg-gradient-to-r from-transparent via-cyan-500 to-transparent' 
      : 'bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent'
  };

  return (
    <div 
      className={`box relative backdrop-blur-sm bg-black/30 p-6 border ${colorClasses.border} rounded-lg  
                 shadow-xl ${colorClasses.shadow} group ${colorClasses.hover} transition-all duration-300 
                 ${centered ? 'text-center' : ''} ${className} ${fullWidth ? 'w-full' : ''}
                 transform group-hover:scale-110 group-hover:translate-y-2`}
    >
      {/* Light Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-lg"></div>

      {title && (
        <>
          <h3 style={{ overflow: 'hidden', whiteSpace: 'nowrap', animation: 'typing 2s steps(14) infinite' }} 
              className={`${colorClasses.title} text-xl font-bold uppercase tracking-wider`}>
            {title}
          </h3>
          <div className={`h-px w-full ${colorClasses.divider} mb-4`}></div>
        </>
      )}
      <div className="text-gray-300 font-mono">{children}</div>
      {quote && (
        <p className={`${colorClasses.accent} italic`}>
          {quote}
        </p>
      )}
    </div>
  );
};

export default Containers;