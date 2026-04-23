import { ArrowUpRight } from "lucide-react";
import i1 from "@/assets/insight-1.jpg";
import i2 from "@/assets/insight-2.jpg";
import i3 from "@/assets/insight-3.jpg";

const items = [
  {
    img: i1, tag: "Report",
    title: "The State of AI in the Enterprise 2025",
    desc: "How global leaders are operationalizing generative AI from pilot to production.",
  },
  {
    img: i2, tag: "Case Study",
    title: "Reimagining core banking for a top-10 European bank",
    desc: "A 36-month modernization that cut transaction latency by 62% and unlocked $180M in value.",
  },
  {
    img: i3, tag: "Perspective",
    title: "Beyond cloud: the rise of the composable enterprise",
    desc: "Why platform thinking — not migration — is the next frontier of digital advantage.",
  },
];

export const Insights = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-vs">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Insights</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Ideas shaping the next enterprise.
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary link-underline">
            View all insights →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <a key={it.title} href="#" className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
              </div>
              <div className="pt-6">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{it.tag}</span>
                <h3 className="mt-3 text-xl font-bold text-primary leading-snug group-hover:text-accent transition-smooth">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                  Read more <ArrowUpRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
