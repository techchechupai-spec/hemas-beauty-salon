import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=90',
      title: 'Redefine Your Radiance',
      subtitle: 'Where luxury meets artistry'
    },
    {
      image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1920&q=90',
      title: 'Expert Hair Styling',
      subtitle: 'Transform your look with precision'
    },
    {
      image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=1920&q=90',
      title: 'Organic Facials',
      subtitle: 'Rejuvenate your natural beauty'
    },
    {
      image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1920&q=90',
      title: 'Bridal Packages',
      subtitle: 'Look stunning on your special day'
    },
    {
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=90',
      title: 'Spa & Wellness',
      subtitle: 'Relax and unwind in luxury'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>



          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-3 md:mb-6"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-2 md:mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h1>
              </motion.div>

              <motion.p 
                className="text-sm sm:text-xl md:text-2xl text-white/90 mb-4 md:mb-8 font-light tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  asChild 
                  className="btn-luxury text-sm md:text-lg px-6 md:px-10 py-3 md:py-6 shadow-2xl hover:scale-105 transition-transform"
                >
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Book Appointment
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-white/30 transition-all z-10"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-white/30 transition-all z-10"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-luxury-gold w-8 md:w-10 h-2' 
                : 'bg-white/50 w-2 h-2 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
