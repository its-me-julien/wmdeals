import Header from "@/components/homepage/Header";
import Plans from "@/components/homepage/Plans";
import Features from "@/components/homepage/Features";
import Coverage from "@/components/homepage/Coverage";
import FAQ from "@/components/homepage/FAQ";
import Deals from "@/components/homepage/deals";
import Promo from "@/components/homepage/promo-code";
import Banner from "@/components/homepage/Banner";
import Ticker from "@/components/homepage/Ticker";
import Club from "@/components/homepage/club";
import Head from "next/head";

 {/* Comment:
  
  import Testimonials from "@/components/Testimonials";
  
  */}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      
      <Head>
        <title>World Mobile Phone Plans & Internet Deals</title>
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
      < Promo/>
      < Deals/>
      < Club/>
      <Coverage />  
      <Banner />
      <FAQ />
    </main>
  );
}
