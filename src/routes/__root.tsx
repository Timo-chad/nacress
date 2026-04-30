import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

const JSON_LD_GLOBAL = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://nacress.fr/#website",
      "url": "https://nacress.fr/",
      "name": "NACRESS",
      "inLanguage": "fr-FR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nacress.fr/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://nacress.fr/#organization",
      "name": "NACRESS",
      "url": "https://nacress.fr/",
      "logo": "https://nacress.fr/icon-512.png",
      "description": "Bijoux de nacre, perles cultivées et or recyclé, façonnés à la main. Bijoux côtiers Coastal Luxury expédiés depuis Montpellier.",
      "sameAs": ["https://www.instagram.com/nacress.jewlery"],
    },
    {
      "@type": ["JewelryStore", "LocalBusiness"],
      "@id": "https://nacress.fr/#business",
      "name": "NACRESS — Bijoux Nacre & Perles",
      "url": "https://nacress.fr/",
      "image": "https://nacress.fr/og-cover.jpg",
      "description": "Bijoux de nacre, colliers perle, bagues nacrées et bracelets côtiers, façonnés à la main et expédiés depuis Montpellier. Collection Printemps 2026.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montpellier",
        "addressRegion": "Hérault",
        "postalCode": "34000",
        "addressCountry": "FR",
      },
      "areaServed": ["FR", "BE", "CH", "LU", "MC"],
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Carte bancaire, PayPal, Klarna",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Collection Bijoux Nacre Printemps 2026",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Collier Perle Solitaire", "url": "https://nacress.fr/produit/collier-perle-solitaire" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bague Onde Nacrée", "url": "https://nacress.fr/produit/bague-onde-nacree" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Créoles Perle d'Eau", "url": "https://nacress.fr/produit/creoles-perle-eau" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bracelet Perle Unique", "url": "https://nacress.fr/produit/bracelet-perle-unique" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bracelet Constellation", "url": "https://nacress.fr/produit/bracelet-constellation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chaîne de Cheville Rivage", "url": "https://nacress.fr/produit/chaine-cheville-rivage" } },
        ],
      },
    },
  ],
});

export const Route = createRootRoute({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON_LD_GLOBAL }],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
    </>
  ),
  notFoundComponent: NotFoundComponent,
});
