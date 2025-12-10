import React, { useState, useCallback } from 'react';
import { carModels } from '../constants';
import { CarModel } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';


const ModelCard: React.FC<{ model: CarModel }> = ({ model }) => (
    <div className="w-full flex-shrink-0">
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
                <img src={model.image} alt={model.name} className="w-full rounded-lg shadow-2xl shadow-black" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
            </div>
            <div className="text-center md:text-left mt-6 md:mt-0">
                <h3 className="font-orbitron text-4xl font-bold text-white">{model.name}</h3>
                <p className="text-[#00c3ff] text-lg font-semibold mt-1">{model.tagline}</p>
                <p className="text-gray-300 mt-4 h-24">{model.description}</p>
                <div className="mt-6 flex justify-center md:justify-start space-x-8 border-t border-gray-700 pt-6">
                    <div>
                        <p className="font-orbitron text-2xl font-bold text-white">{model.specs.speed}</p>
                        <p className="text-gray-400 text-sm">0-60 MPH</p>
                    </div>
                    <div>
                        <p className="font-orbitron text-2xl font-bold text-white">{model.specs.topSpeed}</p>
                        <p className="text-gray-400 text-sm">Top Speed</p>
                    </div>
                     <div>
                        <p className="font-orbitron text-2xl font-bold text-white">{model.specs.horsepower}</p>
                        <p className="text-gray-400 text-sm">Horsepower</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const ModelsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % carModels.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + carModels.length) % carModels.length);
    }, []);

    return (
        <section id="models" className="py-20 md:py-32 bg-[#111111]">
            <div className="container mx-auto px-6">
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white uppercase text-center">Our Fleet</h2>
                <div className="mt-12 relative">
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {carModels.map(model => (
                                <ModelCard key={model.id} model={model} />
                            ))}
                        </div>
                    </div>
                    <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 p-3 bg-gray-800/50 hover:bg-[#00c3ff] rounded-full transition-all duration-300">
                       <ArrowLeftIcon />
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 p-3 bg-gray-800/50 hover:bg-[#00c3ff] rounded-full transition-all duration-300">
                       <ArrowRightIcon />
                    </button>
                </div>
                 <div className="flex justify-center mt-8 space-x-3">
                    {carModels.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#00c3ff] scale-125' : 'bg-gray-600'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModelsCarousel;