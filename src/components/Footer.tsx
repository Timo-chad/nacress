import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ContactModal } from "./ContactModal";
import { NewsletterModal } from "./NewsletterModal";

export function Footer() {
  const [contactOpen,     setContactOpen]     = useState(false);
  const [newsletterOpen,  setNewsletterOpen]  = useState(false);

  return (
    <>
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
            <p className="text-[10px] tracking-luxury uppercase text-foreground/60 mb-4">Maison</p>
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
            <p className="text-[10px] tracking-luxury uppercase text-foreground/60 mb-4">Contact</p>

            <button
              onClick={() => setContactOpen(true)}
              className="block w-full text-left hover:text-accent transition-colors"
            >
              Nous écrire
            </button>

            <a
              href="https://www.instagram.com/nacress.jewlery"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-accent transition-colors"
            >
              Instagram
            </a>

            <button
              onClick={() => setNewsletterOpen(true)}
              className="block w-full text-left hover:text-accent transition-colors"
            >
              Newsletter
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[10px] tracking-luxury uppercase text-foreground/50">
            © {new Date().getFullYear()} NACRESS — Tous droits réservés
          </p>
          <nav className="flex gap-6" aria-label="Informations légales">
            <Link to="/mentions-legales" className="text-[9px] tracking-luxury uppercase text-foreground/45 hover:text-foreground/65 transition-colors">
              Mentions légales
            </Link>
            <Link to="/cgv" className="text-[9px] tracking-luxury uppercase text-foreground/45 hover:text-foreground/65 transition-colors">
              CGV
            </Link>
            <Link to="/conformite" className="text-[9px] tracking-luxury uppercase text-foreground/45 hover:text-foreground/65 transition-colors">
              Conformité produits
            </Link>
          </nav>
        </div>
      </footer>

      <ContactModal    open={contactOpen}    onClose={() => setContactOpen(false)}    />
      <NewsletterModal open={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
    </>
  );
}
