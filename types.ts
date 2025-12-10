
export interface CarModel {
  id: number;
  name: string;
  tagline: string;
  image: string;
  specs: {
    speed: string;
    topSpeed: string;
    horsepower: string;
  };
  description: string;
}
