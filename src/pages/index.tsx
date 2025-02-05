import Image from "next/image";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ParticlesBackground from "../components/ParticlesBackground";
import TechScroll from "../components/TechScroll";
import FaqAccordion from "../components/FaqAccordion";
import ContactForm from "../components/ContactForm";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <Layout>
      {/* 1. Hero Section - Premier impact visuel */}
      <Section id="hero" title="" variant="dark" className="min-h-screen flex items-center justify-center relative">
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
      </Section>

      {/* 5. Pricing Section - Tarifs clairs */}
      <Section id="pricing" title="Tarifs Transparents" variant="dark" className="relative">
        <div className="absolute inset-0 bg-background-light shadow-lg"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Des tarifs adaptés à vos besoins</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Des solutions sur mesure pour donner vie à vos projets digitaux, avec un accompagnement personnalisé
            </p>
          </div>

          {/* Promotion Banner */}
          <div className="bg-pink/10 backdrop-blur-sm rounded-xl p-4 mb-8 text-center">
            <p className="text-lg md:text-xl font-bold text-pink">
              -20% sur votre première commande ! 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="mb-8">
                <h4 className="text-pink font-semibold mb-2">Les Tarifs</h4>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Développement Web</h3>
                <p className="text-text-secondary mb-6">Sites vitrines, e-commerce, applications web sur mesure</p>
                <div className="text-3xl font-bold text-pink mb-6">
                  À partir de 999€
                </div>
                <ul className="space-y-3">
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
              </div>
              <div className="mt-auto">
                <a
                  href="/tarifs/web"
                  className="block w-full text-center bg-pink text-text-light py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
                >
                  Voir les détails
                </a>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="mb-8">
                <h4 className="text-pink font-semibold mb-2">Les Tarifs</h4>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Développement Mobile</h3>
                <p className="text-text-secondary mb-6">Applications iOS et Android, solutions cross-platform</p>
                <div className="text-3xl font-bold text-pink mb-6">
                  À partir de 4999€
                </div>
                <ul className="space-y-3">
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
              </div>
              <div className="mt-auto">
                <a
                  href="/tarifs/mobile"
                  className="block w-full text-center bg-pink text-text-light py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
                >
                  Voir les détails
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Technologies Section - Nos outils */}
      <Section id="technologies" title="Technologies Utilisées" variant="light" className="relative">
        <ParticlesBackground />
        <div className="relative z-20">
          <TechScroll />
        </div>
      </Section>

      {/* 3. Services Section - Ce que nous proposons */}
      <Section id="services" title="Nos Services" variant="dark" className="relative">
        <ParticlesBackground />
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Sites Web"
              description="Des sites web aussi accueillants que les Toulousains"
              icon="🌐"
              price="À partir de 999€"
              href="/tarifs/web"
              features={[
                {
                  name: "Design Personnalisé",
                  description: "Une identité visuelle unique qui reflète votre marque"
                },
                {
                  name: "Responsive Design",
                  description: "Parfaitement adapté à tous les appareils"
                },
                {
                  name: "Optimisation SEO",
                  description: "Visibilité maximale sur les moteurs de recherche"
                },
                {
                  name: "Performance",
                  description: "Chargement rapide et expérience fluide"
                }
              ]}
              accent
            />

            <ServiceCard
              title="Applications Mobile"
              description="Des apps qui décollent comme un Airbus"
              icon="📱"
              price="À partir de 4999€"
              href="/tarifs/mobile"
              features={[
                {
                  name: "iOS & Android",
                  description: "Applications natives pour toutes les plateformes"
                },
                {
                  name: "UX/UI Design",
                  description: "Interfaces intuitives et ergonomiques"
                },
                {
                  name: "Publication Stores",
                  description: "Gestion complète de la mise en ligne"
                },
                {
                  name: "Support 6 mois",
                  description: "Maintenance et mises à jour incluses"
                }
              ]}
            />

            <ServiceCard
              title="Conseil & Support"
              description="Un accompagnement à la toulousaine"
              icon="💡"
              href="/#contact"
              features={[
                {
                  name: "Audit Technique",
                  description: "Analyse approfondie de vos besoins"
                },
                {
                  name: "Formation",
                  description: "Accompagnement personnalisé de vos équipes"
                },
                {
                  name: "Maintenance",
                  description: "Support technique et mises à jour régulières"
                },
                {
                  name: "Évolution",
                  description: "Amélioration continue de vos solutions"
                }
              ]}
            />
          </div>
        </div>
      </Section>


      {/* 5 . About Section - Présentation de l'entreprise */}
      <Section id="about" title="À Propos" variant="light" className="relative">
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
                    <span className="text-pink font-bold text-xl"> </span>
                    Salut ! Je suis Mattias, un passionné de développement depuis tout petit. 
                    À 11 ans, j'ai créé mon premier jeu sur Scratch, et depuis, je n'ai jamais 
                    cessé d'apprendre et de coder.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-lg leading-relaxed text-text-light">
                    <span className="text-pink font-bold text-xl"> </span>
                    C'est à Toulouse, ville d'innovation et de technologie, que j'ai choisi 
                    de lancer Tolarys. Inspiré par l'esprit pionnier de la ville rose, 
                    je gère cette micro-entreprise de développement web et mobile en parallèle 
                    de mes études.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-lg leading-relaxed text-text-light">
                    <span className="text-pink font-bold text-xl"> </span>
                    Mon objectif ? Aider les entrepreneurs et entreprises toulousaines à se 
                    digitaliser avec des solutions modernes, efficaces et adaptées à leurs besoins. 
                    Comme le cassoulet mijote doucement pour développer ses saveurs, nous prenons 
                    le temps de construire des projets solides et durables.
                  </p>
                </div>
              </div>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 group">
                <Image 
                  src="/images/capitol.jpeg" 
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

      {/* 6. Testimonials - Preuves sociales */}
      <Section id="testimonials" title="Ce que nos clients disent" variant="light" className="relative">
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
      <Section id="faq" title="Questions Fréquentes" variant="dark" className="relative">
        <ParticlesBackground />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={[
              {
                question: "Combien coûte un site web ?",
                answer: "Le coût dépend de vos besoins spécifiques. Nos sites vitrines commencent à 999€, et les solutions e-commerce à partir de 2499€. Chaque projet est unique, et nous établissons un devis détaillé après avoir bien compris vos objectifs et vos exigences. Nous nous engageons à être transparents sur les coûts dès le début du projet."
              },
              {
                question: "Quel est le délai de réalisation ?",
                answer: "Les délais varient selon la complexité du projet : un site vitrine prend généralement 2-3 semaines, un e-commerce 4-6 semaines, et une application mobile 8-12 semaines. Nous établissons ensemble un planning détaillé au début du projet et vous tenons informé de l'avancement à chaque étape. Notre priorité est de livrer un produit de qualité dans les délais convenus."
              },
              {
                question: "Proposez-vous un service de maintenance ?",
                answer: "Oui ! Nous proposons plusieurs formules de maintenance adaptées à vos besoins : mises à jour de sécurité, sauvegardes régulières, modifications de contenu, support technique... Nous sommes là pour assurer le bon fonctionnement de votre site sur le long terme. Nos contrats de maintenance sont flexibles et peuvent être ajustés selon vos besoins."
              },
              {
                question: "Le site sera-t-il responsive ?",
                answer: "Absolument ! Tous nos sites sont développés en responsive design et optimisés pour tous les appareils : ordinateurs, tablettes et smartphones. Nous testons rigoureusement chaque site sur différents appareils et navigateurs pour garantir une expérience utilisateur optimale. C'est un standard incontournable aujourd'hui et nous y accordons une attention particulière."
              },
              {
                question: "Puis-je modifier mon site moi-même ?",
                answer: "Oui ! Nous développons tous nos sites avec une interface d'administration intuitive et sur mesure. Nous vous formons à son utilisation et fournissons une documentation détaillée. Vous pourrez ainsi gérer votre contenu en toute autonomie : textes, images, produits, articles de blog... Et si vous avez besoin d'aide, nous restons disponibles pour vous accompagner."
              },
              {
                question: "Comment se déroule un projet avec Tolarys ?",
                answer: "Notre processus se déroule en plusieurs étapes : 1) Discussion initiale pour comprendre vos besoins, 2) Proposition détaillée et devis, 3) Conception et validation des maquettes, 4) Développement avec points réguliers, 5) Tests et ajustements, 6) Formation et mise en ligne. Nous privilégions une communication transparente tout au long du projet et vous impliquons dans les décisions importantes."
              }
            ]} />
          </div>
        </div>
      </Section>

      {/* 8. Contact Section - Call to action final */}
      <Section id="contact" title="Parlons de votre projet" variant="light" className="relative">
        <ParticlesBackground />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-text-light mb-6">
                Envie de discuter de votre projet autour d'un café place du Capitole ? 
                Contactez-nous pour échanger !
              </p>
              <div className="flex items-center justify-center space-x-6 mb-8">
                <a 
                  href="tel:+33600000000" 
                  className="flex items-center text-text-light hover:text-pink transition-colors"
                >
                  <span className="text-2xl mr-2">📞</span>
                  <span>06 79 33 68 12</span>
                </a>
                <a 
                  href="mailto:contact@tolarys.fr" 
                  className="flex items-center text-text-light hover:text-pink transition-colors"
                >
                  <span className="text-2xl mr-2">📧</span>
                  <span>contact@tolarys-toulouse.fr</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
