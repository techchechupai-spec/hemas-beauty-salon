import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
    'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80',
    'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80',
    'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80'
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-serif text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Work
          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-square"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
