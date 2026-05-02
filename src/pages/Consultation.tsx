import React from "react";
import { FiPhone, FiInstagram, FiMapPin } from "react-icons/fi";

export default function Consultation() {
  const sendEnquiry = () => {
    const name = (document.getElementById("cName") as HTMLInputElement).value;
    const phone = (document.getElementById("cPhone") as HTMLInputElement).value;
    const service = (document.getElementById("cService") as HTMLSelectElement).value;
    const msg = (document.getElementById("cMsg") as HTMLTextAreaElement).value;

    const text =
      `Hello! I would like to enquire:\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n` +
      `Message: ${msg}`;

    window.open(`https://wa.me/919952384485?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-[1300px] mx-auto">

      {/* === TOP SECTION === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start pt-10">

        {/* LEFT TEXT */}
        <div className="pt-4 lg:pt-0">
          <p className="text-secondary font-label text-xs uppercase tracking-[0.3em] mb-4">
            Get in Touch
          </p>

          <h1 className="text-6xl md:text-8xl font-headline leading-[0.95] text-primary">
            Let's Create <br />
            <em className="text-secondary italic">Something Beautiful</em>
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="/navi-aari-project/aari-6.png"
            className="w-full max-w-[420px] lg:max-w-[460px] rounded-3xl shadow-lg 
                       opacity-0 translate-y-6 transition-all duration-1000 ease-out animate-fadeInUp"
          />
        </div>
      </div>

      {/* === BOTTOM SECTION === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10">
          <h3 className="text-2xl font-headline text-primary mb-3">
            We'd Love to Hear From You
          </h3>

          <p className="text-on-surface-variant leading-relaxed">
            Whether you have a design in mind, want a quote, or simply want to learn more
            about our Aari classes — reach out and we'll be happy to help.
          </p>

          <div className="space-y-6">
<div className="flex gap-4 items-center">
  <FiPhone className="text-primary text-2xl" />
  <div>
    <p className="font-bold text-primary">WhatsApp</p>
    <a href="tel:+919952384485" className="text-on-surface-variant">
      9952384485
    </a>
  </div>
</div>

         <div className="flex gap-4 items-center">
  <FiInstagram className="text-primary text-2xl" />
  <div>
    <p className="font-bold text-primary">Instagram</p>
    <a
      href="https://www.instagram.com/navi_aari_18"
      target="_blank"
      rel="noreferrer"
      className="text-on-surface-variant"
    >
      @navi_aari_18
    </a>
  </div>
</div>

           <div className="flex gap-4 items-center">
  <FiMapPin className="text-primary text-2xl" />
  <div>
    <p className="font-bold text-primary">Location</p>
    <p className="text-on-surface-variant">
      Chennai, Tamil Nadu
    </p>
  </div>
</div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="space-y-6">
          <h3 className="text-2xl font-headline text-primary">Send an Enquiry</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-bold tracking-wide text-primary text-sm mb-2">
                Your Name
              </label>
              <input
                id="cName"
                className="w-full border border-outline-variant p-4 rounded-xl"
                placeholder="e.g. Priya Sharma"
              />
            </div>

            <div>
              <label className="block font-bold tracking-wide text-primary text-sm mb-2">
                Phone Number
              </label>
              <input
                id="cPhone"
                className="w-full border border-outline-variant p-4 rounded-xl"
                placeholder="e.g. 9876543210"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold tracking-wide text-primary text-sm mb-2">
              Service Interested In
            </label>
            <select
              id="cService"
              className="w-full border border-outline-variant p-4 rounded-xl"
            >
              <option value="">Select a service…</option>
              <option>Aari Embroidery – Saree</option>
              <option>Aari Embroidery – Blouse</option>
              <option>Aari Embroidery – Lehenga</option>
              <option>Saree Pre-Plating</option>
              <option>Bridal Custom Work</option>
              <option>Aari Classes Enrollment</option>
              <option>Other / Not Sure</option>
            </select>
          </div>

          <div>
            <label className="block font-bold tracking-wide text-primary text-sm mb-2">
              Your Message
            </label>
            <textarea
              id="cMsg"
              className="w-full border border-outline-variant p-4 rounded-xl min-h-[120px]"
              placeholder="Tell us about your design ideas, fabric type, occasion, deadline…"
            />
          </div>

          <button
            onClick={sendEnquiry}
            className="w-full py-4 rounded-full bg-primary text-white text-xs font-bold tracking-[0.3em] hover:bg-primary-container transition"
          >
            Send via WhatsApp ✦
          </button>

          <p className="text-center text-xs text-on-surface-variant">
            Clicking the button will open WhatsApp with your message pre-filled.
          </p>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}