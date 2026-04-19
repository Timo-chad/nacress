import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="h-px w-24 mx-auto bg-foreground/20" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif-display text-2xl tracking-luxury uppercase text-foreground">
            NACRESS
          </h3>
          <p className="mt-4 text-sm text-foreground/70 font-light leading-relaxed max-w-xs">
            Bijoux côtiers façonnés à la main. Entrepôts situés à Montpellier.
          </p>
        </div>
        <div className="text-sm font-light space-y-3 text-foreground/80">
          <p className="text-[10px] tracking-luxury uppercase text-foreground/60 mb-4">
            Maison
          </p>
          <Link to="/histoire" className="block hover:text-accent transition-colors">
            Notre Histoire
          </Link>
          <a href="#collection" className="block hover:text-accent transition-colors">
            Collections
          </a>
          <a href="#" className="block hover:text-accent transition-colors">
            Ateliers
          </a>
        </div>
        <div className="text-sm font-light space-y-3 text-foreground/80">
          <p className="text-[10px] tracking-luxury uppercase text-foreground/60 mb-4">
            Contact
          </p>
          <a href="#" className="block hover:text-accent transition-colors">
            Nous écrire
          </a>
          <a href="#" className="block hover:text-accent transition-colors">
            Instagram
          </a>
          <a href="#" className="block hover:text-accent transition-colors">
            Newsletter
          </a>
        </div>
      </div>
      <p className="max-w-7xl mx-auto px-6 md:px-12 pb-10 text-[10px] tracking-luxury uppercase text-foreground/50">
        © {new Date().getFullYear()} NACRESS — Tous droits réservés
      </p>
    </footer>
  );
}
