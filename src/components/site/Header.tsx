import { useEffect, useState } from "react";
import { Menu, Search, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Services", items: ["Digital Engineering", "Cloud & Infrastructure", "Data & AI", "Cybersecurity", "Enterprise Applications"] },
  { label: "Industries", items: ["Banking & Financial Services", "Manufacturing", "Healthcare & Life Sciences", "Retail & CPG", "Communications"] },
  { label: "Insights", items: ["Reports", "Case Studies", "Newsroom", "Blogs"] },
  { label: "Careers", items: ["Life at ValuStrat", "Open Roles", "Graduate Program"] },
  { label: "About", items: ["Leadership", "Vision & Values", "Investors", "Sustainability"] },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled || open ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container-vs flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className={cn("h-9 w-9 rounded-sm bg-accent flex items-center justify-center font-bold text-accent-foreground", "shadow-accent-glow")}>
            V
          </div>
          <div className={cn("flex flex-col leading-tight", scrolled || open ? "text-foreground" : "text-white")}>
            <span className="text-base font-extrabold tracking-tight">ValuStrat</span>
            <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">Software & Consulting</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <div
              key={n.label}
              className="relative"
              onMouseEnter={() => setActive(n.label)}
              onMouseLeave={() => setActive(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-smooth",
                  scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white",
                )}
              >
                {n.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </button>
              {active === n.label && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                  <div className="min-w-[260px] bg-background border border-border shadow-elegant p-2">
                    {n.items.map((it) => (
                      <a
                        key={it}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-accent transition-smooth"
                      >
                        {it}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className={cn("hidden md:inline-flex p-2 transition-smooth", scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent-glow")}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Region"
            className={cn("hidden md:inline-flex p-2 transition-smooth", scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent-glow")}
          >
            <Globe className="h-5 w-5" />
          </button>
          <Button
            className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-10 px-5"
          >
            Contact Us
          </Button>
          <button
            className={cn("lg:hidden p-2", scrolled || open ? "text-foreground" : "text-white")}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-vs py-4 space-y-1">
            {nav.map((n) => (
              <details key={n.label} className="group border-b border-border">
                <summary className="flex items-center justify-between py-3 cursor-pointer text-foreground font-medium">
                  {n.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-3 pl-2 space-y-1">
                  {n.items.map((it) => (
                    <a key={it} href="#" className="block py-2 text-sm text-muted-foreground hover:text-accent">
                      {it}
                    </a>
                  ))}
                </div>
              </details>
            ))}
            <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-none">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
