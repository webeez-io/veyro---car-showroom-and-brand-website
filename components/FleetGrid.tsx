import React from 'react';
import { carModels } from '../constants';
import { CarModel } from '../types';

const CarCard: React.FC<{ model: CarModel }> = ({ model }) => (
  <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden group transition-all duration-300 hover:border-[#00c3ff] hover:shadow-2xl hover:shadow-[#00c3ff]/20 flex flex-col">
    <div className="relative overflow-hidden">
      <img src={model.image} alt={model.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-orbitron text-2xl font-bold text-white">{model.name}</h3>
      <p className="text-[#00c3ff] text-md font-semibold mt-1">{model.tagline}</p>
      <p className="text-gray-400 mt-4 text-sm flex-grow">{model.description}</p>
      <div className="mt-6 flex justify-start space-x-6 border-t border-gray-700 pt-6">
        <div>
          <p className="font-orbitron text-xl font-bold text-white">{model.specs.speed}</p>
          <p className="text-gray-400 text-xs uppercase">0-60 MPH</p>
        </div>
        <div>
          <p className="font-orbitron text-xl font-bold text-white">{model.specs.topSpeed}</p>
          <p className="text-gray-400 text-xs uppercase">Top Speed</p>
        </div>
        <div>
          <p className="font-orbitron text-xl font-bold text-white">{model.specs.horsepower}</p>
          <p className="text-gray-400 text-xs uppercase">Horsepower</p>
        </div>
      </div>
    </div>
  </div>
);


const FleetGrid: React.FC = () => {
    return (
        <section id="models" className="py-20 md:py-32 bg-[#111111]">
            <div className="container mx-auto px-6">
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white uppercase text-center mb-12">
                    Our Fleet
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {carModels.map(model => (
                        <CarCard key={model.id} model={model} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetGrid;