import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-orbitron text-2xl font-bold tracking-widest text-white">
          VEYRO
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#models" className="text-gray-300 hover:text-white transition-colors duration-300">Models</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#performance" className="text-gray-300 hover:text-white transition-colors duration-300">Performance</a>
        </nav>
        <a href="#cta" className="hidden md:inline-block px-5 py-2 border border-[#00c3ff] text-[#00c3ff] font-semibold rounded-sm hover:bg-[#00c3ff] hover:text-white transition-all duration-300">
          Test Drive
        </a>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;