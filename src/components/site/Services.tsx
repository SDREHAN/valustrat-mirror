import { ArrowUpRight, Cpu, Cloud, Database, Shield, LayoutGrid, Workflow } from "lucide-react";

const services = [
  { icon: Cpu, title: "Digital Engineering", desc: "Product engineering, IoT, embedded systems and 5G-ready platforms." },
  { icon: Database, title: "Data & AI", desc: "Generative AI, MLOps, decision intelligence and enterprise data fabrics." },
  { icon: Cloud, title: "Cloud & Infrastructure", desc: "Cloud-native modernization across AWS, Azure and Google Cloud." },
  { icon: Shield, title: "Cybersecurity", desc: "Zero-trust, identity, threat detection and resilient operations." },
  { icon: LayoutGrid, title: "Enterprise Applications", desc: "SAP, Oracle, ServiceNow and Salesforce — engineered to perform." },
  { icon: Workflow, title: "Business Consulting", desc: "Strategy, operating models and value engineering for the AI era." },
];

export const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-vs">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">What we do</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Capabilities that move
              <br />
              the enterprise needle.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed">
              From ambition to operating reality. We bring deep domain expertise and full-stack
              engineering muscle to every transformation we lead.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s) => (
            <a
              key={s.title}
              href="#"
              className="group relative bg-background p-10 transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              <s.icon className="h-10 w-10 text-accent mb-8 transition-smooth group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">
                {s.desc}
              </p>
              <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 opacity-0 -translate-x-2 translate-y-2 transition-smooth group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
