export type View = 'home' | 'services' | 'consultation' | 'process';

export interface Service {
  id: string;
  name: string;
  category: 'embroidery' | 'pre-plating';
  description: string;
  price: string;
  image: string;
  tag?: string;
  fabricTypes: string[];
}
