import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
 

  return (
    <>
      
      <main className="bg-background text-foreground">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
