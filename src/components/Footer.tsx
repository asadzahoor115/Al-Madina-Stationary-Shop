import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Phone, Users, Clock, Send, MessageSquare, 
  Printer, ShieldCheck, HelpCircle, Heart 
} from 'lucide-react';
import { SHOP_INFO } from '../types';

export default function Footer() {
  const [clientName, setClientName] = useState('');
  const [selectedService, setSelectedService] = useState('Photocopy / Printing');
  const [customMessage, setCustomMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !customMessage.trim()) return;

    const formattedText = `Hi Al-Madina Services, my name is ${clientName}. I would like to inquire about "${selectedService}". Message: "${customMessage}"`;
    const finalWhatsAppUrl = `https://wa.me/923441464451?text=${encodeURIComponent(formattedText)}`;
    
    // Open WhatsApp in new tab
    window.open(finalWhatsAppUrl, '_blank');
  };

  return (
    <footer 
      id="location" 
      className="relative pt-20 pb-8 bg-gradient-to-b from-[#010a05] to-[#001a0a] border-t border-white/10 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 rounded-full bg-emerald-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Quick Contacts & Interactive Form */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/15 px-2.5 py-1 rounded-md">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Have a Quick Inquiry? <br />
                <span className="text-emerald-400">We are Always Ready.</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/60">
                Contact our operators directly via mobile calls or send an instant inquiry using the quick form below.
              </p>
            </div>

            {/* Owner/Operator Contacts Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Amir Hamza Card */}
              <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 shadow-md">
                <p className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">Shop Manager</p>
                <h4 className="text-base font-bold text-white mt-1">{SHOP_INFO.owner2.name}</h4>
                <a 
                  href={`tel:923441464451`}
                  className="flex items-center space-x-2 text-xs text-emerald-300 hover:text-white mt-3 font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{SHOP_INFO.owner2.phone}</span>
                </a>
              </div>

              {/* Ahmed Sarfraz Card */}
              <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 shadow-md">
                <p className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">Co-Operator</p>
                <h4 className="text-base font-bold text-white mt-1">{SHOP_INFO.owner1.name}</h4>
                <a 
                  href={`tel:923145947779`}
                  className="flex items-center space-x-2 text-xs text-emerald-300 hover:text-white mt-3 font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{SHOP_INFO.owner1.phone}</span>
                </a>
              </div>

            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant WhatsApp Inquiry Builder</span>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono text-white/55 uppercase mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-white/55 uppercase mb-1">Selected Service</label>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full text-xs bg-black/60 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="Photocopy / Printing">🖨️ Photocopy & Laser Printing</option>
                    <option value="Binding / Lamination">📁 Spiral Binding & Lamination</option>
                    <option value="Mobile SIM Cards">📲 SIM Activation & Data Bundles</option>
                    <option value="Tech Accessories">🎧 Premium Earphones / Fast Cables</option>
                    <option value="Office / School Stationery">✒️ Desk & Student Stationery</option>
                    <option value="Cash Services / Easyload">💰 Cash Point / Easyload</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-white/55 uppercase mb-1">Custom Message / Request</label>
                <textarea 
                  rows={2}
                  required
                  placeholder="E.g., What are the hard binding rates for a 200-page thesis?"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(5,150,105,0.3)] border border-emerald-400/30 hover:scale-[1.01]"
              >
                <span>Send WhatsApp Inquiry</span>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </form>

          </div>

          {/* Location details & Map embed */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/15 px-2.5 py-1 rounded-md">
                Our Physical Store
              </span>
              
              <div className="flex items-start space-x-3 text-left">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">Al-Madina Photostat & Stationery</h4>
                  <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                    {SHOP_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-gray-200">Shop Timings</h4>
                  <p className="text-xs text-white/60">
                    Open Daily: <span className="text-emerald-400">8:00 AM — 10:00 PM</span> (Friday lunch break included)
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps with specified style/source */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.0879304598466!2d72.32563230930417!3d31.241718660752568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3923990015b05323%3A0xc15f4e9348f67ef8!2sB.K%20Mobiles!5e1!3m2!1sen!2s!4v1782998658093!5m2!1sen!2s" 
                width="100%" 
                height="320" 
                style={{ border: 0, borderRadius: '15px' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Al-Madina Location Map Jhang"
              />
            </div>
          </div>

        </div>

        {/* Quality Assurances / Trust Indicators Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-white/10 border-b border-white/10 mb-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
            <Printer className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Heavy-Duty Copiers</h5>
              <p className="text-[11px] text-white/55">Crisp high-speed laser copying and printing in B&W and high-saturation color.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Genuine Brand Stock</h5>
              <p className="text-[11px] text-white/55">Stockists of Casio original scientific calculators, Uhu, and KHM Rock gear.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
            <Users className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Fast Biometrics</h5>
              <p className="text-[11px] text-white/55">Biometrically authenticated mobile SIM cards for instant, legal activation.</p>
            </div>
          </div>
        </div>

        {/* Footer Base */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/45 font-mono space-y-4 md:space-y-0 pt-4">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <p>© 2026 Al-Madina Services. All rights reserved.</p>
            <p className="text-[10px] text-white/30">Opp. City School, Toba Rd, near Officer Colony, Jhang, Pakistan.</p>
          </div>
          
          <div className="flex items-center space-x-1 text-[11px] text-emerald-400/70">
            <span>Powered by Premium Tech & Hardware</span>
            <Heart className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500 shrink-0" />
          </div>
        </div>

      </div>
    </footer>
  );
}
