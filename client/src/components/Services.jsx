import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { Scissors, Sparkles, Heart, Hand, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      id: 1, 
      title: 'Artistic Hair Styling', 
      description: 'Transform your look with precision cuts and creative styling', 
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
      icon: Scissors,
      gradient: 'from-luxury-gold to-luxury-champagne',
      price: '₹1,500'
    },
    { 
      id: 2, 
      title: 'Organic Facials', 
      description: 'Rejuvenate your skin with natural, luxurious treatments', 
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      icon: Sparkles,
      gradient: 'from-luxury-rose to-luxury-blush',
      price: '₹2,000'
    },
    { 
      id: 3, 
      title: 'Bridal Glow', 
      description: 'Look radiant on your special day with our signature bridal package', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      icon: Heart,
      gradient: 'from-luxury-blush to-luxury-pearl',
      price: '₹15,000'
    },
    { 
      id: 4, 
      title: 'Nail Art', 
      description: 'Express yourself with stunning nail designs and manicures', 
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
      icon: Hand,
      gradient: 'from-luxury-rose to-luxury-champagne',
      price: '₹800'
    },
    { 
      id: 5, 
      title: 'Makeup Artistry', 
      description: 'Professional makeup for any occasion or event', 
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
      icon: Palette,
      gradient: 'from-luxury-gold to-luxury-rose',
      price: '₹3,500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-luxury-pearl via-white to-luxury-champagne relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-rose/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-luxury-gold mx-auto" />
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display mb-6 gradient-text">
            Our Services
          </h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-luxury-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Experience luxury and excellence in every service
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 sm:mb-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="luxury-card overflow-hidden h-full border-0 relative">
                  {/* Price Badge */}
                  <motion.div
                    className="absolute top-4 right-4 z-20 glass px-4 py-2 rounded-full"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <span className="text-luxury-gold font-bold text-lg">{service.price}</span>
                  </motion.div>

                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <motion.img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
                    
                    {/* Icon Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 sm:p-8 bg-gradient-to-br from-white to-luxury-pearl">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-display group-hover:text-luxury-gold transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    
                    <CardDescription className="text-base text-luxury-charcoal/70 leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>

                    {/* Price Display */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-luxury-gold/20">
                      <span className="text-sm text-luxury-charcoal/60">Starting from</span>
                      <span className="text-2xl font-bold text-luxury-gold">{service.price}</span>
                    </div>

                    {/* Animated Border Bottom */}
                    <motion.div
                      className="mt-4 h-1 bg-gradient-to-r from-luxury-gold to-luxury-rose rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    ></motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
