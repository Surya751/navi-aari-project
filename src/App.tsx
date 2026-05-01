import { useState } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Consultation from './pages/Consultation';
import Process from './pages/Process';
import { View, Service } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Mail, MapPin, Phone } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const navigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const startBooking = (service: Service) => {
    setSelectedService(service);
    setCurrentView('consultation');
    window.scrollTo(0, 0);
  };

  const handleBookAppointment = () => {
    window.open('https://instagram.com/navi_aari_18', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-[1920px] mx-auto">
          <div
            onClick={() => navigate('home')}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className="relative w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/10 overflow-hidden shadow-inner">
              <img
                src="logo_new-removebg-preview.png"
                alt="Navi Aari Work Logo"
                className="w-12 h-12 object-contain transition-transform duration-700 group-hover:scale-110 relative z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
               </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold italic text-primary leading-tight">Navi Aari Work</span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-secondary font-bold">Atelier 2026</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-12">
            {[
              { label: 'Home', view: 'home' as View },
              { label: 'The Process', view: 'process' as View },
              { label: 'Gallery', view: 'services' as View },
              { label: 'Consultation', view: 'consultation' as View }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.view)}
                className={`font-label text-sm uppercase tracking-[0.2em] font-bold transition-all duration-500 hover:tracking-[0.3em] ${currentView === item.view
                    ? 'text-primary'
                    : 'text-on-surface hover:text-primary'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleBookAppointment}
              className="bg-primary text-on-primary px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-0.5"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {currentView === 'home' && <Home onNavigate={navigate} />}
            {currentView === 'process' && <Process />}
            {currentView === 'services' && <Services onBook={startBooking} />}
            {currentView === 'consultation' && <Consultation selectedService={selectedService} onBack={() => navigate('services')} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer
  className="w-full py-16 px-6 md:px-12 bg-cover bg-center relative"
  style={{ backgroundImage: "url('/navi-aari-project/footer_img.png')" }}
>
  {/* Light overlay for readability */}
  <div className="absolute inset-0 bg-white/70"></div>

  <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">

    {/* Logo */}
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16 bg-white/80 rounded-full flex items-center justify-center border border-primary/10 overflow-hidden shadow-inner">
        <img
          src="logo_new-removebg-preview.png"
          alt="Navi Aari Work Logo"
          className="w-14 h-14 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-2xl font-bold italic text-primary leading-tight">
          Navi Aari Work
        </span>
        <span className="text-[8px] uppercase tracking-[0.4em] text-secondary font-bold">
          Heritage Embroidery Atelier · Chennai
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="flex items-center gap-4 w-full max-w-xs">
      <div className="flex-1 h-px bg-outline-variant" />
      <span className="text-secondary text-xs">✦</span>
      <div className="flex-1 h-px bg-outline-variant" />
    </div>

    {/* Nav Links */}
    <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.2em] font-bold">
      {[
        { label: 'Home', view: 'home' as View },
        { label: 'The Process', view: 'process' as View },
        { label: 'Gallery', view: 'services' as View },
        { label: 'Consultation', view: 'consultation' as View },
      ].map((item) => (
        <button
          key={item.label}
          onClick={() => navigate(item.view)}
          className="text-on-surface/70 hover:text-primary transition-colors"
        >
          {item.label}
        </button>
      ))}
    </div>

    {/* Contact Info */}
    <div className="flex flex-wrap justify-center gap-8 text-sm text-on-surface/70">
      <a
        href="tel:+919952384485"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <Phone className="w-4 h-4 text-secondary" />
        9952384485
      </a>

      <a
        href="https://www.instagram.com/navi_aari_18"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <Camera className="w-4 h-4 text-secondary" />
        @navi_aari_18
      </a>

      <span className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-secondary" />
        Chennai, Tamil Nadu
      </span>
    </div>

    {/* Copyright */}
    <p className="text-xs uppercase tracking-[0.2em] text-on-surface/50 mt-2">
      © 2026 Navi Aari Work. Crafted with Thread & Heart.
    </p>

  </div>
    {/* Floating WhatsApp Button */}
      <div className="fixed right-6 bottom-6 z-50">
        <a
          href="https://wa.me/919952384485"
          target="_blank"
          className="bg-[#881337] p-4 rounded-full shadow-xl text-white flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
          </svg>
        </a>
      </div>
</footer>
    </div>
  );
}
