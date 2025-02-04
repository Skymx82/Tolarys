import React from 'react';
import Head from 'next/head';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tolarys - Développement Web & Mobile à Toulouse</title>
        <meta name="description" content="Tolarys - Votre partenaire en développement web et mobile à Toulouse. Sites web, applications mobiles et solutions digitales sur mesure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-background-dark text-text-light">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-background-dark text-text-light py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Tolarys</h3>
                <p className="text-text-light/80">
                  Solutions web et mobile innovantes à Toulouse
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-text-light/80"> Toulouse, France</p>
                <p className="text-text-light/80">contact@tolarys.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-text-light hover:text-pink transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-text-light hover:text-pink transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-text-light hover:text-pink transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-text-light/20 text-center text-text-light/60">
              <p> {new Date().getFullYear()} Tolarys. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
