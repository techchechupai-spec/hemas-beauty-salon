import React from 'react';
import { FaImages, FaCreditCard, FaCrown, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MobileBottomNav = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';
  
  return (
    <>
      {/* WhatsApp Sticky Box - Above Bottom Nav */}
      <div className="md:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm">
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-whatsapp text-white px-6 py-4 rounded-2xl shadow-2xl hover:bg-whatsapp/90 transition-all"
        >
          <motion.div
            animate={{ 
              rotate: [0, -15, 15, -15, 15, 0],
              scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
            }}
            transition={{ 
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 2.4
            }}
          >
            <FaWhatsapp className="text-3xl" />
          </motion.div>
          <div className="text-left">
            <div className="text-sm font-medium">Contact Us</div>
            <div className="text-xs opacity-90">+1 (234) 567-890</div>
          </div>
        </a>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="flex justify-around items-center py-2">
          {/* Images */}
          <a 
            href="#gallery" 
            className="flex flex-col items-center justify-center py-2 px-4 text-gray-600 hover:text-primary transition-colors"
          >
            <FaImages className="text-2xl mb-1" />
            <span className="text-xs font-medium">Images</span>
          </a>

          {/* Services */}
          <a 
            href="#services" 
            className="flex flex-col items-center justify-center py-2 px-4 text-gray-600 hover:text-primary transition-colors"
          >
            <FaCreditCard className="text-2xl mb-1" />
            <span className="text-xs font-medium">Services</span>
          </a>

          {/* Membership */}
          <a 
            href="#membership" 
            className="flex flex-col items-center justify-center py-2 px-4 text-gray-600 hover:text-primary transition-colors"
          >
            <FaCrown className="text-2xl mb-1" />
            <span className="text-xs font-medium">Membership</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;
