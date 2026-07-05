import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Users, X } from 'lucide-react';
import { SHOP_INFO } from '../types';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const directChatLink = `https://wa.me/923441464451?text=${encodeURIComponent(
    "Hello Al-Madina Services! I visited your website and would like to inquire about printing, SIM card, or cash services."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 pointer-events-none">
      
      {/* 1. Join WhatsApp Group Pulsing Widget */}
      <div className="relative flex items-center pointer-events-auto group">
        <AnimatePresence>
          {showTooltip === 'group' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="mr-3 px-3.5 py-2 rounded-xl bg-emerald-950 border border-emerald-500/35 text-white shadow-2xl text-[11px] font-mono whitespace-nowrap hidden sm:block"
            >
              💬 Join WhatsApp Group
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={SHOP_INFO.whatsappGroup}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setShowTooltip('group')}
          onMouseLeave={() => setShowTooltip(null)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black/60 border-2 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Pulsing Outer Glow Effect */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" style={{ animationDuration: '2.5s' }} />
          
          <Users className="w-6 h-6" />
          
          {/* Little green dot badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black/80 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#01140a] rounded-full animate-ping" />
          </span>
        </a>
      </div>

      {/* 2. Direct Chat with Number Pulsing Widget */}
      <div className="relative flex items-center pointer-events-auto group">
        <AnimatePresence>
          {showTooltip === 'direct' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="mr-3 px-3.5 py-2 rounded-xl bg-emerald-950 border border-emerald-500/35 text-white shadow-2xl text-[11px] font-mono whitespace-nowrap hidden sm:block"
            >
              ⚡ Message 0344-1464451
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={directChatLink}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setShowTooltip('direct')}
          onMouseLeave={() => setShowTooltip(null)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 border-2 border-emerald-400 text-white shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Pulsing Outer Glow Effect */}
          <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping pointer-events-none" style={{ animationDuration: '2s' }} />
          
          <MessageCircle className="w-6 h-6" />
          
          {/* Online status indicator */}
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-emerald-600" />
        </a>
      </div>

    </div>
  );
}
