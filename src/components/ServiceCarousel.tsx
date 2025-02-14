import React, { useRef } from 'react';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  timeline: string;
  price: string;
  promotion?: string;
  satisfaction: string;
}

const services: Service[] = [
  {
    title: "Site Web Premium",
    description: "Un site web professionnel qui convertit",
    features: [
      "Design sur mesure",
      "Optimisation SEO",
      "Responsive design",
      "Support 24/7"
    ],
    icon: "💻",
    timeline: "3-4 semaines",
    price: "Dès 999€",
    promotion: "Hébergement 1 an offert",
    satisfaction: "98% satisfaits",
  },
  {
    title: "Application Mobile",
    description: "Une app native performante",
    features: [
      "Design UX/UI premium",
      "iOS et Android",
      "Notifications push",
      "Analytics intégrés"
    ],
    icon: "📱",
    timeline: "8-10 semaines",
    price: "Dès 4999€",
    promotion: "3 mois maintenance offerts",
    satisfaction: "96% satisfaits",
  },
  {
    title: "E-commerce",
    description: "Une boutique qui booste vos ventes",
    features: [
      "Design conversion",
      "Paiement sécurisé",
      "Gestion stocks",
      "Formation incluse"
    ],
    icon: "🛍️",
    timeline: "6-8 semaines",
    price: "Dès 2999€",
    promotion: "Module fidélité offert",
    satisfaction: "97% satisfaits",
  }
];

const ServiceCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div className="relative">
      {/* Vue mobile : Carrousel */}
      <div className="lg:hidden relative px-8">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={scrollLeft}
            className="bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center
                     text-text-light hover:text-pink transition-colors border border-white/20"
            aria-label="Service précédent"
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
            aria-label="Service suivant"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="snap-center flex-none w-[80vw] max-w-sm bg-white/5 backdrop-blur-sm rounded-2xl p-6
                       border border-white/10 hover:border-pink/20 flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-text-light mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-light/80">
                    {service.description}
                  </p>
                </div>

                {/* Prix et promo */}
                <div className="bg-pink/10 rounded-xl p-4 mb-4">
                  <div className="text-xl font-bold text-pink text-center">
                    {service.price}
                  </div>
                  {service.promotion && (
                    <div className="text-sm text-pink/80 text-center mt-1">
                      {service.promotion}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-text-light/80">
                      <span className="text-pink mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Timeline et satisfaction en ligne */}
                <div className="flex justify-between text-sm text-text-light/60 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-pink">⏱</span>
                    {service.timeline}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-pink">⭐</span>
                    {service.satisfaction}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="block w-full text-center bg-pink text-text-light py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300 mt-auto"
              >
                Démarrer votre projet
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Vue desktop : Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 
                     transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl 
                     hover:shadow-pink/5 border border-white/10 hover:border-pink/20 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-light mb-2 group-hover:text-pink transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-light/80">
                  {service.description}
                </p>
              </div>

              {/* Prix et promo */}
              <div className="bg-pink/10 rounded-xl p-4 mb-6 transform group-hover:scale-105 transition-transform">
                <div className="text-xl font-bold text-pink text-center">
                  {service.price}
                </div>
                {service.promotion && (
                  <div className="text-sm text-pink/80 text-center mt-1">
                    {service.promotion}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-text-light/80 group-hover:text-text-light transition-colors">
                    <span className="text-pink mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Timeline et satisfaction */}
              <div className="flex justify-between text-sm text-text-light/60 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-pink">⏱</span>
                  {service.timeline}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-pink">⭐</span>
                  {service.satisfaction}
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="block w-full text-center bg-pink text-text-light py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300 mt-auto"
            >
              Démarrer votre projet
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
