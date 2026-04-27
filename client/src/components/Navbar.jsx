import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '1234567890'; // Replace with your WhatsApp number

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-md' : 'bg-white/70 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl sm:text-3xl font-serif font-semibold text-foreground tracking-wider">
            Lumina Essence
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            <li><a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a></li>
            <li><a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a></li>
            <li><a href="#membership" className="text-foreground hover:text-primary transition-colors">Membership</a></li>
            <li>
              <Button asChild size="sm">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#services" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
              <li><a href="#gallery" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
              <li><a href="#membership" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Membership</a></li>
              <li>
                <Button asChild className="w-full">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    Book Now
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
