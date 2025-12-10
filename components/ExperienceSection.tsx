import React from 'react';

const PlayIcon = () => (
    <svg className="w-20 h-20 md:w-24 md:h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-[#111111]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white uppercase">Experience The Drive</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Feel the raw power and refined control. This is more than a drive; it's a new reality.</p>
        <div className="mt-12 relative group cursor-pointer aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-[#00c3ff]/10">
          <img 
            src="/public/Video_Thumbnail.png"
            alt="Driving Experience"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#00c3ff]/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#00c3ff]/80 transition-all duration-300 scale-100 group-hover:scale-110">
                <PlayIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;