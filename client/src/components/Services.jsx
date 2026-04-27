import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

const Services = () => {
  const services = [
    { 
      id: 1, 
      title: 'Artistic Hair Styling', 
      description: 'Transform your look with precision cuts and creative styling', 
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80' 
    },
    { 
      id: 2, 
      title: 'Organic Facials', 
      description: 'Rejuvenate your skin with natural, luxurious treatments', 
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' 
    },
    { 
      id: 3, 
      title: 'Bridal Glow', 
      description: 'Look radiant on your special day with our signature bridal package', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' 
    },
    { 
      id: 4, 
      title: 'Spa & Massage', 
      description: 'Relax and unwind with our therapeutic spa treatments', 
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' 
    },
    { 
      id: 5, 
      title: 'Nail Art', 
      description: 'Express yourself with stunning nail designs and manicures', 
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' 
    },
    { 
      id: 6, 
      title: 'Makeup Artistry', 
      description: 'Professional makeup for any occasion or event', 
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' 
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-center mb-4 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience luxury and excellence in every service
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 h-full">
                <div className="overflow-hidden h-56 sm:h-64 md:h-72">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <CardTitle className="mb-2 sm:mb-3 text-xl sm:text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
