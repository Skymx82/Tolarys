import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

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
      <div className="py-20 bg-gradient-to-b from-pink/10 to-white">
        <Section title="Tarifs Applications Mobile">
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Pack Basic */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Basic</h3>
              <div className="text-3xl font-bold text-pink mb-6">
                À partir de 4999€
              </div>
              <ul className="space-y-3 mb-8">
                {features.basic.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-pink mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full text-center bg-pink text-white py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
              >
                Commencer
              </a>
            </div>

            {/* Pack Pro */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-pink text-white text-sm py-1 px-4 rounded-full">Populaire</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Pro</h3>
              <div className="text-3xl font-bold text-pink mb-6">
                À partir de 9999€
              </div>
              <ul className="space-y-3 mb-8">
                {features.pro.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-pink mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full text-center bg-pink text-white py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
              >
                Commencer
              </a>
            </div>

            {/* Pack Enterprise */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Enterprise</h3>
              <div className="text-3xl font-bold text-pink mb-6">
                Sur devis
              </div>
              <ul className="space-y-3 mb-8">
                {features.enterprise.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-pink mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full text-center bg-pink text-white py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
              >
                Demander un devis
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-dark mb-4">
              Tous nos prix sont personnalisables selon vos besoins spécifiques.
              Contactez-nous pour un devis sur mesure.
            </p>
            <a
              href="#contact"
              className="inline-block bg-pink text-white px-8 py-4 rounded-full hover:bg-pink-dark transition-colors duration-300"
            >
              Demander un devis personnalisé
            </a>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default MobilePricing;
