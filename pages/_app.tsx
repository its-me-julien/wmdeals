import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Menu from "@/components/Menu";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
 

  return (
    <>
      <Menu/>
      <main className="bg-background text-foreground">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
