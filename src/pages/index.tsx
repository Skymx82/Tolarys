import Image from "next/image";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ParticlesBackground from "../components/ParticlesBackground";
import TechScroll from "../components/TechScroll";

export default function Home() {
  return (
    <Layout>
      {/* 1. Hero Section - Premier impact visuel */}
      <div className="relative min-h-screen flex items-center bg-background-dark">
        <ParticlesBackground />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-text-light">
              Développement Web & Mobile à Toulouse
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-text-light/90">
              Au cœur de la ville rose, nous créons des solutions digitales innovantes 
              pour donner vie à vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" 
                 className="inline-block bg-pink text-text-light px-8 py-4 rounded-full font-semibold hover:bg-pink-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Découvrir nos services
              </a>
              <a href="#contact"
                 className="inline-block bg-white/10 backdrop-blur-sm text-text-light px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. About Section - Présentation de l'entreprise */}
      <Section id="about" title="À Propos" className="relative">
        <ParticlesBackground />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-text-light font-light mb-12 text-center">
              Fondée à Toulouse, Tolarys est née de la passion pour l'innovation et 
              l'excellence technique. Notre mission est de transformer vos idées en 
              solutions digitales performantes.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-lg leading-relaxed text-text-light">
                    <span className="text-pink font-bold text-xl">👋 </span>
                    Salut ! Je suis Mattias, un passionné de développement depuis tout petit. 
                    À 11 ans, j'ai créé mon premier jeu sur Scratch, et depuis, je n'ai jamais 
                    cessé d'apprendre et de coder.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-lg leading-relaxed text-text-light">
                    <span className="text-pink font-bold text-xl">🏰 </span>
                    C'est à Toulouse, ville d'innovation et de technologie, que j'ai choisi 
                    de lancer Tolarys. Inspiré par l'esprit pionnier de la ville rose, 
                    je gère cette micro-entreprise de développement web et mobile en parallèle 
                    de mes études.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-lg leading-relaxed text-text-light">
                    <span className="text-pink font-bold text-xl">🎯 </span>
                    Mon objectif ? Aider les entrepreneurs et entreprises toulousaines à se 
                    digitaliser avec des solutions modernes, efficaces et adaptées à leurs besoins. 
                    Comme le cassoulet mijote doucement pour développer ses saveurs, nous prenons 
                    le temps de construire des projets solides et durables.
                  </p>
                </div>
              </div>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 group">
                <Image 
                  src="/images/toulouse-tech.jpg" 
                  alt="Tech à Toulouse" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-text-light mb-2">Toulouse, Cité de l'Innovation</h3>
                  <p className="text-text-light/90">Au cœur de la ville rose, nous créons l'avenir du numérique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Services Section - Ce que nous proposons */}
      <Section id="services" title="Nos Services" className="relative">
        <div className="absolute inset-0 bg-background-light shadow-lg"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sites Web",
                description: "Des sites web aussi accueillants que les Toulousains",
                icon: "🌐",
                features: ["Design responsive", "Optimisation SEO", "Support local"]
              },
              {
                title: "Applications Mobile",
                description: "Des apps qui décollent comme un Airbus",
                icon: "📱",
                features: ["iOS & Android", "Design intuitif", "Performance optimale"]
              },
              {
                title: "Conseil & Support",
                description: "Un accompagnement à la toulousaine",
                icon: "💡",
                features: ["Proximité", "Réactivité", "Convivialité"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-background-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-text-primary">{service.title}</h3>
                <p className="text-text-secondary mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-text-secondary">
                      <span className="text-pink mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Technologies Section - Nos outils */}
      <Section id="technologies" title="Technologies Utilisées" className="relative">
        <ParticlesBackground />
        <div className="relative z-20">
          <TechScroll />
        </div>
      </Section>

      {/* 5. Pricing Section - Tarifs clairs */}
      <Section id="pricing" title="Nos Tarifs" className="relative">
        <div className="absolute inset-0 bg-background-light shadow-lg"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Développement Web</h3>
              <p className="text-text-secondary mb-6">Sites vitrines, e-commerce, applications web sur mesure</p>
              <div className="text-3xl font-bold text-pink mb-6">
                À partir de 999€
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-text-secondary">
                  <span className="text-pink mr-2">✓</span>
                  Design personnalisé
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="text-pink mr-2">✓</span>
                  Responsive design
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="text-pink mr-2">✓</span>
                  Optimisation SEO
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="text-pink mr-2">✓</span>
                  Formation incluse
                </li>
              </ul>
              <a
                href="/tarifs/web"
                className="block w-full text-center bg-pink text-text-light py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
              >
                Voir les détails
              </a>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Développement Mobile</h3>
              <p className="text-text-secondary mb-6">Applications iOS et Android, solutions cross-platform</p>
              <div className="text-3xl font-bold text-pink mb-6">
                À partir de 4999€
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-text-secondary">
                  <span className="text-pink mr-2">✓</span>
                  iOS et Android
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="text-pink mr-2">✓</span>
                  Design natif
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="text-pink mr-2">✓</span>
                  Publication stores
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="text-pink mr-2">✓</span>
                  Support 6 mois
                </li>
              </ul>
              <a
                href="/tarifs/mobile"
                className="block w-full text-center bg-pink text-text-light py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
              >
                Voir les détails
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Testimonials - Preuves sociales */}
      <Section id="testimonials" title="Ce que nos clients disent" className="relative">
        <ParticlesBackground />
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marie L.",
                role: "Fondatrice de La Petite Boutique",
                text: "Tolarys a donné vie à ma boutique en ligne avec un design magnifique. Le site est rapide, facile à utiliser et mes clients l'adorent !",
                image: "/images/testimonial1.jpg"
              },
              {
                name: "Thomas B.",
                role: "CEO de TechStart",
                text: "Une collaboration exceptionnelle ! L'équipe a parfaitement compris nos besoins et a livré une application mobile qui dépasse nos attentes.",
                image: "/images/testimonial2.jpg"
              },
              {
                name: "Sophie M.",
                role: "Architecte d'intérieur",
                text: "Mon portfolio en ligne est exactement ce que je voulais. Professionnel, élégant et parfaitement responsive. Merci Tolarys !",
                image: "/images/testimonial3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. FAQ Section - Réponses aux questions */}
      <Section id="faq" title="Questions Fréquentes" className="relative">
        <div className="absolute inset-0 bg-background-accent shadow-lg"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Combien coûte un site web ?",
                answer: "Le coût dépend de vos besoins spécifiques. Nos sites vitrines commencent à 999€, et les solutions e-commerce à partir de 2499€. Contactez-nous pour un devis personnalisé !"
              },
              {
                question: "Quel est le délai de réalisation ?",
                answer: "En général, un site vitrine prend 2-3 semaines, un e-commerce 4-6 semaines, et une application mobile 8-12 semaines. Ces délais peuvent varier selon la complexité du projet."
              },
              {
                question: "Proposez-vous un service de maintenance ?",
                answer: "Oui ! Nous proposons différentes formules de maintenance pour garantir que votre site reste à jour, sécurisé et performant. Les tarifs commencent à 49€/mois."
              },
              {
                question: "Le site sera-t-il responsive ?",
                answer: "Absolument ! Tous nos sites sont développés en responsive design et optimisés pour tous les appareils : ordinateurs, tablettes et smartphones."
              },
              {
                question: "Puis-je modifier mon site moi-même ?",
                answer: "Oui ! Nous formons nos clients à l'utilisation de leur site et fournissons une interface d'administration simple et intuitive."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-text-primary mb-2">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. Contact Section - Call to action final */}
      <Section id="contact" title="Parlons de votre projet" className="relative">
        <div className="absolute inset-0 bg-background-light shadow-lg"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8 text-text-secondary">
            Envie de discuter de votre projet autour d'un café place du Capitole ? 
            Contactez-nous pour échanger !
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Nom
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
              Envoyer
            </button>
          </form>
        </div>
      </Section>
    </Layout>
  );
}
