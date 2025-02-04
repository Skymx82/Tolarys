import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

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
      <div className="py-20 bg-gradient-to-b from-pink/10 to-white">
        <Section title="Tarifs Sites Web">
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Pack Vitrine */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Vitrine</h3>
              <div className="text-3xl font-bold text-pink mb-6">
                À partir de 999€
              </div>
              <ul className="space-y-3 mb-8">
                {features.vitrine.map((feature, index) => (
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

            {/* Pack Business */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-pink text-white text-sm py-1 px-4 rounded-full">Populaire</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack Business</h3>
              <div className="text-3xl font-bold text-pink mb-6">
                À partir de 1999€
              </div>
              <ul className="space-y-3 mb-8">
                {features.business.map((feature, index) => (
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

            {/* Pack E-commerce */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Pack E-commerce</h3>
              <div className="text-3xl font-bold text-pink mb-6">
                À partir de 2999€
              </div>
              <ul className="space-y-3 mb-8">
                {features.ecommerce.map((feature, index) => (
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

export default WebPricing;
