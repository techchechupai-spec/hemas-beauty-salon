import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-serif font-light text-foreground leading-tight mb-6">
              Redefine Your Radiance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 tracking-wide">
              Where luxury meets artistry in every detail
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Book Appointment</a>
              </Button>
              
              <Button size="lg" variant="whatsapp" asChild>
                <a href="https://wa.me/1234567890" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat with our Stylists
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80" 
                alt="Luxury Beauty" 
                className="w-full h-[600px] object-cover brightness-105 contrast-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
