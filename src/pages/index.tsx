import Image from "next/image";
import Layout from "@/components/Layout";
import ParticlesBackground from "@/components/ParticlesBackground";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TechScroll from "@/components/TechScroll";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import ServiceCarousel from "@/components/ServiceCarousel";
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section id="hero" title="" variant="dark" className="min-h-screen flex items-center justify-center relative">
        <ParticlesBackground />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Bandeau discret de preuve sociale */}
            <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-2 mb-8 inline-block">
              <p className="text-text-light text-sm md:text-base">
                Plus de 50 projets réalisés pour des entrepreneurs toulousains
              </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-text-light">
              Développement Web & Mobile à Toulouse
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-text-light/90">
              Des solutions digitales sur mesure pour donner vie à vos projets. 
              <span className="block mt-2 text-pink">
                Expertise reconnue dans l'écosystème tech toulousain
              </span>
            </p>

            {/* Éléments de preuve sociale et d'autorité */}
            <div className="flex justify-center gap-8 mb-8 text-sm text-text-light/80">
              <div>✓ Certifié Apple & Google</div>
              <div>✓ +300% de croissance moyenne</div>
              <div>✓ Support 7j/7</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" 
                 className="group inline-block bg-pink text-text-light px-8 py-4 rounded-full font-semibold hover:bg-pink-dark transition-all duration-300">
                <span className="inline-block transform group-hover:scale-105 transition-transform">
                  Démarrer votre projet
                </span>
                <span className="ml-2">→</span>
              </a>
              <a href="#services"
                 className="inline-block bg-white/10 backdrop-blur-sm text-text-light px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Découvrir nos services
              </a>
            </div>

            {/* Note subtile d'urgence */}
            <p className="text-sm text-text-light/60 mt-4">
              Consultation initiale offerte • Places limitées ce mois-ci
            </p>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" title="Tarifs Transparents" variant="dark" className="relative">
        <div className="absolute inset-0 bg-background-light shadow-lg"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Solutions sur mesure</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Investissez dans votre succès digital avec des solutions éprouvées
            </p>
          </div>

          {/* Bandeau de promotion subtil */}
          <div className="bg-pink/5 backdrop-blur-sm rounded-xl p-4 mb-8 text-center">
            <p className="text-base text-pink">
              Accompagnement personnalisé inclus avec chaque projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col relative overflow-hidden">
              {/* Badge populaire */}
              <div className="absolute top-4 right-4">
                <span className="bg-pink/10 text-pink text-sm px-3 py-1 rounded-full">
                  Plus populaire
                </span>
              </div>

              <div className="mb-8">
                <h4 className="text-pink font-semibold mb-2">Site Web Premium</h4>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Développement Web</h3>
                <p className="text-text-secondary mb-6">Sites vitrines, e-commerce, applications web sur mesure</p>
                <div className="flex items-baseline mb-6">
                  <div className="text-3xl font-bold text-pink">À partir de 999€</div>
                  <span className="text-sm text-text-secondary ml-2">tout inclus</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-text-secondary">
                    <span className="text-pink mr-2">✓</span>
                    Design personnalisé premium
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-pink mr-2">✓</span>
                    Responsive design garanti
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-pink mr-2">✓</span>
                    Optimisation SEO avancée
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-pink mr-2">✓</span>
                    Formation et support inclus
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="block w-full text-center bg-pink text-text-light py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
                >
                  Réserver votre projet
                </a>
                <p className="text-xs text-center text-text-secondary mt-2">
                  Délai moyen : 3-4 semaines
                </p>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col relative overflow-hidden">
              {/* Badge qualité */}
              <div className="absolute top-4 right-4">
                <span className="bg-pink/10 text-pink text-sm px-3 py-1 rounded-full">
                  Haute performance
                </span>
              </div>

              <div className="mb-8">
                <h4 className="text-pink font-semibold mb-2">App Mobile Premium</h4>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Développement Mobile</h3>
                <p className="text-text-secondary mb-6">Applications iOS et Android, solutions cross-platform</p>
                <div className="flex items-baseline mb-6">
                  <div className="text-3xl font-bold text-pink">À partir de 4999€</div>
                  <span className="text-sm text-text-secondary ml-2">tout inclus</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-text-secondary">
                    <span className="text-pink mr-2">✓</span>
                    iOS et Android natifs
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-pink mr-2">✓</span>
                    Design UX/UI premium
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-pink mr-2">✓</span>
                    Publication stores garantie
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-pink mr-2">✓</span>
                    Support prioritaire 6 mois
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="block w-full text-center bg-pink text-text-light py-3 rounded-lg hover:bg-pink-dark transition-colors duration-300"
                >
                  Réserver votre projet
                </a>
                <p className="text-xs text-center text-text-secondary mt-2">
                  Délai moyen : 8-10 semaines
                </p>
              </div>
            </div>
          </div>

          {/* Note de confiance */}
          <div className="mt-8 text-center">
            <p className="text-sm text-text-secondary">
              Paiement en plusieurs fois possible • Garantie satisfaction 30 jours
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Technologies Section - Nos outils */}
      <div className="relative overflow-hidden">
        <ParticlesBackground />
        <div className="relative z-20">
          <TechScroll />
        </div>
      </div>

      {/* 3. Services Section - Ce que nous proposons */}
      <Section id="services" title="Nos Services" variant="dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Solutions sur mesure pour votre succès digital
            </h2>
            <p className="text-text-light/80 text-lg">
              Découvrez nos services premium conçus pour propulser votre entreprise vers de nouveaux sommets.
              <span className="text-pink"> Plus de 200 projets</span> réalisés avec succès.
            </p>
          </div>
          
          <ServiceCarousel />
        </div>
      </Section>

      {/* 5 . About Section - Présentation de l'entreprise */}
      <AboutSection />

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
                image: "/images/personne1.jpg"
              },
              {
                name: "Thomas B.",
                role: "CEO de TechStart",
                text: "Une collaboration exceptionnelle ! L'équipe a parfaitement compris nos besoins et a livré une application mobile qui dépasse nos attentes.",
                image: "/images/personne2.jpg"
              },
              {
                name: "Sophie M.",
                role: "Architecte d'intérieur",
                text: "Mon portfolio en ligne est exactement ce que je voulais. Professionnel, élégant et parfaitement responsive. Merci Tolarys !",
                image: "/images/personne3.jpg"
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

      {/* 8. Contact Section - Simple et efficace */}
      <Section id="contact" title="" variant="light" className="relative">
        <ParticlesBackground />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
                Contactez-nous
              </h2>
              <p className="text-lg text-text-light/90">
                Une question ? Un projet ? Écrivez-nous !
              </p>
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
