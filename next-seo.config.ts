import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Tolarys - N°1 du Développement Web à Toulouse',
  defaultTitle: 'Tolarys - N°1 du Développement Web & Mobile à Toulouse | Sites Web Professionnels',
  description: '🏆 N°1 des Agences Web à Toulouse | ✨ Sites Web Premium & Applications Mobiles | 💡 Solutions Digitales Innovantes | ⚡️ Devis Gratuit en 24h | 🚀 +500 Projets Réussis',
  canonical: 'https://www.tolarys-toulouse.fr',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.tolarys-toulouse.fr',
    siteName: 'Tolarys - N°1 du Digital à Toulouse',
    title: '🏆 Tolarys - Leader du Développement Web & Mobile à Toulouse',
    description: '✨ Créez votre Site Web Premium avec l\'Agence N°1 à Toulouse | 🌟 Applications Mobiles Innovantes | 💫 Expertise Reconnue | 🚀 +500 Projets Réussis | ⭐️ 100% Satisfaction Client',
    images: [
      {
        url: 'https://www.tolarys-toulouse.fr/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Tolarys - N°1 du Développement Web à Toulouse',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@tolarys',
    site: '@tolarys',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'meilleure agence web toulouse, top développeur web toulouse, expert développement mobile toulouse, agence digitale n1 toulouse, création site web professionnel toulouse, développement application mobile toulouse, agence web premium toulouse, développeur web expert toulouse, site internet entreprise toulouse, applications mobiles toulouse',
    },
    {
      name: 'author',
      content: 'Tolarys - Agence Web Premium',
    },
    {
      name: 'geo.region',
      content: 'FR-OCC',
    },
    {
      name: 'geo.placename',
      content: 'Toulouse',
    },
    {
      name: 'og:site_name',
      content: 'Tolarys - N°1 du Digital à Toulouse',
    },
    {
      property: 'og:image:alt',
      content: 'Tolarys - Leader du Développement Web à Toulouse',
    },
    {
      name: 'theme-color',
      content: '#FF1493', // Couleur rose de votre thème
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/logo.png',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/logo.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

export default config;
