import React from 'react';

const AnimatedBackground: React.FC = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden">
    {/* Animated gradient blobs */}
    <div className="absolute w-[70vw] h-[70vw] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-40 rounded-full blur-3xl top-[-25vw] left-[-25vw] animate-pulse" />
    <div className="absolute w-[50vw] h-[50vw] bg-gradient-to-br from-pink-300 via-blue-200 to-purple-300 opacity-30 rounded-full blur-2xl bottom-[-15vw] right-[-15vw] animate-pulse" />
    {/* SVG wave divider at top */}
    <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#a5b4fc" fillOpacity="0.25" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
    </svg>
    {/* SVG wave divider at bottom */}
    <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fbcfe8" fillOpacity="0.18" d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,133.3C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
    </svg>
  </div>
);

export default AnimatedBackground; 