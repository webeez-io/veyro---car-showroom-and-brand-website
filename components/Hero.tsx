import React from 'react';
import { GlowingButton } from './GlowingButton';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-veyro.png" 
          alt="Veyro Supercar" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 px-6">
        <h1 className="font-orbitron text-5xl md:text-8xl font-black text-white uppercase tracking-wider leading-tight drop-shadow-2xl">
          Power Meets Precision
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
          Experience the pinnacle of automotive engineering. Veyro Motors combines futuristic design with earth-shattering performance.
        </p>
        <div className="mt-10">
          <GlowingButton text="Book a Test Drive" />
        </div>
      </div>
    </section>
  );
};

export default Hero;