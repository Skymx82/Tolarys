import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface ServiceFeature {
  name: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  price?: string;
  accent?: boolean;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features,
  price,
  accent = false,
  href
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-sm ${
        accent 
          ? 'bg-pink/10 shadow-pink/20' 
          : 'bg-white/10 shadow-white/20'
      } shadow-lg h-full flex flex-col`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink/10 pointer-events-none" />
      
      <div className="p-4 sm:p-6 md:p-8 relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div>
            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{icon}</span>
            <h3 className="text-xl sm:text-2xl font-bold text-text-light mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-text-light/80">{description}</p>
          </div>
        </div>

        {/* Price if available */}
        {price && (
          <div className="mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl font-bold text-pink">{price}</span>
          </div>
        )}

        {/* Features */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-2 sm:space-x-3"
            >
              <span className="text-pink text-lg sm:text-xl mt-1">✦</span>
              <div>
                <h4 className="font-semibold text-text-light text-sm sm:text-base">{feature.name}</h4>
                <p className="text-xs sm:text-sm text-text-light/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action - Now it will stick to the bottom */}
        <div className="mt-auto">
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-colors text-sm sm:text-base ${
              accent
                ? 'bg-pink text-white hover:bg-pink-dark'
                : 'bg-white/20 text-text-light hover:bg-white/30'
            }`}
          >
            En savoir plus
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
