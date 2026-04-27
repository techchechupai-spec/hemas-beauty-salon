import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InstagramFollow = () => {
  const [count, setCount] = useState(0);
  const targetCount = 10000;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-14 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full mb-6 shadow-2xl">
            <FaInstagram className="text-4xl md:text-5xl text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-gray-900 mb-4">
            Follow Us on Instagram
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Join our community and stay updated with our latest work
          </p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-8"
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
              {count.toLocaleString()}+
            </div>
            <div className="text-gray-600 text-lg md:text-xl font-medium">
              Followers
            </div>
          </motion.div>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all"
          >
            <FaInstagram className="text-2xl" />
            Follow Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFollow;
