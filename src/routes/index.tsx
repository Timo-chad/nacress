import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Hero } from "@/components/Hero";
import { PoeticSection } from "@/components/PoeticSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NACRESS — Bijoux Coastal Luxury" },
      {
        name: "description",
        content:
          "Bijoux inspirés de l'océan. Nacre, perles cultivées et or recyclé. Collection Printemps 2026.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nacress.fr/" }],
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
