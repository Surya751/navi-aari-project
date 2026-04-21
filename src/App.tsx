import { useState } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Consultation from './pages/Consultation';
import Process from './pages/Process';
import { View, Service } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Mail, MapPin } from 'lucide-react';

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
            {/* Logo Container - Place your peacock logo in /public/logo.png */}
            <div className="relative w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/10 overflow-hidden shadow-inner">
              <img
                src="logo.png"
                alt="Navi Aari Work Logo"
                className="w-12 h-12 object-contain transition-transform duration-700 group-hover:scale-110 relative z-10"
                onError={(e) => {
                  // Fallback: If local logo.png is missing, show professional 'N'
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-primary font-bold text-xl group-hover:tracking-widest transition-all z-0">N</span>
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
                className={`font-label text-[10px] uppercase tracking-[0.3em] font-normal transition-all duration-500 hover:tracking-[0.4em] ${currentView === item.view
                    ? 'text-primary'
                    : 'text-on-surface/50 hover:text-primary'
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

      {/* Footer */}
      <footer className="w-full py-20 px-6 md:px-12 bg-surface-container border-t border-outline-variant/20">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <div className="font-serif text-xl font-medium text-primary">Navi Aari Work</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm">
            <button className="uppercase tracking-[0.2em] text-on-surface/60 hover:text-primary">Phone: 9952384485</button>
            <button
              onClick={() => window.open('https://instagram.com/navi_aari_18', '_blank')}
              className="uppercase tracking-[0.2em] text-on-surface/60 hover:text-primary"
            >
              @navi_aari_18
            </button>
            <button className="uppercase tracking-[0.2em] text-on-surface/60 hover:text-primary">Contact Us</button>
          </div>
          <div className="flex gap-6 mt-4">
            <Camera className="w-5 h-5 text-primary cursor-pointer hover:opacity-80" onClick={() => window.open('https://instagram.com/navi_aari_18', '_blank')} />
            <Mail className="w-5 h-5 text-primary cursor-pointer hover:opacity-80" />
            <MapPin className="w-5 h-5 text-primary cursor-pointer hover:opacity-80" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mt-8">
            © 2026 Navi Aari Work. Crafted with Aari Excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}
