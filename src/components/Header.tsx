import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/#services', label: 'Services' },
    { href: '/#about', label: 'À Propos' },
    { href: '/#contact', label: 'Contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    if (href.startsWith('/#')) return router.pathname === '/';
    return router.pathname === href;
  };

  const handleClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('/#') && router.pathname !== '/') {
      e.preventDefault();
      router.push(href);
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background-dark/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 text-2xl font-bold text-text-light hover:text-pink transition-colors">
            <div className="relative w-10 h-10">
              <Image
                src="/Logo.png"
                alt="Tolarys Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 2.5rem, 2.5rem"
              />
            </div>
            <span className="mt-0.5">Tolarys</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(item.href, e)}
                className={`text-text-light hover:text-pink transition-colors px-3 py-2 rounded-lg hover:bg-white/5 ${
                  isActive(item.href) ? 'text-pink' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleClick('/#contact', e)}
              className="bg-pink text-white px-4 py-2 rounded-lg hover:bg-pink/90 transition-colors"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-text-light transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-text-light transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-text-light transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-x-0 bg-background-dark/95 backdrop-blur-sm transition-all duration-300 ${
            isOpen ? 'top-[72px] opacity-100 visible' : 'top-[-100%] opacity-0 invisible'
          }`}
        >
          <nav className="py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(item.href, e)}
                className={`block py-3 px-4 text-text-light hover:text-pink hover:bg-white/5 transition-colors text-lg ${
                  isActive(item.href) ? 'text-pink bg-white/5' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleClick('/#contact', e)}
              className="block mx-4 mt-4 text-center bg-pink text-white py-3 rounded-lg hover:bg-pink/90 transition-colors"
            >
              Devis gratuit
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
