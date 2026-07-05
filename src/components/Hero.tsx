import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, Printer, Smartphone, Zap, PenTool, MapPin } from 'lucide-react';
import { SHOP_INFO } from '../types';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for interactive 3D parallax hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth physics
  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  // Individual layers translateZ offsets for parallax depth
  const translateZ1 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);
  const translateZ2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), springConfig);
  const translateZ3 = useSpring(useTransform(mouseY, [-0.5, 0.5], [50, -50]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToCatalog = () => {
    const catalog = document.getElementById('catalog');
    if (catalog) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = catalog.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-dark/90 via-[#010e07] to-[#010804]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-emerald/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-mint/10 blur-3xl" />
      
      {/* Dynamic tech grid line decoration */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          perspective: '1000px',
          transform: 'rotateX(60deg) translateY(-200px) translateZ(-100px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Copy (Text / Call to Action) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-900/50 border border-emerald-500/35 rounded-md text-emerald-400 text-xs font-bold uppercase tracking-widest self-center lg:self-start shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-400">
                Premium Tech & Stationery Hub
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                Precision <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 drop-shadow-sm">
                  Photostat & Tech
                </span>
                <br />
                At Al-Madina <span className="text-emerald-500">Services.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {SHOP_INFO.tagline}
              </p>
            </motion.div>

            {/* Feature pill highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-2 p-3 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-emerald-500/30 transition-colors">
                <Printer className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold text-white/80">Digital Print</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-emerald-500/30 transition-colors">
                <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold text-white/80">Mobile SIMs</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-emerald-500/30 transition-colors">
                <PenTool className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold text-white/80">Office Gear</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-emerald-500/30 transition-colors">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold text-white/80">Cash Points</span>
              </div>
            </motion.div>

            {/* Primary Calls to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={scrollToCatalog}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-emerald-50 text-black rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.01]"
              >
                Browse Catalog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
              <a
                href={SHOP_INFO.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 text-center shadow-[0_0_20px_rgba(5,150,105,0.3)] border border-emerald-400/30 hover:scale-[1.01]"
              >
                Join WhatsApp Group
              </a>
            </motion.div>

            {/* Small Location Hook */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start text-[11px] sm:text-xs font-mono text-brand-mint-light/80 space-x-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Opposite City School, Toba Road, Jhang</span>
            </motion.p>

          </div>

          {/* Interactive 3D Hero Canvas Container */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center rounded-3xl cursor-grab active:cursor-grabbing select-none"
              style={{
                perspective: 1200,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Core 3D Rotation Frame */}
              <motion.div
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* 3D Object Background Circle */}
                <motion.div
                  style={{
                    translateZ: -50,
                  }}
                  className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-brand-mint/20 bg-brand-dark/30 backdrop-blur-md shadow-2xl flex items-center justify-center"
                >
                  <div className="absolute w-48 h-48 rounded-full border border-brand-mint/10 bg-brand-mint/5 animate-pulse" />
                  <div className="absolute w-full h-full rounded-full border-t border-brand-mint/30 border-r border-brand-mint/30 animate-spin" style={{ animationDuration: '30s' }} />
                </motion.div>

                {/* Layer 1: Futuristic 3D Tech Gear / SIM Card */}
                <motion.div
                  style={{
                    translateZ: translateZ1,
                  }}
                  className="absolute w-32 h-44 sm:w-40 sm:h-52 bg-gradient-to-tr from-brand-emerald/90 to-[#02210f] border-2 border-brand-mint/40 rounded-2xl p-4 shadow-2xl flex flex-col justify-between -rotate-12 transform origin-center -translate-x-12 translate-y-4"
                >
                  {/* Glassmorphic SIM Card Microchip visual */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-8 bg-amber-500/80 rounded-md border border-amber-400 shadow-inner flex flex-wrap p-1 gap-1">
                      <div className="w-2.5 h-2.5 border-b border-r border-amber-300" />
                      <div className="w-2.5 h-2.5 border-b border-l border-amber-300" />
                      <div className="w-2.5 h-2.5 border-t border-r border-amber-300" />
                      <div className="w-2.5 h-2.5 border-t border-l border-amber-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-brand-mint">4G SIM</span>
                  </div>
                  
                  {/* Micro circuit line patterns */}
                  <div className="flex-1 my-4 flex flex-col justify-center space-y-1.5 opacity-60">
                    <div className="h-[2px] bg-brand-mint/40 w-full rounded" />
                    <div className="h-[2px] bg-brand-mint/40 w-2/3 rounded" />
                    <div className="h-[2px] bg-brand-mint/40 w-4/5 rounded" />
                  </div>

                  <div className="flex items-center space-x-1 text-[8px] font-mono text-brand-mint-light">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>INSTANT SERVICE</span>
                  </div>
                </motion.div>

                {/* Layer 2: Premium 3D Fountain Pen element */}
                <motion.div
                  style={{
                    translateZ: translateZ2,
                  }}
                  className="absolute z-20 w-12 h-64 sm:w-16 sm:h-80 drop-shadow-[0_15px_30px_rgba(0,100,0,0.4)] rotate-45 transform origin-center translate-x-12 -translate-y-8"
                >
                  {/* Beautiful high-fidelity SVG Fountain Pen */}
                  <svg viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Golden Fountain Pen Nib */}
                    <path d="M50 40 L35 120 L50 150 L65 120 Z" fill="url(#goldGrad)" stroke="#ffdf00" strokeWidth="2" />
                    <line x1="50" y1="40" x2="50" y2="120" stroke="#000" strokeWidth="1.5" />
                    <circle cx="50" cy="110" r="3.5" fill="#000" />
                    
                    {/* Metallic pen collar */}
                    <rect x="35" y="148" width="30" height="20" rx="3" fill="#ffffff" />
                    <rect x="35" y="148" width="30" height="20" rx="3" fill="url(#silverGrad)" />

                    {/* Lacquered Emerald Body */}
                    <path d="M35 168 L32 370 C32 385, 68 385, 68 370 L65 168 Z" fill="url(#emeraldGrad)" />
                    
                    {/* Gold trim bands */}
                    <rect x="33" y="190" width="34" height="8" fill="url(#goldGrad)" />
                    <rect x="32" y="320" width="36" height="8" fill="url(#goldGrad)" />

                    {/* Silver pen clip reflection */}
                    <rect x="47" y="198" width="6" height="90" rx="3" fill="url(#goldGrad)" />

                    <defs>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffd700" />
                        <stop offset="50%" stopColor="#fff8dc" />
                        <stop offset="100%" stopColor="#daa520" />
                      </linearGradient>
                      <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#808080" />
                        <stop offset="50%" stopColor="#d3d3d3" />
                        <stop offset="100%" stopColor="#a9a9a9" />
                      </linearGradient>
                      <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#004d00" />
                        <stop offset="50%" stopColor="#009900" />
                        <stop offset="100%" stopColor="#003300" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Layer 3: Foreground Glassmorphic Paper/Sparkle card */}
                <motion.div
                  style={{
                    translateZ: translateZ3,
                  }}
                  className="absolute z-30 px-4 py-3 rounded-xl glass-morphic-light border border-white/20 shadow-2xl flex items-center space-x-3 translate-y-24 sm:translate-y-32 -translate-x-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-mint/20 border border-brand-mint flex items-center justify-center shrink-0">
                    <Printer className="w-4 h-4 text-brand-mint" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono text-brand-mint-light">LASER PRINTS</span>
                    <span className="text-[11px] font-semibold text-white">100% Crisp Resolution</span>
                  </div>
                </motion.div>

                {/* Extra ambient floating items */}
                <div className="absolute top-10 right-10 w-3 h-3 rounded-full bg-amber-400 blur-[1px] animate-bounce" />
                <div className="absolute bottom-12 left-12 w-4 h-4 rounded-full bg-brand-mint blur-[2px] animate-pulse" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
