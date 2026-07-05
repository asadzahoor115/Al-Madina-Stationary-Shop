import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, Eye, Printer, Smartphone, PenTool, 
  BookOpen, Backpack, ShieldCheck, ShoppingBag, 
  MapPin, Clock, Star, Zap 
} from 'lucide-react';

interface TourItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  evidence: string;
  tags: string[];
  gradient: string;
}

export default function ShopTour() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const TOUR_ITEMS: TourItem[] = [
    {
      id: 'printing-bay',
      title: 'Heavy-Duty Digital Copy Station',
      subtitle: 'Photo 2 operations view',
      icon: Printer,
      description: 'Our core high-speed printing bay features dual enterprise-level digital laser copy suites, a specialized computer terminal for precise file formatting, and instant passport-photo editing.',
      evidence: 'Equipped with industrial laser photocopy machines & dual feed trays for simultaneous bulk processing.',
      tags: ['Laser Copy', 'Scan-to-Cloud', 'PDF Print', 'B&W & Color'],
      gradient: 'from-emerald-950/80 to-[#02210f]'
    },
    {
      id: 'audio-accessories',
      title: 'Premium Audio & Wireless Shelf',
      subtitle: 'Photo 3 & 9 showcase',
      icon: Smartphone,
      description: 'A dedicated glass cabinet displaying premium audio solutions. From deep-bass handsfree (KHM Rock, Links 313) to wireless solar Bluetooth speakers and TWS AirPods.',
      evidence: 'Includes fully packaged KHM Rock Extra Bass Series, Links 313 Hi-Res, and wireless solar travel speakers.',
      tags: ['KHM Rock', 'Links 313', 'Surge Protection', 'Solar Speakers'],
      gradient: 'from-emerald-950/80 to-[#023116]'
    },
    {
      id: 'power-cables',
      title: 'Next-Gen Chargers & Fast Cables',
      subtitle: 'Photo 4 cabinet drawer',
      icon: Zap,
      description: 'Organized drawer grids displaying highly durable, braided Mcdodo Fast cables, 20W PD safe adapters, and Type-C/Micro/Lightning plugs to keep your device charged securely.',
      evidence: 'High-amperage data cables sorted in custom safety drawers for instant hand-out.',
      tags: ['20W PD Chargers', 'Mcdodo Premium', 'Braided Nylon', 'Multi-Plugs'],
      gradient: 'from-[#033018] to-emerald-950/80'
    },
    {
      id: 'pen-display',
      title: 'Interactive Pen Counters & Hangers',
      subtitle: 'Photo 1 & 13 counter jars',
      icon: PenTool,
      description: 'Our main counter features organized, transparent pen jars showcasing Velocity, Neptune, TurboGrip gel pens, Dollar Clipper fountain pens, and professional Piano whiteboard markers.',
      evidence: 'Dozens of vibrant writing pens grouped by ink type on the glass counter and key hangers.',
      tags: ['Velocity Ballpoints', 'Dollar Clipper', 'TurboGrip Gel', 'Piano Markers'],
      gradient: 'from-[#022a14] to-emerald-950/80'
    },
    {
      id: 'school-art',
      title: 'Art Hangers & Geometry Board',
      subtitle: 'Photo 5 display wall',
      icon: BookOpen,
      description: 'A blue-mounted art and geometry display filled with Goldfish Poster Colours, watercolors, premium paint brushes, student drawing pads, and professional compass divider kits.',
      evidence: 'Vibrant card-backed school kits and art palettes hanging on our primary showcase wall.',
      tags: ['Goldfish Colours', 'Synthetic Brushes', 'Geometry Kits', 'Art Supplies'],
      gradient: 'from-emerald-950/80 to-[#02200d]'
    },
    {
      id: 'backpacks-bags',
      title: 'Carriage, Backpacks & Printed Bags',
      subtitle: 'Photo 6 hanging display',
      icon: Backpack,
      description: 'Hanging display featuring cute cartoon Husky child backpacks, secondary Star Sports school bags, alongside premium laminated paper shopping and gift bags with marble patterns.',
      evidence: 'Heavy-duty student backpacks and elegant printed shopping bags hanging on top mounts.',
      tags: ['Husky Backpacks', 'Star Sports Bags', 'Printed Gift Bags', 'Eco-Paper Bags'],
      gradient: 'from-[#011a0b] to-[#04331a]/90'
    },
    {
      id: 'registers-clipboards',
      title: 'Official Registers & Exam Clipboards',
      subtitle: 'Photo 7 & 10 storage racks',
      icon: Star,
      description: 'Racks containing official attendance registers, Haroon accounts ledgers, daily diaries, Deadpool / Superhero student clipboards, and high-quality thermal rolls for POS billing.',
      evidence: 'Heavy registers and cartoon examination clipboards displayed in wooden storage frames.',
      tags: ['Haroon Ledgers', 'Deadpool Clipboards', 'Receipt Rolls', 'Binding Tapes'],
      gradient: 'from-emerald-950/80 to-[#022c16]'
    }
  ];

  return (
    <section 
      id="shop-tour" 
      className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-dark/95 via-[#010b05] to-[#010804] relative overflow-hidden border-t border-brand-mint/15"
    >
      <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-brand-mint/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-900/50 border border-emerald-500/35 rounded-md text-emerald-400 text-[10px] font-mono font-bold tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>Virtual Showrooms</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Virtual Shop <span className="text-emerald-400">Display Gallery</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Take a descriptive walkthrough of our physical shop counters. Our digital catalog is backed by real, premium inventory in Jhang, verified directly by storefront photographs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {TOUR_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            const isFirst = idx === 0;
            const isLast = idx === TOUR_ITEMS.length - 1;
            
            // Assign bento grid sizing based on index
            let gridColSpan = 'lg:col-span-4';
            if (isFirst) gridColSpan = 'lg:col-span-8'; // Make print bay wider
            if (isLast) gridColSpan = 'lg:col-span-6'; // Balance bottom
            if (idx === 5) gridColSpan = 'lg:col-span-6'; // Balance bottom
            
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                className={`group relative rounded-3xl p-6 bg-gradient-to-tr ${item.gradient} border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[220px] ${gridColSpan}`}
              >
                {/* Background ambient radial glow on card hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shadow-inner group-hover:border-emerald-400/40 transition-colors">
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <span className="text-[9px] font-mono font-medium text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-4 tracking-tight group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-white/60 mt-2.5 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Tags or physical evidence stamp */}
                <div className="mt-6 space-y-3.5 border-t border-white/10 pt-4">
                  <p className="text-[10px] font-mono text-emerald-400/80 italic leading-relaxed flex items-center space-x-1.5">
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Evidence: {item.evidence}</span>
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-[9px] font-mono bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Small Trust Seal Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-white/45 flex items-center justify-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Authenticated physically via official business signs and showcase racks. Jhang, Punjab.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
