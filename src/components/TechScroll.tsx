import React from 'react';
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
  return (
    <div className="w-full overflow-hidden py-12">
      <div className="flex space-x-8 animate-scroll">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-none w-64 bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="h-32 w-32 mx-auto mb-4 bg-white/5 rounded-lg flex items-center justify-center relative">
              {tech.logo ? (
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain p-4 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <span className="text-4xl text-text-light/80">{tech.name[0]}</span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-text-light text-center mb-2">{tech.name}</h3>
            <p className="text-text-light/80 text-center text-sm">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroll;
