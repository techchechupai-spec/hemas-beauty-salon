import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', title: 'Hair Styling' },
    { url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', title: 'Makeup Art' },
    { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', title: 'Bridal Beauty' },
    { url: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80', title: 'Spa Treatment' },
    { url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80', title: 'Nail Art' },
    { url: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80', title: 'Facial Care' },
    { url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80', title: 'Hair Color' },
    { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', title: 'Styling' }
  ];

  return (
    <section id="gallery" className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-luxury-champagne via-luxury-pearl to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-luxury-rose/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-luxury-gold/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-luxury-rose mx-auto" />
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display mb-6 gradient-text">
            Our Work
          </h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-luxury-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Discover the artistry behind every transformation
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-luxury-rose to-transparent"></div>
          </motion.div>
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-square"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                type: "spring"
              }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedImage(img)}
            >
              {/* Image */}
              <motion.img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-luxury-gold/90 via-luxury-rose/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.h3
                    className="text-white font-display text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {img.title}
                  </motion.h3>
                </div>
              </motion.div>

              {/* Sparkle Effect on Hover */}
              <motion.div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-6 h-6 text-white drop-shadow-lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8 text-white" />
            </motion.button>

            <motion.img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />

            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-display text-xl">{selectedImage.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
