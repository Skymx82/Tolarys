import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header className="fixed w-full top-0 z-50 bg-background-dark/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-text-light">Tolarys</a>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-text-light hover:text-pink transition-colors">À propos</a>
              <a href="#services" className="text-text-light hover:text-pink transition-colors">Services</a>
              <a href="#pricing" className="text-text-light hover:text-pink transition-colors">Tarifs</a>
              <a href="#contact" className="text-text-light hover:text-pink transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

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
  );
};

export default Layout;
