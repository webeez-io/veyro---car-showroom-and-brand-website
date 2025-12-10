import React from 'react';

const DetailShot: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => (
    <div className="relative overflow-hidden rounded-md group">
        <img src={imageUrl} alt={alt} className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
    </div>
);

const PerformanceSection: React.FC = () => {
    return (
        <section id="performance" className="py-20 md:py-32 bg-[#111111]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div>
                        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white uppercase">
                            Performance <span className="text-gray-500">&</span> Design
                        </h2>
                        <p className="mt-6 text-gray-300">
                            Every curve, every component, and every line of code is obsessively engineered for one purpose: to deliver the most exhilarating driving experience imaginable. We fuse cutting-edge materials with timeless design principles to create a machine that performs as beautifully as it looks.
                        </p>
                         <p className="mt-4 text-gray-300">
                           From the aerospace-grade carbon fiber monocoque to the AI-driven powertrain management, Veyro is a testament to what's possible when innovation knows no bounds.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <DetailShot imageUrl="/public/perfo1.png" alt="Detail of a Veyro wheel" />
                        <DetailShot imageUrl="/public/perfo2.png" alt="Detail of a Veyro headlight" />
                        <DetailShot imageUrl="/public/perfo3.png" alt="Detail of Veyro interior stitching" />
                        <DetailShot imageUrl="/public/lowancle.png" alt="Detail of a Veyro engine" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceSection;