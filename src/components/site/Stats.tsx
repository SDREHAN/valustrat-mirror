export const Stats = () => {
  const items = [
    { k: "$2.4B", v: "Client value unlocked", d: "across transformation programs in 2024" },
    { k: "150+", v: "Enterprise clients", d: "including 28 of the Fortune 500" },
    { k: "1.2K+", v: "Consultants & engineers", d: "in 11 delivery hubs worldwide" },
    { k: "27", v: "Countries served", d: "follow-the-sun delivery model" },
  ];
  return (
    <section className="py-20 bg-secondary">
      <div className="container-vs">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((it) => (
            <div key={it.v} className="border-l-2 border-accent pl-6">
              <div className="text-5xl font-extrabold text-primary">{it.k}</div>
              <div className="mt-2 text-base font-semibold text-foreground">{it.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
