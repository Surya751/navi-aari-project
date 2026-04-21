import { useState } from 'react';
import { motion } from 'motion/react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Aari Foundation Course',
    category: 'embroidery',
    description: 'Upcoming Batch: May 1 (3 Months)',
    price: '₹2,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlZaviW2g5w4QnOOk7SyIqltgHOFOC9cPQwJjd5b3Zh4v0cGc3gDRWkCaavNWyWpLluXvqn4aRKO6MyAWXphc2Dxj1TfASLaKVNkiCGXzQa_Qdkmt1PtMH-Rx7KU0IJuLBCSJIrfQNnuI_0HOgT4hk0F-qvKahn_9eknhsGDispRkCoIO4n77oUr-N4lB3WtTl9cfwnCq4IFLG9VqLIITrxHCcQ8S-MVWnbpB-OrpYr_qIEsPNPmY7maPZLSRv8d0yr72E2K81rtx1',
    tag: 'Best Seller',
    fabricTypes: ['Silk', 'Georgette']
  },
  {
    id: 's2',
    name: 'Expert Aari Techniques',
    category: 'embroidery',
    description: 'Advanced Zardosi & Needle-work',
    price: '₹2,800',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfTdnmdSUh0jYFSFkOV7oe5trCFHj8toYeGxLhv2w2ZlZrIImY3oTveUC55kSdWHiFcU8VV3yh_iqEu5CFEcz8yGCqR_NCCWZL2PvoKXtugGJ7RclIz6Krdu4W3OMKMfQ-bT6dtMXGrxCURItHTXWfRayVHH5iQ66832GisSUhoDe8g2NDJtnm1cE1gTvXFBtd2_ecHT7WwmrfowtGHc3fot4U8tAcukhQabRVgwxgVvEEDUNZ2pQatOh9R8PCrJbN8zfHP9dW9tTL',
    fabricTypes: ['Chiffon', 'Georgette']
  },
  {
    id: 's3',
    name: 'Saree Pre-plating Service',
    category: 'pre-plating',
    description: 'Professional Ironing & Folding',
    price: '₹500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcTDaZ7D_lWCuTR8dDb3z03yvx-vQXABq7GILAKnxaE9Y8rWR0R2Vlf-i7XIq91c-Q3ZQUqZ14bV9GthW-5tQI80JJwFjN24bQCSFzd9WNm4smnBos83k7vAVNFcHn8MvNya9L0UqsPmpq_x9ED5i7fEbCVBDuZIwSWqrg0ix6SQHAfDFEAo7fCbpHIBaALyF-xs7JrWNdXnUiUqtk-11ckN-mAuzGj1U7nRiLMZSh0_vmoj36TLYEAZSP3Bi3rtajrPlhmsKDahXH',
    tag: 'Offer Price',
    fabricTypes: ['Silk', 'Kanchipuram']
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
    <div className="pt-40 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-24">
      <header className="relative">
         <div className="absolute -left-12 top-0 writing-vertical text-[10px] uppercase tracking-[1em] text-primary/20 font-bold hidden xl:block">
            Catalogue 2026
         </div>
        <span className="text-secondary font-label text-xs uppercase tracking-[0.3em] mb-4 block font-bold">Navi Aari Work Portfolio</span>
        <h1 className="text-7xl md:text-9xl tracking-tighter leading-none mb-10 overflow-hidden">
           The <span className="italic font-light serif text-primary/80">Collection</span>
        </h1>
        <div className="flex flex-wrap gap-8 items-center border-t border-b border-outline-variant py-8 mt-12">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Phone: 9952384485</span>
           </div>
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Insta: @navi_aari_18</span>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 space-y-12">
          <div className="sticky top-32">
            <h3 className="text-2xl font-serif mb-8 text-primary">Refine Selection</h3>
            <div className="space-y-6">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-4">Fabric Type</span>
              <div className="flex flex-col gap-4">
                {['Silk', 'Georgette', 'Chiffon'].map(fabric => (
                  <button 
                    key={fabric}
                    onClick={() => setActiveFabric(activeFabric === fabric ? null : fabric)}
                    className={`flex items-center justify-between group py-2 border-b transition-colors ${activeFabric === fabric ? 'border-primary' : 'border-outline-variant hover:border-primary/50'}`}
                  >
                    <span className={`text-sm tracking-wide transition-colors ${activeFabric === fabric ? 'font-bold text-primary italic' : 'font-light'}`}>{fabric}</span>
                    <div className={`w-2 h-2 rounded-full transition-all ${activeFabric === fabric ? 'bg-secondary' : 'bg-transparent border border-outline-variant group-hover:bg-primary/20'}`}></div>
                  </button>
                ))}
              </div>
              {activeFabric && (
                <button 
                  onClick={() => setActiveFabric(null)}
                  className="text-[10px] uppercase tracking-widest text-secondary font-bold hover:text-primary transition-colors flex items-center gap-2 mt-8"
                >
                  <div className="w-4 h-[1px] bg-secondary"></div>
                  Reset Gallery
                </button>
              )}
            </div>
            
            <div className="mt-20 p-8 glass-card rounded-2xl border border-primary/10">
               <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 italic">Bespoke Design</p>
               <p className="text-xs text-on-surface-variant leading-relaxed">Most pieces shown are custom commissions. For a personalized pattern, please book a 1-on-1 studio session.</p>
            </div>
          </div>
        </aside>

        {/* Catalog Grid */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredServices.map((service, i) => (
            <motion.div 
              layout
              key={service.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-3xl bg-surface-container-low shadow-xl">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src={service.image} 
                  alt={service.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700"></div>
                {service.tag && (
                  <div className="absolute top-6 left-6">
                    <span className="glass-card text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-xl border-white/40 shadow-lg">{service.tag}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <h3 className="text-3xl font-serif text-primary leading-tight group-hover:italic transition-all">{service.name}</h3>
                  <p className="text-on-surface-variant text-sm font-light uppercase tracking-widest">{service.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-serif text-secondary">{service.price}</span>
                  <div className="w-12 h-[1px] bg-secondary/30 mt-2"></div>
                </div>
              </div>
              <button 
                onClick={() => onBook(service)}
                className="w-full py-5 rounded-full border-2 border-primary text-primary text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all duration-500 shadow-md hover:shadow-primary/20"
              >
                Inquire & Book
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
