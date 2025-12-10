import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="font-orbitron text-2xl font-bold tracking-widest text-gray-400 mb-4">
          VEYRO
        </div>
        <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-[#00c3ff] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#00c3ff] transition-colors">X / Twitter</a>
            <a href="#" className="hover:text-[#00c3ff] transition-colors">YouTube</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Veyro Motors. All Rights Reserved. Power and Precision Redefined.
        </p>
         <p className="text-xs mt-2">
            Vehicle specifications may vary. Images are for illustrative purposes only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;