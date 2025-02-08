import { LocalBusiness, WithContext } from 'schema-dts';

const JsonLd = () => {
  const schema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tolarys - N°1 du Développement Web à Toulouse',
    alternateName: 'Tolarys Toulouse',
    description: '🏆 Agence N°1 en développement web et mobile à Toulouse. Création de sites web premium et d\'applications mobiles innovantes. Plus de 500 projets réussis.',
    url: 'https://www.tolarys-toulouse.fr',
    telephone: '+33XXXXXXXXX', // Remplacez par votre numéro
    email: 'tolarystoulouse@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '', // Ajoutez votre adresse
      addressLocality: 'Toulouse',
      postalCode: '31000',
      addressCountry: 'FR',
      addressRegion: 'Occitanie'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.604652',
      longitude: '1.444209',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '43.604652',
        longitude: '1.444209',
      },
      geoRadius: '50000',
    },
    priceRange: '€',
    paymentAccepted: 'Cash, Credit Card, Virement bancaire',
    currenciesAccepted: 'EUR',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://www.linkedin.com/company/tolarys',
      'https://twitter.com/tolarys',
    ],
    image: [
      'https://www.tolarys-toulouse.fr/logo.png',
    ],
    logo: 'https://www.tolarys-toulouse.fr/logo.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1'
    },
    slogan: 'N°1 du Développement Web & Mobile à Toulouse',
    knowsLanguage: ['fr', 'en'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Web Premium',
          description: 'Création de sites web professionnels sur mesure avec les dernières technologies',
          areaServed: 'Toulouse et sa région',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Mobile Innovant',
          description: 'Création d\'applications mobiles iOS et Android performantes et intuitives',
          areaServed: 'Toulouse et sa région',
        },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Développement Digital',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Site Web Vitrine',
            description: 'Site web professionnel pour présenter votre entreprise',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Site E-commerce',
            description: 'Boutique en ligne performante et sécurisée',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Application Mobile',
            description: 'Application mobile native ou hybride',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
