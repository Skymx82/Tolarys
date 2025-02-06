import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import JsonLd from '../components/JsonLd';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Tolarys - Développement Web & Mobile à Toulouse"
        description="Agence de développement web et mobile à Toulouse. Création de sites web, applications mobiles et solutions digitales sur mesure."
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://www.tolarys-toulouse.fr/',
          siteName: 'Tolarys',
        }}
      />
      <JsonLd />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
