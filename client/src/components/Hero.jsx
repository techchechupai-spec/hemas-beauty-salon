import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
      title: 'Redefine Your Radiance',
      subtitle: 'Where luxury meets artistry',
      gradient: 'from-luxury-gold/90 via-luxury-rose/80 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
      title: 'Expert Hair Styling',
      subtitle: 'Transform your look with precision',
      gradient: 'from-luxury-rose/90 via-luxury-champagne/80 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80',
      title: 'Organic Facials',
      subtitle: 'Rejuvenate your natural beauty',
      gradient: 'from-luxury-blush/90 via-luxury-pearl/80 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&q=80',
      title: 'Bridal Packages',
      subtitle: 'Look stunning on your special day',
      gradient: 'from-luxury-champagne/90 via-luxury-gold/80 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=1200&q=80',
      title: 'Spa & Wellness',
      subtitle: 'Relax and unwind in luxury',
      gradient: 'from-luxury-pearl/90 via-luxury-blush/80 to-transparent'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen md:h-screen h-[30vh] w-full overflow-hidden md:rounded-none rounded-[10%] md:mt-0 mt-16 mx-4 md:mx-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 4, ease: "linear" }}
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient}`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>

          {/* Floating Sparkles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: Math.random() * window.innerHeight,
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2, 
                  repeat: Infinity,
                  delay: i * 0.5 
                }}
              >
                <Sparkles className="text-luxury-gold w-6 h-6" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 md:pt-16">
            <div className="max-w-5xl">
              {/* Animated Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-3 md:mb-6"
              >
                <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-light text-white mb-1 md:mb-4 leading-tight">
                  <motion.span
                    className="inline-block"
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(212, 175, 55, 0.5)",
                        "0 0 40px rgba(212, 175, 55, 0.8)",
                        "0 0 20px rgba(212, 175, 55, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {slides[currentSlide].title}
                  </motion.span>
                </h1>
              </motion.div>

              {/* Animated Subtitle */}
              <motion.p 
                className="text-xs sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-2 md:mb-10 font-light tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Animated Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="btn-luxury text-xs md:text-lg px-4 md:px-10 py-2 md:py-6 shadow-2xl"
                  >
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                      <Sparkles className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2" />
                      Book Appointment
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                className="mt-6 md:mt-12 flex justify-center hidden md:block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows with Glow */}
      <motion.button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 sm:left-8 top-1/2 -translate-y-1/2 glass p-2 md:p-3 sm:p-4 rounded-full transition-all z-10 group hover:glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6 text-luxury-gold group-hover:text-luxury-rose transition-colors" />
      </motion.button>
      
      <motion.button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 sm:right-8 top-1/2 -translate-y-1/2 glass p-2 md:p-3 sm:p-4 rounded-full transition-all z-10 group hover:glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6 text-luxury-gold group-hover:text-luxury-rose transition-colors" />
      </motion.button>

      {/* Animated Dots */}
      <div className="absolute bottom-32 md:bottom-24 sm:bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-luxury-gold w-8 md:w-12 h-2 md:h-3' 
                : 'bg-white/50 w-2 md:w-3 h-2 md:h-3 hover:bg-white/80'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={currentSlide === index ? { 
              boxShadow: ["0 0 10px rgba(212, 175, 55, 0.5)", "0 0 20px rgba(212, 175, 55, 0.8)", "0 0 10px rgba(212, 175, 55, 0.5)"]
            } : {}}
            transition={{ duration: 1, repeat: currentSlide === index ? Infinity : 0 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
