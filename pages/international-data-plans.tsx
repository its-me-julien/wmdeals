import Header from "@/components/international-data-plans/Header";
import Plans from "@/components/international-data-plans/Plans";
import Recommendation from "@/components/international-data-plans/Recommendation";
import Recommendation2 from "@/components/international-data-plans/Recommendation2";
import FAQ from "@/components/international-data-plans/WMFAQ";

import Banner from "@/components/international-data-plans/Banner";
import Ticker from "@/components/international-data-plans/Ticker";
import Head from "next/head";

 {/* Comment:
  
  import Testimonials from "@/components/Testimonials";
  
  */}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
       <Head>
      <title>World Mobile Global Access Plan | World Mobile Deals</title>
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
      <Recommendation2 />
      <FAQ />
       {/* Comment:
      <Testimonials />
        */} 
      <Banner />

    </main>
  );
}
