import React from 'react';
import { GlowingButton } from './GlowingButton';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="relative py-20 md:py-32 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('/footer.png')"}}>
        <div className="absolute inset-0 bg-[#111111]/80"></div>
        <div className="relative container mx-auto px-6 text-center">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white uppercase">
               Ready to Command the Road?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Your throne awaits. Schedule your private viewing and test drive to experience the future of automotive excellence.
            </p>
            <div className="mt-10">
                <GlowingButton text="Reserve Your Experience" />
            </div>
        </div>
    </section>
  );
};

export default CtaSection;