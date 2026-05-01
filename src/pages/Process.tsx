import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, ScrollText, Users, Award, ShieldCheck } from 'lucide-react';

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const steps = [
    {
      title: "Material Selection",
      icon: ScrollText,
      content: "We source only the finest Kanchipuram silks and raw fabrics. Our threads are hand-selected for tensile strength and sheen, ensuring your heirloom lasts for generations."
    },
    {
      title: "Bespoke Conceptualization",
      icon: Users,
      content: "Every project starts with a direct consultation with our lead artisan. We map your vision onto the fabric, considering drape and light interaction."
    },
    {
      title: "Authentic Aari Crafting",
      icon: Award,
      content: "Using the 15th-century Mughal hand-needle technique, our artisans spend up to 400 hours on a single bridal masterpiece. No machines, just mastery."
    },
    {
      title: "Quality Assurance",
      icon: ShieldCheck,
      content: "Each stitch is inspected under high-intensity lighting for tension and alignment. We follow a 12-point quality protocol before any piece leaves our atelier."
    }
  ];

  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-5xl mx-auto space-y-24">
      <header className="text-center space-y-6">
        <span className="text-secondary font-label text-xs uppercase tracking-[0.4em] font-bold">The Navi Aari Methodology</span>
        <h1 className="text-6xl md:text-8xl font-serif text-primary tracking-tighter">Artisan <span className="italic font-bold">Process</span></h1>
        <p className="text-on-surface-variant font-bold max-w-2xl mx-auto leading-relaxed underline underline-offset-8 decoration-secondary/10">
          Professionalism in every loop. Our process combines ancient techniques with modern quality standards.
        </p>
      </header>

      <section className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`border rounded-3xl transition-all duration-500 ${openIndex === index ? 'border-primary bg-primary/[0.02] shadow-xl' : 'border-outline-variant hover:border-primary/30'}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-8 text-left"
            >
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-surface-container text-primary'}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1 block">Step 0{index + 1}</span>
                  <h3 className="text-2xl font-serif text-primary">{step.title}</h3>
                </div>
              </div>
              <div className={`transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-6 h-6 text-primary/40" />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-12 pt-4 pl-24 text-on-surface-variant font-bold leading-relaxed text-lg max-w-2xl italic">
                    {step.content}
                   <div className="w-12 h-px bg-secondary/30 mt-8"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      {/* Boutique Toggles for Quality Comparison */}
      <section className="border-t border-outline-variant pt-24 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif text-primary">Why Professional Aari?</h2>
          <p className="text-sm font-bold text-on-surface-variant">The difference is in the details.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-surface-container p-10 rounded-[2rem] border border-outline-variant">
              <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-8">Hand-Stitched (Navi)</h4>
              <ul className="space-y-6">
                 {["Variable tension for fabric health", "Unique organic patterns", "Double-locked loops", "400+ hours of expertise"].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-sm font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="bg-white p-10 rounded-[2rem] border border-outline-variant opacity-60">
              <h4 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-8">Standard Machine Work</h4>
              <ul className="space-y-6">
                 {["Uniform tension causes fabric stress", "Repetitive generic designs", "Single-thread risks", "Mass produced in 4 hours"].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-sm font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>
    </div>
  );
}
