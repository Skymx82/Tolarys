import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface Technology {
  name: string;
  description: string;
  logo?: string;
  stats?: string;
  clients?: string[];
  category: 'frontend' | 'backend' | 'mobile' | 'cloud';
}

const technologies: Technology[] = [
  { 
    name: "React",
    description: "Leader mondial des frameworks front-end",
    logo: "/images/tech/react.png",
    stats: "Utilisé par Facebook, Instagram, Netflix",
    clients: ["Airbus", "Capgemini", "Orange"],
    category: 'frontend'
  },
  { 
    name: "Node.js",
    description: "Performance et scalabilité enterprise",
    logo: "/images/tech/nodejs.png",
    stats: "+40% de performances vs PHP",
    clients: ["LinkedIn", "PayPal", "NASA"],
    category: 'backend'
  },
  { 
    name: "React Native",
    description: "La référence du mobile cross-platform",
    logo: "/images/tech/react-native.png",
    stats: "2x plus rapide à développer",
    clients: ["Microsoft", "Uber", "Meta"],
    category: 'mobile'
  },
  { 
    name: "Next.js",
    description: "L'excellence du web moderne",
    logo: "/images/tech/nextjs.png",
    stats: "99/100 score performance",
    clients: ["TF1", "Décathlon", "Nike"],
    category: 'frontend'
  },
  { 
    name: "TypeScript",
    description: "Fiabilité et maintenabilité garanties",
    logo: "/images/tech/typescript.png",
    stats: "-70% de bugs en production",
    clients: ["Google", "Slack", "Shopify"],
    category: 'frontend'
  },
  { 
    name: "Tailwind CSS",
    description: "Design premium et responsive",
    logo: "/images/tech/tailwind.png",
    stats: "Framework CSS le plus moderne",
    clients: ["GitHub", "Twitch", "Spotify"],
    category: 'frontend'
  },
  { 
    name: "MongoDB",
    description: "Base de données nouvelle génération",
    logo: "/images/tech/mongodb.webp",
    stats: "Plus de 1M+ de développeurs",
    clients: ["EA", "eBay", "Adobe"],
    category: 'backend'
  },
  { 
    name: "AWS",
    description: "Leader mondial du cloud computing",
    logo: "/images/tech/aws.png",
    stats: "99.99% de disponibilité",
    clients: ["Netflix", "BMW", "Samsung"],
    category: 'cloud'
  }
];

const TechScroll: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'Toutes', icon: '🚀' },
    { id: 'frontend', name: 'Front-end', icon: '💻' },
    { id: 'backend', name: 'Back-end', icon: '⚡' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'cloud', name: 'Cloud', icon: '☁️' }
  ];

  const filteredTech = technologies.filter(tech => 
    selectedCategory === 'all' || tech.category === selectedCategory
  );

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink/5 to-background-dark/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4 bg-gradient-to-r from-text-light to-pink bg-clip-text text-transparent">
            Technologies de Pointe
          </h2>
          <p className="text-lg text-text-light/90 max-w-2xl mx-auto mb-8">
            Nous utilisons exclusivement les technologies les plus performantes et reconnues mondialement
          </p>

          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                  ${selectedCategory === category.id 
                    ? 'bg-pink text-text-light shadow-lg shadow-pink/20 scale-105' 
                    : 'bg-white/5 text-text-light/70 hover:bg-white/10'}`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Vue mobile : Carrousel */}
        <div className="lg:hidden relative px-8">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={scrollLeft}
              className="bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center
                       text-text-light hover:text-pink transition-colors border border-white/20"
              aria-label="Précédent"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={scrollRight}
              className="bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center
                       text-text-light hover:text-pink transition-colors border border-white/20"
              aria-label="Suivant"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4"
          >
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="snap-center flex-none w-[80vw] max-w-sm bg-white/5 backdrop-blur-sm rounded-2xl p-6
                         border border-white/10 hover:border-pink/20 transform transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-pink/10 text-pink text-xs px-3 py-1 rounded-full">
                    {categories.find(c => c.id === tech.category)?.name}
                  </span>
                </div>
                <div className="flex items-center justify-center mb-6 h-20">
                  {tech.logo && (
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text-light mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-text-light/80 mb-4">
                    {tech.description}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-pink font-semibold text-sm mb-2">{tech.stats}</p>
                    <p className="text-text-light/60 text-xs">
                      Utilisé par : {tech.clients?.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vue desktop : Grille */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 
                       transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl 
                       hover:shadow-pink/5 border border-white/10 hover:border-pink/20"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="absolute top-4 right-4">
                <span className="bg-pink/10 text-pink text-xs px-3 py-1 rounded-full">
                  {categories.find(c => c.id === tech.category)?.name}
                </span>
              </div>

              <div className="flex items-center justify-center mb-6 h-20 relative">
                {tech.logo && (
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                )}
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-text-light mb-3 group-hover:text-pink transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-text-light/80 mb-4">
                  {tech.description}
                </p>
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                hoveredTech === tech.name ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-pink font-semibold text-sm mb-2">{tech.stats}</p>
                  <p className="text-text-light/60 text-xs">
                    Utilisé par : {tech.clients?.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-full px-6 py-3">
            <p className="text-sm text-text-light/60">
              Technologies certifiées et approuvées par les leaders de l'industrie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechScroll;
