import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-32">
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
      <div className="container-vs relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-glow font-semibold mb-6">Let's build what's next</p>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Have a transformation
              <br />
              in mind? <span className="text-gradient-accent">We'll engineer it.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-14 px-8 text-base justify-between">
              Talk to a consultant <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary rounded-none h-14 px-8 text-base justify-between">
              Request a proposal <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
