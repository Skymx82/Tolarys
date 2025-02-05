import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from 'next-seo';
import seoConfig from '../../next-seo.config';
import JsonLd from '../components/JsonLd';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <JsonLd />
      <Component {...pageProps} />
    </>
  );
}
