import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Printer, Menu, X, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../types';

interface NavbarProps {
  onCategorySelect?: (category: string) => void;
  activeCategory?: string;
}

export default function Navbar({ onCategorySelect, activeCategory }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, categoryId?: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 85; // navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (categoryId && onCategorySelect) {
      onCategorySelect(categoryId);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-morphic py-3 shadow-lg border-b border-brand-mint/20'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold text-xl shadow-[0_0_15px_rgba(16,185,129,0.45)] group-hover:scale-105 transition-transform duration-300 border border-emerald-400/20">
                <Printer className="w-5 h-5 text-white" />
                <div className="absolute inset-0 rounded-lg bg-emerald-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-white">
                  AL-MADINA <span className="text-emerald-400">SERVICES</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono font-medium tracking-widest text-emerald-400/90 uppercase">
                  Photostat & Stationery
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => handleNavClick('hero')}
                className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-gray-300 hover:text-brand-mint transition-colors duration-200"
              >
                Home
              </button>
              
              {/* Dropdown / Interactive categories navigation */}
              <div className="relative group">
                <button
                  onClick={() => handleNavClick('catalog')}
                  className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-gray-300 hover:text-brand-mint transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Catalog</span>
                  <Sparkles className="w-3.5 h-3.5 text-brand-mint" />
                </button>
                <div className="absolute top-full left-0 w-64 mt-2 hidden group-hover:block glass-morphic rounded-xl overflow-hidden p-2 shadow-2xl animate-fade-in border border-brand-mint/30">
                  <button
                    onClick={() => handleNavClick('catalog', 'all')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-brand-mint/15 transition-colors text-gray-200 hover:text-white"
                  >
                    ✨ View Full Catalog
                  </button>
                  <button
                    onClick={() => handleNavClick('catalog', 'printing-cash')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-brand-mint/15 transition-colors text-gray-300 hover:text-white"
                  >
                    🖨️ Photocopy, Print & Cash
                  </button>
                  <button
                    onClick={() => handleNavClick('catalog', 'sims-tech')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-brand-mint/15 transition-colors text-gray-300 hover:text-white"
                  >
                    📲 Mobile SIMs & Tech Gear
                  </button>
                  <button
                    onClick={() => handleNavClick('catalog', 'stationery-office')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-brand-mint/15 transition-colors text-gray-300 hover:text-white"
                  >
                    ✒️ Stationery & Office Essentials
                  </button>
                  <button
                    onClick={() => handleNavClick('catalog', 'school-art')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-brand-mint/15 transition-colors text-gray-300 hover:text-white"
                  >
                    🎒 School Supplies, Art & Sports
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('location')}
                className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-gray-300 hover:text-brand-mint transition-colors duration-200"
              >
                Location & Contact
              </button>
            </div>

            {/* Glowing WhatsApp Action Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={SHOP_INFO.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center space-x-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.45)] border border-emerald-400/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Join WhatsApp Group</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-brand-glass-light focus:outline-none transition-colors"
                id="mobile-menu-btn"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden glass-morphic mt-2 border-b border-brand-mint/20 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <button
                  onClick={() => handleNavClick('hero')}
                  className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-gray-200 hover:bg-brand-mint/15 hover:text-brand-mint"
                >
                  Home
                </button>
                <div className="pl-4 border-l-2 border-brand-mint/30 space-y-1">
                  <p className="px-2 py-1.5 text-[10px] font-mono tracking-widest uppercase text-brand-mint/70 font-bold">Catalog Categories</p>
                  <button
                    onClick={() => handleNavClick('catalog', 'all')}
                    className="block w-full text-left px-2 py-2 text-xs font-medium text-gray-300 hover:text-brand-mint"
                  >
                    ✨ All Products & Services
                  </button>
                  <button
                    onClick={() => handleNavClick('catalog', 'printing-cash')}
                    className="block w-full text-left px-2 py-2 text-xs font-medium text-gray-300 hover:text-brand-mint"
                  >
                    🖨️ Photocopy, Print & Cash Point
                  </button>
                  <button
                    onClick={() => handleNavClick('catalog', 'sims-tech')}
                    className="block w-full text-left px-2 py-2 text-xs font-medium text-gray-300 hover:text-brand-mint"
                  >
                    📲 Mobile SIMs & Next-Gen Tech Accessories
                  </button>
                  <button
                    onClick={() => handleNavClick('catalog', 'stationery-office')}
                    className="block w-full text-left px-2 py-2 text-xs font-medium text-gray-300 hover:text-brand-mint"
                  >
                    ✒️ Writing, Desk Stationery & Office
                  </button>
                  <button
                    onClick={() => handleNavClick('catalog', 'school-art')}
                    className="block w-full text-left px-2 py-2 text-xs font-medium text-gray-300 hover:text-brand-mint"
                  >
                    🎒 School Supplies, Art & Sports Goods
                  </button>
                </div>
                <button
                  onClick={() => handleNavClick('location')}
                  className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-gray-200 hover:bg-brand-mint/15 hover:text-brand-mint"
                >
                  Location & Contact
                </button>
                <div className="pt-4">
                  <a
                    href={SHOP_INFO.whatsappGroup}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-brand-mint text-black font-bold text-xs uppercase tracking-wider shadow-lg glow-btn"
                  >
                    <span>Join WhatsApp Group</span>
                    <ExternalLink className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
