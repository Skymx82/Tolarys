import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import ParticlesBackground from '../../components/ParticlesBackground';
import { motion } from 'framer-motion';

const MobilePricing = () => {
  const features = {
    basic: [
      "Application native (iOS ou Android)",
      "Design UI/UX personnalisé",
      "Jusqu'à 5 écrans",
      "Authentification basique",
      "Support technique (3 mois)",
      "Publication sur les stores"
    ],
    pro: [
      "Application native (iOS et Android)",
      "Design UI/UX premium",
      "Jusqu'à 10 écrans",
      "Authentification avancée",
      "Base de données cloud",
      "Support technique (6 mois)",
      "Analytics intégrés"
    ],
    enterprise: [
      "Application cross-platform",
      "Design UI/UX sur mesure",
      "Nombre d'écrans illimité",
      "Fonctionnalités avancées",
      "Backend personnalisé",
      "Support technique (12 mois)",
      "Panel d'administration"
    ]
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        <ParticlesBackground />
        <div className="relative z-10 py-20">
          <Section title="Tarifs Applications Mobile">
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {/* Pack Basic */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 bg-pink/20 text-pink px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
                  BASIQUE
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Basic</h3>
                <div className="text-4xl font-bold text-pink mb-2">
                  4999€
                </div>
                <p className="text-gray-600 mb-6">Prix de départ</p>
                <ul className="space-y-4 mb-8">
                  {features.basic.map((feature, index) => (
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

              {/* Pack Pro */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink"
              >
                <div className="absolute top-0 right-0 bg-pink text-white px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
                  POPULAIRE
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Pro</h3>
                <div className="text-4xl font-bold text-pink mb-2">
                  9999€
                </div>
                <p className="text-gray-600 mb-6">Prix de départ</p>
                <ul className="space-y-4 mb-8">
                  {features.pro.map((feature, index) => (
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

              {/* Pack Enterprise */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink to-purple-600 text-white px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
                  ENTERPRISE
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Enterprise</h3>
                <div className="text-4xl font-bold text-pink mb-2">
                  Sur mesure
                </div>
                <p className="text-gray-600 mb-6">Contactez-nous</p>
                <ul className="space-y-4 mb-8">
                  {features.enterprise.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-pink mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-pink to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-colors duration-300 font-semibold">
                  Nous contacter
                </button>
              </motion.div>
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default MobilePricing;
