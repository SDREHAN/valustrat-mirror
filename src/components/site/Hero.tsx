import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-valustrat.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Global digital network powering enterprise transformation"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_70%_6%)] via-transparent to-transparent" />

      <div className="relative container-vs pb-24 pt-40 lg:pb-32 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            ValuStrat 2030 Vision
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            Engineering the
            <span className="block text-gradient-accent">next enterprise.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            We help the world's most ambitious organizations turn AI, cloud and data into
            measurable business outcomes — at the speed of opportunity.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-12 px-7 text-base">
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white hover:text-primary rounded-none h-12 px-7 text-base">
              <Play className="mr-2 h-4 w-4" /> Watch Our Story
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-4xl border-t border-white/15 pt-10">
          {[
            { k: "150+", v: "Enterprise clients" },
            { k: "27", v: "Countries delivered" },
            { k: "1.2K+", v: "Engineers & consultants" },
            { k: "98%", v: "Client retention" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-3xl md:text-4xl font-extrabold text-white">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
