import Header from "@/components/Header";
import Plans from "@/components/Plans";
import Features from "@/components/Features";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Banner from "@/components/Banner";
import Ticker from "@/components/Ticker";
import Head from "next/head";


export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      

    <Head>
    <title>World Mobile Deals - No-Contract Mobile Phone Plans</title>
        <meta
          name="description"
          content="Switch to World Mobile for no-contract mobile phone plans with better privacy, nationwide coverage, fast and reliable connectivity."
        />
        <link rel="canonical" href="https://worldmobiledeals.com/" />
      </Head>
      <Ticker />
      <Plans />
      <Features />
      <Testimonials />
      <Coverage />  
      <Banner />
      <FAQ />
    </main>
  );
}
