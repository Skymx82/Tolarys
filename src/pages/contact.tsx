import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background-light">
        <Section title="Contactez-nous" className="py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Parlons de votre projet
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-background-accent p-6 rounded-xl">
                  <h2 className="text-xl font-semibold text-text-primary mb-4">
                    Nos Coordonnées
                  </h2>
                  <div className="space-y-4 text-text-secondary">
                    <p className="flex items-center">
                      <span className="mr-3">📍</span>
                      Toulouse, France
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">📧</span>
                      contact@tolarys.com
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">⏰</span>
                      Lun-Ven: 9h-18h
                    </p>
                  </div>
                </div>
                
                <div className="bg-background-accent p-6 rounded-xl">
                  <h2 className="text-xl font-semibold text-text-primary mb-4">
                    Rencontrons-nous
                  </h2>
                  <p className="text-text-secondary">
                    Envie de discuter de votre projet autour d'un café ? 
                    Prenons rendez-vous au centre-ville de Toulouse !
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-pink text-text-primary"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-pink text-text-primary"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-pink text-text-primary"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Développement Mobile</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-pink text-text-primary"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink text-text-light py-3 px-6 rounded-lg font-semibold hover:bg-pink-dark transition-all duration-300 transform hover:-translate-y-1"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Contact;
