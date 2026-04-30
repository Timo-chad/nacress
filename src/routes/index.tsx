import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Hero } from "@/components/Hero";
import { PoeticSection } from "@/components/PoeticSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const ITEM_LIST_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Bijoux Nacre NACRESS — Collection Printemps 2026",
  "description": "Colliers, bagues, boucles d'oreilles et bracelets en nacre et perles cultivées.",
  "url": "https://nacress.fr/#collections",
  "numberOfItems": 6,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "https://nacress.fr/produit/collier-perle-solitaire", "name": "Collier Perle Solitaire — bijou nacre" },
    { "@type": "ListItem", "position": 2, "url": "https://nacress.fr/produit/bague-onde-nacree",       "name": "Bague Onde Nacrée — bague nacre ajustable" },
    { "@type": "ListItem", "position": 3, "url": "https://nacress.fr/produit/creoles-perle-eau",       "name": "Créoles Perle d'Eau — boucles d'oreilles perle" },
    { "@type": "ListItem", "position": 4, "url": "https://nacress.fr/produit/bracelet-perle-unique",   "name": "Bracelet Perle Unique — bracelet plaqué or" },
    { "@type": "ListItem", "position": 5, "url": "https://nacress.fr/produit/bracelet-constellation",  "name": "Bracelet Constellation — bracelet perles nacrées" },
    { "@type": "ListItem", "position": 6, "url": "https://nacress.fr/produit/chaine-cheville-rivage",  "name": "Chaîne de Cheville Rivage — bijou mer" },
  ],
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NACRESS — Bijoux de Nacre & Perles | Coastal Luxury Montpellier" },
      {
        name: "description",
        content:
          "Bijoux de nacre et perles cultivées façonnés à la main à Montpellier. Colliers, bagues, bracelets côtiers — Collection Printemps 2026. Livraison offerte en France.",
      },
      { name: "keywords", content: "bijoux nacre, bijou nacre, collier perle, bague nacrée, bracelet perle, bijoux côtiers, bijoux mer, NACRESS, Montpellier, coastal luxury" },
    ],
    links: [{ rel: "canonical", href: "https://nacress.fr/" }],
    scripts: [{ type: "application/ld+json", children: ITEM_LIST_LD }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <BackgroundVideo src="/bg-coastal.mp4" />
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <PoeticSection />
        <ProductGrid />
        <Footer />
      </main>
    </div>
  );
}
