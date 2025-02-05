import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import ParticlesBackground from '../../components/ParticlesBackground';
import { motion } from 'framer-motion';

const WebPricing = () => {
  const features = {
    vitrine: [
      "Design responsive personnalisé",
      "Jusqu'à 5 pages",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement (1 an)",
      "Support technique (3 mois)"
    ],
    business: [
      "Tout du pack Vitrine",
      "Jusqu'à 10 pages",
      "Blog intégré",
      "Système de newsletter",
      "Optimisation SEO avancée",
      "Support technique (6 mois)"
    ],
    ecommerce: [
      "Tout du pack Business",
      "Boutique en ligne complète",
      "Système de paiement sécurisé",
      "Gestion des stocks",
      "Panel d'administration",
      "Support technique (12 mois)"
    ]
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        <ParticlesBackground />
        <div className="relative z-10 py-20">
          <Section title="Tarifs Sites Web">
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {/* Pack Vitrine */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 bg-pink/20 text-pink px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
                  VITRINE
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Vitrine</h3>
                <div className="text-4xl font-bold text-pink mb-2">
                  999€
                </div>
                <p className="text-gray-600 mb-6">Prix de départ</p>
                <ul className="space-y-4 mb-8">
                  {features.vitrine.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-pink mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-pink text-white py-3 rounded-lg hover:bg-pink/90 transition-colors duration-300 font-semibold">
                  Commencer
                </button>
              </motion.div>

              {/* Pack Business */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink"
              >
                <div className="absolute top-0 right-0 bg-pink text-white px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
                  POPULAIRE
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Business</h3>
                <div className="text-4xl font-bold text-pink mb-2">
                  1999€
                </div>
                <p className="text-gray-600 mb-6">Prix de départ</p>
                <ul className="space-y-4 mb-8">
                  {features.business.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-pink mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-pink text-white py-3 rounded-lg hover:bg-pink/90 transition-colors duration-300 font-semibold">
                  Commencer
                </button>
              </motion.div>

              {/* Pack E-commerce */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink to-purple-600 text-white px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
                  E-COMMERCE
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack E-commerce</h3>
                <div className="text-4xl font-bold text-pink mb-2">
                  3999€
                </div>
                <p className="text-gray-600 mb-6">Prix de départ</p>
                <ul className="space-y-4 mb-8">
                  {features.ecommerce.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-pink mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-pink to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-colors duration-300 font-semibold">
                  Commencer
                </button>
              </motion.div>
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default WebPricing;
