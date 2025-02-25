import Header from "@/components/Header";
import Plans from "@/components/Plans";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Plans />
      <Features />
      <Testimonials />
      <FAQ />
    </main>
  );
}
