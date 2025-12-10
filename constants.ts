import { CarModel } from './types';

export const carModels: CarModel[] = [
  {
    id: 1,
    name: "Veyro Aura",
    tagline: "Sentience in Motion",
    image: "public/veyro_aura.png",
    specs: {
      speed: "1.9s",
      topSpeed: "280 mph",
      horsepower: "1,500 HP",
    },
    description: "The Aura is not just a car; it's an extension of the driver's will. With its bio-integrated neural interface, it anticipates every move, delivering a driving experience that feels truly telepathic.",
  },
  {
    id: 2,
    name: "Veyro Apex",
    tagline: "Conquer the Horizon",
    image: "public/veyero_apex.png",
    specs: {
      speed: "2.1s",
      topSpeed: "260 mph",
      horsepower: "1,350 HP",
    },
    description: "Engineered for pure dominance, the Apex combines raw power with aerodynamic perfection. Its adaptive chassis and gravity-defying grip make every corner a challenge to be mastered.",
  },
  {
    id: 3,
    name: "Veyro Ghost",
    tagline: "Silence is Power",
    image: "public/perfo3.png",
    specs: {
      speed: "2.5s",
      topSpeed: "240 mph",
      horsepower: "1,100 HP",
    },
    description: "The Ghost is a whisper in the dark, a phantom on the asphalt. Its all-electric powertrain delivers instant, silent torque for an unnervingly swift and stealthy presence on the road.",
  },
  {
    id: 4,
    name: "Veyro Nova",
    tagline: "Ignite the Stars",
    image: "public/perfo4.png",
    specs: {
      speed: "2.3s",
      topSpeed: "270 mph",
      horsepower: "1,450 HP",
    },
    description: "A symphony of light and speed, the Nova features a revolutionary photonic engine and a crystalline body that refracts light, creating a breathtaking spectacle as it tears through the night.",
  },
];
