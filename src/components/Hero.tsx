export function Hero() {
  return (
    <section
      className="relative h-screen w-full"
      aria-label="NACRESS — Bijoux inspirés de l'océan"
    >
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <span
          className="text-[11px] tracking-luxury uppercase text-foreground/80 mb-6 font-normal text-sand-shadow animate-nacress-fade-up"
          style={{ letterSpacing: "0.4em" }}
        >
          Coastal Luxury — Édition Méditerranée
        </span>

        <h1
          className="font-serif-display text-foreground text-[13vw] md:text-8xl lg:text-9xl tracking-luxury uppercase text-sand-shadow animate-nacress-fade-up"
          style={{ animationDelay: "120ms", fontWeight: 500 }}
        >
          NACRESS
        </h1>

        <div
          className="mt-10 h-px w-16 bg-accent animate-nacress-fade-up"
          style={{ animationDelay: "260ms" }}
          aria-hidden
        />
      </div>

      <a
        href="#histoire"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 inline-flex items-center justify-center px-8 py-3 text-[10px] tracking-luxury uppercase text-foreground border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-500 animate-nacress-fade-up"
        style={{ animationDelay: "500ms" }}
      >
        Découvrir
      </a>
    </section>
  );
}
