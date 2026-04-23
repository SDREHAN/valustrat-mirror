import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    name: "Banking & Financial Services",
    headline: "Reinventing finance for the AI economy.",
    desc: "We modernize core banking, accelerate payments and embed AI into risk and compliance for 40+ global institutions.",
  },
  {
    name: "Manufacturing",
    headline: "From factory floor to autonomous enterprise.",
    desc: "Industry 4.0, digital twins and connected operations that unlock measurable OEE gains.",
  },
  {
    name: "Healthcare & Life Sciences",
    headline: "Better outcomes, engineered with care.",
    desc: "Patient-centric platforms, compliant data and AI-assisted research across the value chain.",
  },
  {
    name: "Retail & CPG",
    headline: "Composable commerce at consumer speed.",
    desc: "Unified commerce, loyalty and supply-chain intelligence that drive lifetime value.",
  },
  {
    name: "Communications & Media",
    headline: "Networks ready for the next decade.",
    desc: "5G, OSS/BSS modernization and AI-driven monetization for telecom and media leaders.",
  },
  {
    name: "Energy & Utilities",
    headline: "Powering the sustainable transition.",
    desc: "Grid intelligence, asset optimization and ESG-grade data platforms.",
  },
];

export const Industries = () => {
  const [active, setActive] = useState(0);
  const cur = industries[active];

  return (
    <section className="bg-dark text-white py-24 md:py-32">
      <div className="container-vs">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-glow font-semibold mb-4">Industries</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Domain depth, delivered at
            <span className="text-gradient-accent"> global scale.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <ul className="lg:col-span-5 border-t border-white/15">
            {industries.map((it, i) => (
              <li key={it.name}>
                <button
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-full text-left py-6 border-b border-white/15 transition-smooth flex items-center justify-between group",
                    active === i ? "text-white" : "text-white/55 hover:text-white",
                  )}
                >
                  <span className="text-lg md:text-xl font-semibold">{it.name}</span>
                  <ArrowRight
                    className={cn(
                      "h-5 w-5 transition-smooth",
                      active === i ? "text-accent translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-60 group-hover:translate-x-0",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <div className="border-l-2 border-accent pl-8 lg:pl-10">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">{cur.headline}</h3>
              <p className="mt-6 text-white/75 text-lg leading-relaxed">{cur.desc}</p>
              <a href="#" className="inline-flex items-center mt-8 text-accent-glow font-semibold link-underline">
                Explore {cur.name} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
