import { useState } from 'react';
import { motion } from 'motion/react';
import { Service } from '../types';

const SERVICES: Service[] = [
  /* ----------------- AARI FOUNDATION & AARI WORK ----------------- */
  {
    id: 's1',
    name: 'Aari Foundation Course',
    category: 'aari',
    description: 'Upcoming Batch: May 1 (3 Months)',
    price: '₹2,500',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlZaviW2g5w4QnOOk7SyIqltgHOFOC9cPQwJjd5b3Zh4v0cGc3gDRWkCaavNWyWpLluXvqn4aRKO6MyAWXphc2Dxj1TfASLaKVNkiCGXzQa_Qdkmt1PtMH-Rx7KU0IJuLBCSJIrfQNnuI_0HOgT4hk0F-qvKahn_9eknhsGDispRkCoIO4n77oUr-N4lB3WtTl9cfwnCq4IFLG9VqLIITrxHCcQ8S-MVWnbpB-OrpYr_qIEsPNPmY7maPZLSRv8d0yr72E2K81rtx1',
    tag: 'Best Seller',
    fabricTypes: ['Aari Work']
  },
  {
    id: 's2',
    name: 'Advanced Aari Zardosi Work',
    category: 'aari',
    description: 'Expert Zardosi, Thread & Needle Techniques',
    price: '₹2,800',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBfTdnmdSUh0jYFSFkOV7oe5trCFHj8toYeGxLhv2w2ZlZrIImY3oTveUC55kSdWHiFcU8VV3yh_iqEu5CFEcz8yGCqR_NCCWZL2PvoKXtugGJ7RclIz6Krdu4W3OMKMfQ-bT6dtMXGrxCURItHTXWfRayVHH5iQ66832GisSUhoDe8g2NDJtnm1cE1gTvXFBtd2_ecHT7WwmrfowtGHc3fot4U8tAcukhQabRVgwxgVvEEDUNZ2pQatOh9R8PCrJbN8zfHP9dW9tTL',
    fabricTypes: ['Aari Work']
  },

  /* ----------------- SAREE PRE-PLEATING IMAGES ----------------- */
  {
    id: 's3',
    name: 'Saree Pre-Pleating (Kanchipuram)',
    category: 'saree',
    description: 'Perfect pleats & finishing – ready to wear',
    price: '₹500',
    image: '/navi-aari-project/saree-1.png',
    tag: 'Popular',
    fabricTypes: ['Saree']
  },
  {
    id: 's4',
    name: 'Saree Ironing & Pleat Setting',
    category: 'saree',
    description: 'Professional pressing for all saree types',
    price: '₹500',
    image: '/navi-aari-project/saree-2.png',
    fabricTypes: ['Saree']
  },
  {
    id: 's5',
    name: 'Soft Silk Saree Pleating',
    category: 'saree',
    description: 'Soft silk friendly neat pleat folding',
    price: '₹500',
    image: '/navi-aari-project/saree-3.png',
    fabricTypes: ['Saree']
  },
  {
    id: 's6',
    name: 'Grand Saree Pleating Service',
    category: 'saree',
    description: 'Wedding saree pleating & fall finishing',
    price: '₹500',
    image: '/navi-aari-project/saree-4.png',
    fabricTypes: ['Saree']
  },

  /* ----------------- AARI (CONE WORK) ----------------- */
  {
    id: 's7',
    name: 'Aari Cone Work – Floral Design',
    category: 'Mehndi',
    description: 'Premium cone design for blouses & lehengas',
    price: '₹1,500',
    image: '/navi-aari-project/cone-1.png',
    fabricTypes: ['Mehndi']
  },
  {
    id: 's8',
    name: 'Aari Cone Work – Bridal Finish',
    category: 'Mehndi',
    description: 'Heavy bridal cone work detailing',
    price: '₹1,800',
    image: '/navi-aari-project/cone-2.png',
    fabricTypes: ['Mehndi']
  },
  {
    id: 's9',
    name: 'Aari Cone Work – Traditional Pattern',
    category: 'Mehndi',
    description: 'Traditional sleeve & border cone work',
    price: '₹1,200',
    image: '/navi-aari-project/cone-3.png',
    fabricTypes: ['Mehndi']
  },

  /* ----------------- AARI SAMPLE ----------------- */
  {
    id: 's10',
    name: 'Aari Thread Work Sample',
    category: 'aari',
    description: 'Basic thread work embroidery sample',
    price: '₹750',
    image: '/navi-aari-project/aari-1.png',
    fabricTypes: ['Aari Work']
  },
  {
    id: 's11',
    name: 'Aari Blouse Embroidery Sample',
    category: 'aari',
    description: 'Front & sleeve blouse embroidery sample',
    price: '₹950',
    image: '/navi-aari-project/aari-2.png',
    fabricTypes: ['Aari Work']
  },
  {
    id: 's12',
    name: 'Aari Border Work Sample',
    category: 'aari',
    description: 'Border pattern embroidery sample',
    price: '₹850',
    image: '/navi-aari-project/aari-3.png',
    fabricTypes: ['Aari Work']
  },
  {
    id: 's13',
    name: 'Aari Bridal Sample',
    category: 'aari',
    description: 'Heavy bridal blouse embroidery sample',
    price: '₹1,500',
    image: '/navi-aari-project/aari-4.png',
    fabricTypes: ['Aari Work']
  },

  /* ----------------- MEHNDI CATEGORY ----------------- */
  {
    id: 's14',
    name: 'Bridal Mehndi (Full Hands)',
    category: 'mehndi',
    description: 'Bridal traditional designs – both hands',
    price: '₹3,500',
    image: '/navi-aari-project/cone-4.png',
    fabricTypes: ['Mehndi']
  },
  {
    id: 's15',
    name: 'Arabic Mehndi Design',
    category: 'mehndi',
    description: 'Quick elegant Arabic mehndi patterns',
    price: '₹600',
    image: '/navi-aari-project/cone-5.png',
    fabricTypes: ['Mehndi']
  },
  {
    id: 's16',
    name: 'Simple Mehndi (Front Hand)',
    category: 'mehndi',
    description: 'Minimal designs – small occasions',
    price: '₹350',
    image: '/navi-aari-project/cone-6.png',
    fabricTypes: ['Mehndi']
  }
];

interface ServicesProps {
  onBook: (service: Service) => void;
}

export default function Services({ onBook }: ServicesProps) {
  const [activeFabric, setActiveFabric] = useState<string | null>(null);

  const filteredServices = activeFabric
    ? SERVICES.filter(s => s.fabricTypes.includes(activeFabric))
    : SERVICES;

  return (
    <div className="pt-40 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Top Filters */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          The <span className="text-primary italic">Collection</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Aari Work', 'Saree', 'Mehndi'].map(category => (
            <button
              key={category}
              onClick={() =>
                setActiveFabric(activeFabric === category ? null : category)
              }
              className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all ${
                activeFabric === category
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-400 hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}

          {activeFabric && (
            <button
              onClick={() => setActiveFabric(null)}
              className="text-sm uppercase text-secondary font-bold"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
        {filteredServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-center"
          >
            <div className="w-full aspect-[4/5] overflow-hidden rounded-3xl shadow-xl mb-8">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            {service.tag && (
              <p className="text-xs uppercase text-secondary font-bold tracking-widest mb-2">
                {service.tag}
              </p>
            )}

            <h3 className="text-3xl font-serif text-primary mb-2">
              {service.name}
            </h3>

            <p className="text-gray-600 text-sm font-bold uppercase tracking-widest mb-4">
              {service.description}
            </p>

            <p className="text-2xl font-serif text-secondary mb-6">
              {service.price}
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-primary text-white text-sm font-semibold">
                Learn More
              </button>

              <button
                onClick={() => onBook(service)}
                className="px-8 py-3 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Buy
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}