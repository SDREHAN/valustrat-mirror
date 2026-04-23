import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { Stats } from "@/components/site/Stats";
import { Insights } from "@/components/site/Insights";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <h1 className="sr-only">ValuStrat Software and Consulting — Engineering the Next Enterprise</h1>
      <Hero />
      <Marquee />
      <Services />
      <Industries />
      <Stats />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
