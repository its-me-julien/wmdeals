import Header from "@/components/world-mobile-deals/Header";
import Plans from "@/components/world-mobile-deals/Plans";
import Features from "@/components/world-mobile-deals/Features";
import Coverage from "@/components/world-mobile-deals/Coverage";
import FAQ from "@/components/world-mobile-deals/FAQ";
import Deals from "@/components/world-mobile-deals/deals";
import Promo from "@/components/world-mobile-deals/promo-code";
import Banner from "@/components/world-mobile-deals/Banner";
import Ticker from "@/components/world-mobile-deals/Ticker";
import Club from "@/components/world-mobile-deals/club";
import Head from "next/head";

 {/* Comment:
  
  import Testimonials from "@/components/Testimonials";
  
  */}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      
      <Head>
        <title>World Mobile Plan Deals</title>
        <meta
            name="description"
            content="The best world mobile phone plan deals. Privacy-focused, nationwide coverage, and reliable connectivity."
        />
        <link rel="canonical" href="https://wm.deals/world-mobile-deals" />
    </Head>

      <Header />
      <Ticker />
      <Plans />
      
      <Features />
      < Promo/>
      < Deals/>
      < Club/>
      <Coverage />  
      <Banner />
      <FAQ />
    </main>
  );
}
