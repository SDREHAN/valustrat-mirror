import { Linkedin, Twitter, Youtube, Facebook, Instagram } from "lucide-react";

const cols = [
  { title: "Services", links: ["Digital Engineering", "Cloud & Infrastructure", "Data & AI", "Cybersecurity", "Enterprise Applications", "Business Consulting"] },
  { title: "Industries", links: ["Banking & Financial Services", "Manufacturing", "Healthcare & Life Sciences", "Retail & CPG", "Communications", "Energy & Utilities"] },
  { title: "Company", links: ["About ValuStrat", "Leadership", "Careers", "Investors", "Sustainability", "Newsroom"] },
  { title: "Resources", links: ["Insights", "Case Studies", "Reports", "Events", "Partnerships", "Contact"] },
];

export const Footer = () => {
  return (
    <footer className="bg-[hsl(220_70%_5%)] text-white">
      <div className="container-vs py-20">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="h-9 w-9 rounded-sm bg-accent flex items-center justify-center font-bold">V</div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold">ValuStrat</span>
                <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">Software & Consulting</span>
              </div>
            </a>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              ValuStrat Software and Consulting Pvt Ltd partners with the world's most ambitious
              enterprises to engineer the next era of digital advantage.
            </p>
            <div className="flex items-center gap-3 mt-8">
              {[Linkedin, Twitter, Youtube, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="h-9 w-9 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">{c.title}</h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-white/65 hover:text-accent transition-smooth">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} ValuStrat Software and Consulting Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Use</a>
            <a href="#" className="hover:text-accent">Cookies</a>
            <a href="#" className="hover:text-accent">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
