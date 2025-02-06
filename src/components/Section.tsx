import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
}

const Section = ({ id, title, children, className = '', variant = 'dark' }: SectionProps) => {
  const bgColor = variant === 'dark' ? 'bg-background-dark' : 'bg-[#1a1a1a]';
  
  return (
    <section id={id} className={`py-16 ${bgColor} ${className}`}>
      {title && (
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-light text-center">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
