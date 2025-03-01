import Header from "@/components/homepage/Header";
import Plans from "@/components/homepage/Plans";
import Features from "@/components/homepage/Features";
import Coverage from "@/components/homepage/Coverage";
import FAQ from "@/components/homepage/FAQ";

import Banner from "@/components/homepage/Banner";
import Ticker from "@/components/homepage/Ticker";
import Head from "next/head";

 {/* Comment:
  
  import Testimonials from "@/components/Testimonials";
  
  */}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      
      <Head>
        <title>The Best Deals for World Mobile Phone & Broadband Plans | WM Deals</title>
        <meta
            name="description"
            content="Find the best mobile plans with privacy-focused features, nationwide coverage, and reliable connectivity."
        />
        <link rel="canonical" href="https://wm.deals/" />
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
