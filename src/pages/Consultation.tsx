import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../types';
import { CheckCircle, PenTool, Layers, Sparkles, Upload, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface ConsultationProps {
  selectedService: Service | null;
  onBack: () => void;
}

export default function Consultation({ selectedService, onBack }: ConsultationProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: selectedService?.category || 'embroidery',
    garmentDetails: '',
    schedule: 'morning'
  });

  const steps = [
    { id: 1, label: 'Service' },
    { id: 2, label: 'Details' },
    { id: 3, label: 'Schedule' }
  ];

  return (
    <main className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-20 text-center max-w-3xl mx-auto">
        <span className="text-secondary font-label text-xs uppercase tracking-[0.4em] mb-4 block font-bold">Studio Consultation</span>
        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tighter text-primary">Reserve Your <span className="italic serif">Session</span></h1>
        <p className="text-on-surface-variant font-light leading-relaxed text-lg underline underline-offset-8 decoration-secondary/30">Connect with Navi Aari Work artisans to bring your vision to life.</p>
      </header>

      {/* Progress Indicator */}
      <div className="flex justify-center items-center gap-6 mb-20 px-4">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-4">
             <div className="flex items-center gap-3">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 scale-100 ${step >= s.id ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant opacity-50'}`}>
                  {s.id}
                </span>
                <span className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${step === s.id ? 'text-primary font-black scale-110' : 'text-on-surface/40'}`}>{s.label}</span>
             </div>
             {i < steps.length - 1 && <div className={`w-16 h-[2px] transition-colors duration-1000 ${step > s.id ? 'bg-primary' : 'bg-outline-variant/30'}`}></div>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8 space-y-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.section 
                key="step1"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="bg-white p-10 md:p-14 rounded-3xl border border-outline-variant/30 shadow-2xl shadow-stone-200/50"
              >
                <h2 className="text-4xl font-serif mb-10 text-primary">Inquiry Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { id: 'embroidery', title: 'Aari Work', icon: PenTool, desc: 'Foundation and Expert training courses.' },
                    { id: 'pre-plating', title: 'Pre-plating', icon: Layers, desc: 'Professional saree services at offer prices.' },
                    { id: 'full', title: 'Studio Tour', icon: Sparkles, desc: 'Visit our Chennai studio for a custom design session.' }
                  ].map((s) => (
                    <button 
                      key={s.id}
                      onClick={() => setFormData({...formData, serviceType: s.id})}
                      className={`text-left group relative p-8 rounded-2xl transition-all duration-500 border-2 ${formData.serviceType === s.id ? 'border-primary bg-primary/5' : 'border-transparent bg-background hover:bg-white hover:shadow-xl'}`}
                    >
                      {formData.serviceType === s.id && <CheckCircle className="absolute top-4 right-4 text-primary w-6 h-6 animate-in zoom-in" />}
                      <div className="mb-6 h-14 w-14 bg-primary text-white rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                        <s.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-serif text-primary">{s.title}</h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed font-light">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.section>
            )}

            {step === 2 && (
              <motion.section 
                key="step2"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="bg-white p-10 md:p-14 rounded-3xl border border-outline-variant/30 shadow-2xl"
              >
                <h2 className="text-4xl font-serif mb-10 text-primary">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-10">
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant/50 focus:border-primary focus:ring-0 py-4 px-0 font-light placeholder:transparent"
                        placeholder="Name"
                      />
                      <label className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary peer-placeholder-shown:font-light">FullName</label>
                    </div>
                    <div className="relative">
                      <textarea 
                        className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant/50 focus:border-primary focus:ring-0 py-4 px-0 font-light resize-none placeholder:transparent"
                        rows={3}
                        placeholder="Details"
                        value={formData.garmentDetails}
                        onChange={(e) => setFormData({...formData, garmentDetails: e.target.value})}
                      />
                      <label className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary">Inquiry Details</label>
                    </div>
                  </div>
                  <div className="bg-background border-2 border-dashed border-primary/20 rounded-3xl flex flex-col items-center justify-center p-12 text-center group hover:border-primary/50 transition-all hover:bg-white hover:shadow-inner">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                       <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-bold text-primary mb-2">Upload References</p>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">PNG, JPG up to 10MB</p>
                    <button className="mt-8 bg-white px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Select</button>
                  </div>
                </div>
              </motion.section>
            )}

            {step === 3 && (
              <motion.section 
                key="step3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="bg-white p-10 md:p-14 rounded-3xl border border-outline-variant/30 shadow-2xl"
              >
                <h2 className="text-4xl font-serif mb-10 text-primary">Time Selection</h2>
                <div className="space-y-12">
                  <div className="flex justify-between items-center bg-background p-6 rounded-2xl">
                    <span className="font-serif text-2xl text-primary font-bold">May 2024</span>
                    <div className="flex gap-6">
                      <button className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><ChevronLeft className="w-5 h-5" /></button>
                      <button className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-6 font-bold">Preferred Window</span>
                      <div className="flex gap-4">
                        {['morning', 'afternoon'].map(w => (
                          <button 
                            key={w}
                            onClick={() => setFormData({...formData, schedule: w})}
                            className={`flex-1 py-4 border-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${formData.schedule === w ? 'border-primary text-primary bg-primary/5 shadow-inner' : 'border-outline-variant text-on-surface-variant hover:border-primary/30'}`}
                          >
                            {w}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-end">
                       <div className="glass-card p-6 rounded-2xl border-l-4 border-secondary">
                          <p className="text-[10px] text-on-surface-variant leading-relaxed">Studio visits are by appointment only. Our concierge will call within 2 hours to confirm your time slot.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          <footer className="flex justify-between items-center py-10">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : onBack()}
              className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 group"
            >
              <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></div>
              {step === 1 ? 'Back to Gallery' : 'Previous step'}
            </button>
            <button 
              onClick={() => step < 3 ? setStep(step + 1) : alert('Studio Session Booked!')}
              className="bg-primary text-on-primary px-16 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
            >
              {step === 3 ? 'Finalize Reservation' : 'Next Stage'}
            </button>
          </footer>
        </div>

        {/* Summary Card */}
        <aside className="lg:col-span-4 sticky top-40">
          <div className="bg-primary text-on-primary p-12 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(76,5,25,0.4)] relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <h3 className="font-serif text-3xl mb-10 border-b border-white/10 pb-6 italic">Reservation</h3>
            <div className="space-y-10 relative z-10">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3 group-hover:text-secondary transition-colors">Selected Class</p>
                <p className="text-xl font-bold font-serif">{selectedService?.name || 'Navi Aari Masterclass'}</p>
                <div className="w-8 h-[1px] bg-secondary/40 mt-3"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Next Batch</p>
                  <p className="text-xl font-bold font-serif">May 01, 2024</p>
                </div>
                <Calendar className="w-7 h-7 text-secondary" />
              </div>
              <div className="pt-10 border-t border-white/10">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-[10px] uppercase tracking-widest text-white/40">Opening Price</span>
                   <span className="text-2xl font-serif text-secondary">{selectedService?.price || '₹3,500'}</span>
                </div>
                <p className="text-[10px] font-light leading-relaxed text-white/50 italic font-serif">Aari work intensive training: Hand-needle, Zardosi & Finishing techniques.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">
             <div className="w-12 h-px bg-primary/10"></div>
             Studio Presence: Chennai
             <div className="w-12 h-px bg-primary/10"></div>
          </div>
        </aside>
      </div>
    </main>
  );
}
