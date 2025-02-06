import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Link from 'next/link';
import ParticlesBackground from './ParticlesBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Head>
        <title>Tolarys - Développement Web & Mobile à Toulouse</title>
        <meta name="description" content="Tolarys - Votre partenaire en développement web et mobile à Toulouse. Sites web, applications mobiles et solutions digitales sur mesure." />
      </Head>

      <Header />
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-background-dark text-text-light py-12 relative">
        <ParticlesBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Tolarys</h3>
              <p className="text-text-light/80">
                Solutions digitales innovantes à Toulouse
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/tarifs/web" className="hover:text-pink transition-colors">Développement Web</Link></li>
                <li><Link href="/tarifs/mobile" className="hover:text-pink transition-colors">Développement Mobile</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <ul className="space-y-2">
                <li>Toulouse, France</li>
                <li><a href="mailto:contact@tolarys.fr" className="hover:text-pink transition-colors">contact@tolarys.fr</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Légal</h3>
              <ul className="space-y-2">
                <li><Link href="/mentions-legales" className="hover:text-pink transition-colors">Mentions légales</Link></li>
                <li><Link href="/politique-confidentialite" className="hover:text-pink transition-colors">Politique de confidentialité</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-text-light/10 text-center text-text-light/60">
            <p>&copy; {new Date().getFullYear()} Tolarys. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
