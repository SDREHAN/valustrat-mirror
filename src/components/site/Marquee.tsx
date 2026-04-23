const clients = [
  "NORTHWIND", "AXION BANK", "MERIDIAN", "HELIOS", "VANGUARD CO",
  "ORION LABS", "ATLAS RETAIL", "PHARMAVERSE", "QUANTUM AERO", "BLUEHARBOR",
];

export const Marquee = () => {
  return (
    <section className="bg-secondary border-y border-border py-8 overflow-hidden">
      <div className="container-vs mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center">
          Trusted by leaders across 27 countries
        </p>
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((c, i) => (
          <span key={i} className="mx-10 text-xl md:text-2xl font-bold text-muted-foreground/60 tracking-[0.2em]">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
};
