import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
    'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80',
    'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80',
    'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80',
    'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80'
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-center mb-4 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Work
          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Discover the artistry behind every transformation
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mb-20 sm:mb-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group cursor-pointer aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
