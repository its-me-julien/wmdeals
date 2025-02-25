import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = `https://worldmobiledeals.com${router.asPath}`;

  return (
    <>
      <Head>
        <title>World Mobile Deals - No-Contract Mobile Phone Plans</title>
        <meta
          name="description"
          content="Switch to World Mobile Deals for no-contract mobile phone plans. Enjoy better privacy, nationwide coverage, and reliable connectivity."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
     
      <main className="bg-background text-foreground">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
