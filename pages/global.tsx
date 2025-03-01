import Header from "@/components/global/Header";
import Plans from "@/components/global/Plans";
import Recommendation from "@/components/global/Recommendation";
import Recommendation2 from "@/components/global/Recommendation2";
import PlanvsSim from "@/components/global/PlanvsSim";
import FAQ from "@/components/global/WMFAQ";

import Banner from "@/components/global/Banner";
import Ticker from "@/components/global/Ticker";
import Head from "next/head";

 {/* Comment:
  
  import Testimonials from "@/components/Testimonials";
  
  */}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
       <Head>
      <title>The Best Deals for World Mobile Global Access Plan | WM Deals</title>
         <meta
        name="description"
        content="Discover the best global phone plans at WM Deals – 20GB high-speed data, 60+ country coverage, SIM security & no contract."
        />

        <link rel="canonical" href="https://wm.deals/global" />
    </Head>
      <Header />
      <Ticker />
      <Plans />
      <Recommendation />
      <FAQ />
      <Recommendation2 />
      <PlanvsSim />
       {/* Comment:
      <Testimonials />
        */} 
      <Banner />

    </main>
  );
}
