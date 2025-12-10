import React from 'react';

interface GlowingButtonProps {
    text: string;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({ text }) => {
    return (
        <a 
            href="#cta" 
            className="relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg text-[#00c3ff] uppercase tracking-widest border-2 border-[#00c3ff] rounded-sm group overflow-hidden transition-all duration-300 hover:text-white hover:shadow-[0_0_25px_0px] hover:shadow-[#00c3ff]/70"
        >
            <span className="absolute inset-0 w-0 bg-[#00c3ff] transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative">{text}</span>
        </a>
    );
};