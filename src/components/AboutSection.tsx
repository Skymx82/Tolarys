import React from 'react';
import Image from 'next/image';
import Section from './Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="Notre Histoire" variant="dark">
      <div className="container mx-auto px-4">
        {/* Introduction personnelle */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <span className="inline-block text-pink text-lg font-medium mb-4">Mon Histoire</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-6">
              De la Passion à{" "}
              <span className="text-pink">l'Entrepreneuriat</span>
            </h2>
            <p className="text-lg text-text-light/90 max-w-2xl mx-auto">
              Bienvenue ! Je suis ravi de partager avec vous mon parcours et ma vision du développement web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Histoire personnelle */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">👋</span>
                  <div>
                    <h3 className="text-xl font-semibold text-text-light mb-3">
                      Les Débuts
                    </h3>
                    <p className="text-text-light/90 leading-relaxed">
                      Salut ! Je m'appelle Mattias, et ma passion pour le code a commencé très tôt. 
                      À 11 ans, j'ai créé mon premier jeu sur Scratch. Cette première expérience a 
                      éveillé en moi une véritable passion pour la création numérique.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🌟</span>
                  <div>
                    <h3 className="text-xl font-semibold text-text-light mb-3">
                      L'Aventure Continue
                    </h3>
                    <p className="text-text-light/90 leading-relaxed">
                      C'est à Toulouse, ville d'innovation et de technologie, que j'ai choisi 
                      de lancer Tolarys. Inspiré par l'esprit pionnier de la ville rose, 
                      je gère cette micro-entreprise en parallèle de mes études, en gardant 
                      toujours cette même passion qui m'anime depuis mes débuts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">💝</span>
                  <div>
                    <h3 className="text-xl font-semibold text-text-light mb-3">
                      Ma Vision
                    </h3>
                    <p className="text-text-light/90 leading-relaxed">
                      Comme le cassoulet mijote doucement pour développer ses saveurs, je prends 
                      le temps de construire chaque projet avec soin et attention. Mon objectif ? 
                      Aider les entrepreneurs toulousains à se digitaliser avec des solutions 
                      sur mesure, en y mettant tout mon cœur et mon expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image et stats */}
            <div className="relative order-1 md:order-2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-6 transform hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="/images/capitol.jpeg" 
                  alt="Toulouse, ma ville" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-text-light mb-2">
                    Toulouse, Ma Ville
                  </h3>
                  <p className="text-text-light/90 text-sm">
                    Où tradition et innovation se rencontrent
                  </p>
                </div>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-text-light/90 border border-white/10 hover:border-pink/20 transition-all duration-300">
                  🚀 Depuis 2020
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-text-light/90 border border-white/10 hover:border-pink/20 transition-all duration-300">
                  💻 200+ Projets
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-text-light/90 border border-white/10 hover:border-pink/20 transition-all duration-300">
                  ⭐ 97% Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mes Engagements */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-pink/20 transition-all duration-300">
          <h3 className="text-2xl font-bold text-text-light mb-8 text-center">
            Mes Engagements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="text-pink text-2xl group-hover:scale-110 transition-transform">❤️</div>
                <div>
                  <h4 className="font-semibold text-text-light mb-2 group-hover:text-pink transition-colors">
                    Proximité & Écoute
                  </h4>
                  <p className="text-sm text-text-light/90">
                    Je privilégie une relation directe et personnelle avec chaque client
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="text-pink text-2xl group-hover:scale-110 transition-transform">🎯</div>
                <div>
                  <h4 className="font-semibold text-text-light mb-2 group-hover:text-pink transition-colors">
                    Solutions Personnalisées
                  </h4>
                  <p className="text-sm text-text-light/90">
                    Chaque projet est unique et mérite une attention particulière
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="text-pink text-2xl group-hover:scale-110 transition-transform">🌱</div>
                <div>
                  <h4 className="font-semibold text-text-light mb-2 group-hover:text-pink transition-colors">
                    Évolution Continue
                  </h4>
                  <p className="text-sm text-text-light/90">
                    Je grandis avec mes clients, en restant à l'écoute de leurs besoins
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="text-pink text-2xl group-hover:scale-110 transition-transform">🤝</div>
                <div>
                  <h4 className="font-semibold text-text-light mb-2 group-hover:text-pink transition-colors">
                    Transparence Totale
                  </h4>
                  <p className="text-sm text-text-light/90">
                    Une communication claire et honnête à chaque étape
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="text-pink text-2xl group-hover:scale-110 transition-transform">⚡</div>
                <div>
                  <h4 className="font-semibold text-text-light mb-2 group-hover:text-pink transition-colors">
                    Réactivité
                  </h4>
                  <p className="text-sm text-text-light/90">
                    Je suis là quand vous avez besoin de moi
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="text-pink text-2xl group-hover:scale-110 transition-transform">🎓</div>
                <div>
                  <h4 className="font-semibold text-text-light mb-2 group-hover:text-pink transition-colors">
                    Apprentissage Continu
                  </h4>
                  <p className="text-sm text-text-light/90">
                    Je me forme constamment aux nouvelles technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-light/90 mb-6 text-lg">
            Envie d'échanger sur votre projet autour d'un café ?
          </p>
          <a
            href="#contact"
            className="inline-block bg-pink text-text-light px-8 py-4 rounded-lg
                     hover:bg-pink-dark transition-all duration-300
                     transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink/20"
          >
            Rencontrons-nous à Toulouse
          </a>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
