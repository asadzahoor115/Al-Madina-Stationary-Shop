import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Printer, Smartphone, BookOpen, Backpack, 
  CheckCircle2, Sparkles, MessageCircle, HelpCircle, 
  ChevronRight, ArrowUpRight, Camera
} from 'lucide-react';
import { CATALOG_ITEMS, CatalogItem, SHOP_INFO } from '../types';

interface CatalogProps {
  initialCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function Catalog({ initialCategory = 'all', onCategoryChange }: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>(initialCategory);

  // Sync state if controlled from outside
  React.useEffect(() => {
    setActiveTab(initialCategory);
  }, [initialCategory]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onCategoryChange) {
      onCategoryChange(tabId);
    }
  };

  // Main filtered catalog computing
  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTab = activeTab === 'all' || item.category === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [searchTerm, activeTab]);

  // Map category code to human label & icons
  const categories = [
    { id: 'all', label: '✨ All Catalog', count: CATALOG_ITEMS.length, icon: Sparkles },
    { id: 'printing-cash', label: '🖨️ Prints & Cash', count: CATALOG_ITEMS.filter(i => i.category === 'printing-cash').length, icon: Printer },
    { id: 'sims-tech', label: '📲 Mobile & Accessories', count: CATALOG_ITEMS.filter(i => i.category === 'sims-tech').length, icon: Smartphone },
    { id: 'stationery-office', label: '✒️ Desk Stationery', count: CATALOG_ITEMS.filter(i => i.category === 'stationery-office').length, icon: BookOpen },
    { id: 'school-art', label: '🎒 School & Art', count: CATALOG_ITEMS.filter(i => i.category === 'school-art').length, icon: Backpack }
  ];

  // Quick search keywords
  const popularKeywords = ['Casio', 'KHM Rock', 'SIM', 'Calculator', 'UHU', 'Register', 'Backpack', 'Fast Chargers', 'Fountain Pen'];

  const getWhatsAppInquiryLink = (itemName: string) => {
    const text = `Hi Al-Madina Services, I saw your premium website and wanted to inquire about: "${itemName}". Please provide availability and details!`;
    return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="catalog" 
      className="py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#010a05] via-[#01140a] to-[#010804] border-t border-brand-mint/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-emerald/30 border border-brand-mint/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-mint" />
            <span className="text-[10px] font-mono tracking-wider uppercase text-brand-mint">Interactive Inventory Showcase</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Explore Our Complete <span className="text-brand-mint">Interactive Catalog</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-sans">
            Filter by department, search popular local and international brands, and immediately inquire about product availability or customized printing rates.
          </p>
        </div>

        {/* Unified Search Bar & Quick Tags */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative rounded-2xl bg-brand-glass border border-brand-mint/25 p-1 flex items-center shadow-xl group hover:border-brand-mint transition-all duration-300">
            <div className="pl-4 pr-2 text-brand-mint/80">
              <Search className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </div>
            <input 
              type="text"
              placeholder="Search by brands (e.g. Casio, KHM Rock, Uhu, Mcdodo) or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none text-white py-3.5 px-2 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-0"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 text-xs font-semibold text-brand-mint hover:text-white transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          
          {/* Quick Filter Keyword Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-wider">Popular Searches:</span>
            {popularKeywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => setSearchTerm(keyword)}
                className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-200 ${
                  searchTerm === keyword
                    ? 'bg-brand-mint border-brand-mint text-black'
                    : 'bg-brand-dark/30 border-brand-mint/15 text-gray-400 hover:text-brand-mint-light hover:border-brand-mint/30'
                }`}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Category Selector tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-nowrap md:flex-wrap items-center overflow-x-auto pb-4 md:pb-0 scrollbar-none gap-2 px-4 max-w-full justify-start md:justify-center">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`flex items-center space-x-2 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 shrink-0 ${
                    isActive 
                      ? 'bg-gradient-to-r from-brand-emerald to-brand-mint text-white shadow-lg shadow-brand-mint/20 scale-[1.03]'
                      : 'glass-morphic text-gray-300 hover:text-white hover:bg-brand-mint/15 hover:border-brand-mint/35'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-mint'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-brand-dark/40 text-brand-mint-light' : 'bg-brand-emerald/30 text-brand-mint-light'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Catalog Grid */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
                    key={item.id}
                    className="group relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Glowing highlight border accent */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div>
                      {/* Department / Subcategory header line */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/15 px-2.5 py-1 rounded-md">
                          {item.subcategory}
                        </span>
                        
                        {/* Physical Shop Photo Verification Badge */}
                        {item.photoRef && (
                          <div 
                            title={item.photoRef}
                            className="flex items-center space-x-1.5 text-[9px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-md"
                          >
                            <Camera className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Photo Verified</span>
                          </div>
                        )}
                      </div>

                      {/* Item Name */}
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                        {item.name}
                      </h3>

                      {/* Brief description */}
                      <p className="text-xs sm:text-sm text-white/60 mt-2.5 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Structured Features list */}
                      {item.features && (
                        <div className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
                          {item.features.map((feat, i) => (
                            <div key={i} className="flex items-start space-x-2 text-xs text-white/85">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer tags and primary inquiry CTA */}
                    <div className="mt-6 space-y-4 border-t border-white/10 pt-4">
                      {/* Brand & Attribute tags */}
                      {item.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="text-[9px] sm:text-[10px] font-semibold bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded-md"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Quick Chat inquiry button */}
                      <a
                        href={getWhatsAppInquiryLink(item.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white font-semibold text-xs tracking-wider uppercase border border-emerald-500/30 hover:border-emerald-400/40 transition-all duration-300 shadow-inner group/btn"
                      >
                        <span className="flex items-center space-x-1.5">
                          <MessageCircle className="w-4 h-4" />
                          <span>Inquire Stock</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center space-y-3"
              >
                <HelpCircle className="w-12 h-12 text-brand-mint animate-pulse" />
                <h4 className="text-lg font-bold text-white">No Catalog Items Found</h4>
                <p className="text-xs text-gray-400 max-w-sm">
                  We couldn't find matches for "{searchTerm}". Try clearing your search or checking for spelling errors!
                </p>
                <button
                  onClick={() => { setSearchTerm(''); handleTabChange('all'); }}
                  className="px-4 py-2 rounded-xl bg-brand-mint/20 border border-brand-mint/40 text-brand-mint text-xs uppercase tracking-wide font-semibold hover:bg-brand-mint hover:text-black transition-colors"
                >
                  Reset Catalog Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
