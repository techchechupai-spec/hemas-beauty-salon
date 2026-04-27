import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-luxury-gold" />
              <h3 className="text-2xl font-display font-light">Hema Beauty Parlour</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Where luxury meets artistry. Experience the finest beauty treatments in an elegant atmosphere.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-luxury-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-luxury-gold mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Beauty Street, Luxury Plaza, City</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-luxury-gold flex-shrink-0" />
                <a href={`tel:${whatsappNumber}`} className="text-gray-400 hover:text-luxury-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-luxury-gold flex-shrink-0" />
                <a href="mailto:info@hemasbeauty.com" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  info@hemasbeauty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Hema Beauty Parlour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
