import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', date: '', time: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('Thank you! We\'ll contact you soon via WhatsApp or email.');
    setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
    
    // Optional: Open WhatsApp with pre-filled message
    const whatsappMessage = `Hi! I'd like to book ${formData.service} on ${formData.date} at ${formData.time}. Name: ${formData.name}`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto max-w-3xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-serif text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Book Your Appointment
          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.h2>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name"
                type="text" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="your@email.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone"
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <select 
                id="service"
                className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                required
              >
                <option value="">Choose a service</option>
                <option value="Artistic Hair Styling">Artistic Hair Styling</option>
                <option value="Organic Facials">Organic Facials</option>
                <option value="Bridal Glow">Bridal Glow</option>
              </select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input 
                id="date"
                type="date" 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Input 
                id="time"
                type="time" 
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea 
              id="message"
              placeholder="Tell us more about your requirements..." 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          <Button type="submit" size="lg" className="w-full">
            Book Now
          </Button>
          
          {status && (
            <motion.p 
              className="text-center text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
