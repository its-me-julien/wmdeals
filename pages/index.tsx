import Header from "@/components/world-mobile-deals/Header";
import Head from "next/head";


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
    </main>
  );
}
