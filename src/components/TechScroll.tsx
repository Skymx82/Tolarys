import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Technology {
  name: string;
  description: string;
  logo?: string;
}

const technologies: Technology[] = [
  { 
    name: "React",
    description: "Pour des interfaces dynamiques",
    logo: "/images/tech/react.png"
  },
  { 
    name: "Node.js",
    description: "Backend puissant et scalable",
    logo: "/images/tech/nodejs.png"
  },
  { 
    name: "React Native",
    description: "Apps mobiles cross-platform",
    logo: "/images/tech/react-native.png"
  },
  { 
    name: "Next.js",
    description: "Sites web ultra-performants",
    logo: "/images/tech/nextjs.png"
  },
  { 
    name: "TypeScript",
    description: "Code robuste et maintenable",
    logo: "/images/tech/typescript.png"
  },
  { 
    name: "Tailwind CSS",
    description: "Design moderne et responsive",
    logo: "/images/tech/tailwind.png"
  },
  { 
    name: "MongoDB",
    description: "Base de données flexible",
    logo: "/images/tech/mongodb.webp"
  },
  { 
    name: "AWS",
    description: "Infrastructure cloud sécurisée",
    logo: "/images/tech/aws.png"
  }
];

const TechScroll: React.FC = () => {
  const [scrollSpeed, setScrollSpeed] = useState("animate-scroll-medium");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth <= 640) {
        setScrollSpeed("animate-scroll-fast");
      } else {
        setScrollSpeed("animate-scroll-medium");
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8 sm:py-12 bg-gradient-to-r from-background-dark/50 to-background-dark">
      <div 
        className={`flex space-x-4 sm:space-x-6 ${scrollSpeed} ${isHovered ? 'pause-animation' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-none w-40 sm:w-56 md:w-64 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 
                     transform hover:scale-105 transition-all duration-300 group animate-float 
                     border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl"
          >
            <div className="h-24 sm:h-32 w-24 sm:w-32 mx-auto mb-4 rounded-xl flex items-center justify-center relative group-hover:animate-float">
              {tech.logo ? (
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(255,20,147,0.3)]"
                />
              ) : (
                <span className="text-3xl sm:text-4xl text-pink-light/80 group-hover:text-pink-light transition-all duration-300">
                  {tech.name[0]}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-2 
                         bg-gradient-to-r from-text-light to-pink-light bg-clip-text text-transparent 
                         group-hover:from-pink-light group-hover:to-text-light transition-all duration-300">
              {tech.name}
            </h3>
            <p className="text-xs sm:text-sm text-center text-text-light/70 group-hover:text-text-light/90 
                        transition-colors line-clamp-2 leading-relaxed">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroll;
