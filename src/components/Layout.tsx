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
    <div className="min-h-screen bg-background-dark text-text-light">
      <Head>
        <title>Tolarys - Développement Web & Mobile à Toulouse</title>
        <meta name="description" content="Tolarys - Votre partenaire en développement web et mobile à Toulouse. Sites web, applications mobiles et solutions digitales sur mesure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-background-dark text-text-light py-12 relative">
        <ParticlesBackground />
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-text-light mb-4">Tolarys</h3>
              <p className="text-text-light/80">
                Solutions digitales innovantes à Toulouse
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-text-light mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tarifs/web" className="text-text-light/80 hover:text-pink transition-colors">
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link href="/tarifs/mobile" className="text-text-light/80 hover:text-pink transition-colors">
                    Développement Mobile
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-light mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-text-light/80">Email: contact@tolarys.fr</li>
                <li className="text-text-light/80">Toulouse, France</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-light mb-4">Informations légales</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/legal/mentions-legales" className="text-text-light/80 hover:text-pink transition-colors">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/legal/politique-confidentialite" className="text-text-light/80 hover:text-pink transition-colors">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cgv" className="text-text-light/80 hover:text-pink transition-colors">
                    CGV
                  </Link>
                </li>
                <li>
                  <Link href="/legal/politique-cookies" className="text-text-light/80 hover:text-pink transition-colors">
                    Politique des cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-text-light/10 text-center text-text-light/60">
            <p>&copy; {new Date().getFullYear()} Tolarys. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
