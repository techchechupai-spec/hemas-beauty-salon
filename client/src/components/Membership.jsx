import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { FaCrown, FaStar, FaGem } from 'react-icons/fa';

const Membership = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';

  const plans = [
    {
      id: 1,
      name: 'Silver',
      icon: <FaStar className="text-4xl text-gray-400" />,
      price: '$49',
      period: '/month',
      features: [
        '10% off all services',
        '1 free facial per month',
        'Priority booking',
        'Birthday special gift'
      ],
      color: 'from-gray-300 to-gray-400'
    },
    {
      id: 2,
      name: 'Gold',
      icon: <FaCrown className="text-4xl text-primary" />,
      price: '$99',
      period: '/month',
      features: [
        '20% off all services',
        '2 free services per month',
        'VIP priority booking',
        'Exclusive events access',
        'Free product samples'
      ],
      color: 'from-primary to-yellow-600',
      popular: true
    },
    {
      id: 3,
      name: 'Platinum',
      icon: <FaGem className="text-4xl text-purple-600" />,
      price: '$199',
      period: '/month',
      features: [
        '30% off all services',
        'Unlimited basic services',
        'Personal stylist',
        'Home service available',
        'Premium product gifts',
        'Bring a friend free'
      ],
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="membership" className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-center mb-4 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Membership Plans
          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground text-base sm:text-lg mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Join our exclusive membership and enjoy premium benefits
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 md:mb-0">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                  Most Popular
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'border-2 border-primary shadow-xl' : 'border-0 shadow-lg'} hover:shadow-2xl transition-all duration-300`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl mb-2">{plan.name}</CardTitle>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground mb-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm sm:text-base">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${plan.name} membership plan`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Choose Plan
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
