import Header from "@/components/Header";
import Plans from "@/components/Plans";
import Features from "@/components/Features";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";

import Banner from "@/components/Banner";
import Ticker from "@/components/Ticker";
import Head from "next/head";

 {/* Comment:
  
  import Testimonials from "@/components/Testimonials";
  
  */}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      

      <Head>
        <title>WM Deals - No-Contract Mobile Plans & Deals</title>
        <meta
            name="description"
            content="Find the best no-contract mobile plans with privacy-focused features, nationwide coverage, and reliable connectivity. Compare top offers at WM Deals."
        />
        <link rel="canonical" href="https://wm.deals/" />
    </Head>

      <Ticker />
      <Plans />
      <Features />
       {/* Comment:
      <Testimonials />
        */}
      <Coverage />  
      <Banner />
      <FAQ />
    </main>
  );
}
