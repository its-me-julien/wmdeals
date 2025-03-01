import Header from "@/components/travel/Header";
import Plans from "@/components/travel/Plans";
import Features from "@/components/travel/Features";
import Coverage from "@/components/travel/Coverage";
import FAQ from "@/components/travel/FAQ";

import Banner from "@/components/travel/Banner";
import Ticker from "@/components/travel/Ticker";
import Head from "next/head";

 {/* Comment:
  
  import Testimonials from "@/components/Testimonials";
  
  */}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Head>
      <title>The Best Deals for World Mobile Travel e-SIMS | WM Deals</title>
        <meta
        name="description"
        content="Discover World Travel e-SIMS from $5/month. Enjoy transparent pricing & global coverage for easy travel."
        />
        <link rel="canonical" href="https://wm.deals/travel" />
    </Head>
      <Header />
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
