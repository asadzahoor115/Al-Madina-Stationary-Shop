import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, CheckCircle, ShieldAlert, Award, FileText, 
  HelpCircle, ChevronDown, Check, Printer, Smartphone, 
  Layers, Zap
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ShopTour from './components/ShopTour';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

interface FaqItem {
  question: string;
  answer: string;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll Progress indicator logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  const FAQS: FaqItem[] = [
    {
      question: 'What types of documents can Al-Madina hard-bind and laminate?',
      answer: 'We provide heavy-duty spiral binding, secure adhesive tape binding, and premium thesis-level hard binding. Our high-transparency thermal lamination protects certificates, identity cards, assignments, and layouts from weathering or folding.'
    },
    {
      question: 'Are the Casio scientific calculators genuine products?',
      answer: 'Absolutely. As shown in our physical showcases, we stock genuine Casio FX-991ES Plus and FX-82ES Plus scientific models, alongside dual-power solar desktop calculators. Every device is checked for authenticity with standard functions pre-tested before purchase.'
    },
    {
      question: 'How fast can I get a mobile SIM card activated?',
      answer: 'SIM card activations are processed instantly! We have authorized biometric machines on-site for Jazz, Zong, Telenor, and Ufone networks. Please bring your original valid CNIC card for verification, and your SIM will be activated in just under 5 minutes.'
    },
    {
      question: 'Can I do bulk color prints or textbook photocopies?',
      answer: 'Yes! Our high-speed digital photocopy machines are fully optimized for high-volume orders. We offer special discounted rates for schools, academies, students, and businesses looking for textbook copying, questionnaire sets, or corporate forms.'
    },
    {
      question: 'What payment and cash-out points are active?',
      answer: 'We provide fully secure Easyload and Cash In/Cash Out utilities for major mobile wallet systems including Easypaisa, JazzCash, and direct bank transfers. We print physical receipts for all transaction confirmations.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#001a0a] overflow-x-hidden selection:bg-brand-mint selection:text-black">
      
      {/* Ambient Background Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-emerald-900/25 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[200px] right-[-100px] w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none z-0"></div>

      {/* 1. Glowing Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-300 z-[100] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(16,185,129,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Glassmorphic Header / Sticky Navigation */}
      <Navbar onCategorySelect={handleCategorySelect} activeCategory={activeCategory} />

      {/* 3. 3D Interactive Hero Section */}
      <Hero />

      {/* 4. Horizontal Glowing Brand Marquee (Trust Indicators) */}
      <section className="py-8 bg-brand-dark border-y border-brand-mint/25 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#01140a] via-transparent to-[#01140a] z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 overflow-hidden relative flex items-center justify-center">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap text-xs font-mono tracking-widest text-brand-mint-light/80 uppercase font-semibold">
            <span className="flex items-center space-x-2">
              <Printer className="w-4 h-4 text-brand-mint" />
              <span>Heavy Duty Laser Prints</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-brand-mint" />
              <span>Genuine Casio Stockists</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-brand-mint" />
              <span>Instant CNIC Biometrics</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-brand-mint" />
              <span>Spiral & Hard Thesis Binding</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-brand-mint" />
              <span>Secure Cash Easyload Outlets</span>
            </span>
          </div>
        </div>
      </section>

      {/* 5. Complete Interactive Product & Services Catalog */}
      <Catalog initialCategory={activeCategory} onCategoryChange={handleCategorySelect} />

      {/* 6. Physical Shop Walkthrough / Bento Gallery */}
      <ShopTour />

      {/* 7. Beautiful Accordion FAQ Section */}
      <section className="py-24 bg-[#001508] relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* FAQ Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-900/50 border border-emerald-500/35 rounded-md text-emerald-400 text-[10px] font-mono font-bold tracking-widest uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Customer Help Center</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
              Frequently Asked <span className="text-emerald-400">Inquiries</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Have a quick question about paper sizes, calculator authentication, or mobile activations? Read our operations summary.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-white/10 transition-colors focus:outline-none"
                  >
                    <span className="font-display font-bold text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-emerald-400 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-white/10 bg-white/5 p-5 text-xs sm:text-sm text-white/70 leading-relaxed font-sans"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Location & Contact Footer */}
      <Footer />

      {/* 9. Floating Pulsing Dual-Action WhatsApp Widgets */}
      <FloatingWhatsApp />

    </div>
  );
}
