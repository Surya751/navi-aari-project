import { motion } from 'motion/react';
import { Sparkles, Layers } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: 'services' | 'consultation') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-x-hidden space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACS99Atb2qoIabW1HxIkyGV1JZtGIj54cYqJpyBR8tkzZOwU8_RodKV7qjcHtN_wqphQPeMTzDdxzBPvt9pE0Qw_-8yA8hDLV3on_SSm5ZdcoiByGI03lV1oDrm814SOxdHhu4D_pjQtkoOGmTQBFtEgDbci18bZkeMwUtlgTzFOhu4gQA4iPtcQ3x2fD5CB4PdsEvQY4eVqsZwCuM8dPBuLiY16-0-HxdYQCIyKhbQ550_XAhuruwrlq2EsIk7vMJkO4UwaC9NTrH"
            alt="Intricate aari embroidery background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/90 md:bg-background/70"></div>

          {/* Decorative Vertical Rail */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12 text-primary/30">
            <span className="writing-vertical text-xs uppercase tracking-[0.8em] font-bold">Heritage Craftsmanship</span>
            <div className="w-px h-24 bg-primary/20"></div>
            <span className="writing-vertical text-xs uppercase tracking-[0.8em] font-bold">Navi Aari Work</span>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl py-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-secondary"></div>
              <span className="font-label text-secondary tracking-[0.4em] uppercase text-xs font-bold whitespace-nowrap">Preserving the 15th Century Art of Hand-Embroidery</span>
            </div>

            {/* Logo Accent */}
            <div className="mb-6 opacity-80 group">
              <img src="logo.png" alt="" className="w-24 h-24 object-contain grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" />
            </div>

            <h1 className="text-7xl md:text-9xl text-primary leading-[0.85] mb-10 tracking-tight">
              Navi <br />
              <span className="italic font-light serif text-primary/90">Aari Work</span>
            </h1>

            <div className="relative mb-12">
              <div className="absolute inset-0 bg-primary/5 -m-6 rounded-2xl -rotate-1"></div>
              <div className="relative glass-card p-8 rounded-xl border-l-4 border-primary">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-primary font-bold text-2xl mb-1">Academy Batch 2026</p>
                    <p className="text-secondary font-serif italic text-lg">Commencing May 1, 2026</p>
                  </div>
                  <div className="bg-primary text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Enroll Now</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Duration</span>
                    <p className="font-bold text-primary">3 Months Certification</p>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Course Fee</span>
                    <p className="font-bold text-secondary text-base">Offer: ₹3,500</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-6 items-center">
                <button
                  onClick={() => window.open('https://instagram.com/navi_aari_18', '_blank')}
                  className="bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1"
                >
                  Free Consultation
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="group flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-transparent hover:border-primary pb-1 transition-all"
                >
                  Explore Services
                  <div className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all"></div>
                </button>
              </div>
              <p className="text-[10px] text-on-surface-variant/60 italic font-medium tracking-widest uppercase">
                * Note: Follow our page & message us on Instagram to secure your slot.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6 text-xs font-bold text-primary/60 tracking-widest uppercase">
              <span>9952384485</span>
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              <span>@navi_aari_18</span>
            </div>
          </motion.div>

          {/* Overlapping Image Grid */}
          <div className="relative hidden lg:block h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="absolute top-0 right-0 w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-white"
            >
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUAxwEZnjUbo4NVbKdpKxfYBRhO4NWbXTYPvg-xyHuuxDKweov7jWdF_JKcQ4xgqjn98QUkVAe4FySI4ljLgVzl40w5X0j8BbTfGorwJr7bSZWnZtyQpFaf35On0PV8RTwjOqkv5dr0yLXr2D9i5IXzw6lYkL3Q3sHqE33gvjiLbHaB5GUYyuPwb9GpDjZ9N8FLfmz5Bj5Wg9pLU40-AlgWBFstseT2ZaCw9gkYmVjBEROGYkRHwgjGgpGwqPlbt-tePzwzO3qXWMv" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute bottom-0 left-0 w-72 aspect-square rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white"
            >
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAScnGMwyLU_B83OS6QwsOA1rwwdH3x6fS9weXxx0fsgPUPkST7SrvkmH-7OPyFY7yWBkUR84Liuwzf-VPt6VdHgN49V4e3R3CaOkvnPoj0yVnWYmSDIQHjYmfiofOQ-08G9WifaXLEmWAH8AOOgTMzsLIiP5LPxdTawCOo0zPVFDqYJ0KzMlGsVx7txRJGZJOifw2e8lzeWFtXzjGyoM8ho_fwMH9xasv7xqnxuaQ_jwDXW1UroADtMSDGzfCtUiN2BFmmqSlR7AtQ" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Expertise & Training Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 relative">
            <span className="text-9xl font-serif font-black text-primary/5 absolute -top-12 -left-8 pointer-events-none">Expertise</span>
            <h2 className="text-5xl md:text-6xl text-primary leading-tight mb-12 relative z-10">
              The Path to <br />
              <span className="italic font-light serif">Mastery</span>
            </h2>
            <div className="space-y-10 relative z-10">
              <div className="group transition-all">
                <span className="text-secondary font-bold text-xs tracking-widest mr-4">01.</span>
                <h3 className="text-2xl font-serif inline-block group-hover:translate-x-2 transition-transform">Traditional Needle-work</h3>
                <p className="mt-4 text-on-surface-variant font-light leading-relaxed max-w-sm">Authentic Mughal techniques using hand-turned Aari needles for structural precision.</p>
              </div>
              <div className="group transition-all">
                <span className="text-secondary font-bold text-xs tracking-widest mr-4">02.</span>
                <h3 className="text-2xl font-serif inline-block group-hover:translate-x-2 transition-transform">Bespoke Design</h3>
                <p className="mt-4 text-on-surface-variant font-light leading-relaxed max-w-sm">From bridal vision to thread-work reality, every piece is uniquely yours.</p>
              </div>
              <div className="group transition-all">
                <span className="text-secondary font-bold text-xs tracking-widest mr-4">03.</span>
                <h3 className="text-2xl font-serif inline-block group-hover:translate-x-2 transition-transform">Artisan Academy</h3>
                <p className="mt-4 text-on-surface-variant font-light leading-relaxed max-w-sm">Professional coaching for aspiring designers and embroidery artists.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 border-r border-outline-variant h-full hidden lg:block"></div>

          <div className="lg:col-span-6 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-outline-variant/30"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4">Aari Classes</h4>
                <p className="text-on-surface-variant text-sm font-light mb-8 italic">Certification included upon successful completion of the internship.</p>
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest text-on-surface-variant/60">Limited Slots</span>
                  <span className="text-3xl font-serif text-secondary">₹3,500</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-primary text-white p-10 rounded-3xl shadow-xl shadow-primary/20"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Pre-plating</h4>
                <p className="text-white/70 text-sm font-light mb-8 italic">Ready to wear in under 30 seconds. Professional folding for all silks.</p>
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest text-white/40">Opening Offer</span>
                  <span className="text-3xl font-serif text-secondary-container">₹500</span>
                </div>
              </motion.div>
            </div>

            <div className="bg-surface-container p-8 rounded-2xl flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-surface-container bg-stone-300" />
                ))}
              </div>
              <p className="text-sm font-light text-on-surface-variant">Join <span className="font-bold text-primary">150+ students</span> who graduated from our academy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="bg-surface-container py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl text-primary mb-4">Portfolio <span className="italic font-light serif text-primary/70">Showcase</span></h2>
              <p className="text-on-surface-variant font-light underline decoration-secondary underline-offset-8">Exotic patterns across premium fabrics</p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="hidden md:block bg-white text-primary border border-primary px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              View Full Gallery
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuACS99Atb2qoIabW1HxIkyGV1JZtGIj54cYqJpyBR8tkzZOwU8_RodKV7qjcHtN_wqphQPeMTzDdxzBPvt9pE0Qw_-8yA8hDLV3on_SSm5ZdcoiByGI03lV1oDrm814SOxdHhu4D_pjQtkoOGmTQBFtEgDbci18bZkeMwUtlgTzFOhu4gQA4iPtcQ3x2fD5CB4PdsEvQY4eVqsZwCuM8dPBuLiY16-0-HxdYQCIyKhbQ550_XAhuruwrlq2EsIk7vMJkO4UwaC9NTrH",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAUAxwEZnjUbo4NVbKdpKxfYBRhO4NWbXTYPvg-xyHuuxDKweov7jWdF_JKcQ4xgqjn98QUkVAe4FySI4ljLgVzl40w5X0j8BbTfGorwJr7bSZWnZtyQpFaf35On0PV8RTwjOqkv5dr0yLXr2D9i5IXzw6lYkL3Q3sHqE33gvjiLbHaB5GUYyuPwb9GpDjZ9N8FLfmz5Bj5Wg9pLU40-AlgWBFstseT2ZaCw9gkYmVjBEROGYkRHwgjGgpGwqPlbt-tePzwzO3qXWMv",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAScnGMwyLU_B83OS6QwsOA1rwwdH3x6fS9weXxx0fsgPUPkST7SrvkmH-7OPyFY7yWBkUR84Liuwzf-VPt6VdHgN49V4e3R3CaOkvnPoj0yVnWYmSDIQHjYmfiofOQ-08G9WifaXLEmWAH8AOOgTMzsLIiP5LPxdTawCOo0zPVFDqYJ0KzMlGsVx7txRJGZJOifw2e8lzeWFtXzjGyoM8ho_fwMH9xasv7xqnxuaQ_jwDXW1UroADtMSDGzfCtUiN2BFmmqSlR7AtQ",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD2faklBljgqKx1SnFUOaTzJ_KTl-oLg-kaioIYYCASd45ZFbBoLEoexKwQSU99jBS1fI7JXPGVMdOTCQSMXUI45w4ZdSWpZqmGu17NZzatcwkHXykgTBOYBSzptqlnKbtdtWBh-faDTpYYGyrJusGd2uFpgevro2i8TZsyEFUT78Zg0F7cVoD0D_PIlSVrzSt8KqLdcYEFmlNFx4xoJqtx8qrmb3cfmVm6opelyw7s-Hsl4Gj91qQsI3PfymiayHY_lS7CBJSX-Ic_"
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
