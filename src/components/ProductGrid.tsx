import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useAnimate } from "framer-motion";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { ProductDetail } from "@/components/ProductDetail";

function ProductSlide({
  product,
  index,
  onOpen,
}: {
  product: Product;
  index: number;
  onOpen: (p: Product) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const [scope, animate] = useAnimate();
  const [isAnimating, setIsAnimating] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity   = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale     = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.05]);
  const imgY      = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const textY     = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const isReversed = index % 2 === 1;

  const handleDiscover = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const DURATION   = 1.044;       // durée totale du slide (secondes)
    const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
    const W = window.innerWidth;    // garantit la sortie hors écran

    // Directions : texte et image partent chacun du côté où ils se trouvent
    const textExit = isReversed ? -W : W;
    const imgExit  = isReversed ? W  : -W;

    // ── Phase 1 : slide simultané texte + image, ease-out ──────────────
    animate("[data-text]", { x: textExit }, { duration: DURATION, ease: EASE_OUT });
    animate("[data-img]",  { x: imgExit  }, { duration: DURATION, ease: EASE_OUT });

    // ── Phase 2 : fade commence à 40 % de la progression ───────────────
    setTimeout(() => {
      animate("[data-text]", { opacity: 0 }, { duration: DURATION * 0.62, ease: "easeIn" });
      animate("[data-img]",  { opacity: 0 }, { duration: DURATION * 0.62, ease: "easeIn" });
    }, DURATION * 0.40 * 1000);

    // ── Phase 3 : détail commence à monter à 75 % ───────────────────────
    setTimeout(() => {
      onOpen(product);
    }, DURATION * 0.75 * 1000);

    // Attendre la fin du slide puis reset invisible (overlay couvre tout)
    await new Promise<void>((r) => setTimeout(r, DURATION * 1000));
    animate("[data-text]", { x: 0, opacity: 1 }, { duration: 0 });
    animate("[data-img]",  { x: 0, opacity: 1 }, { duration: 0 });
    setIsAnimating(false);
  };

  return (
    <section
      ref={ref}
      style={{ contain: "layout style" }}
      className="relative h-screen w-full flex items-center justify-center px-6 md:px-12 overflow-hidden"
      aria-label={product.name}
    >
      <motion.div
        ref={scope}
        style={{ opacity, willChange: "opacity" }}
        className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        {/* Image principale */}
        <motion.div
          data-img
          style={{ scale, y: imgY, order: isReversed ? 2 : 1, willChange: "transform" }}
          className="relative aspect-[4/5] w-full max-w-[460px] mx-auto"
        >
          <img
            src={product.img}
            alt={product.name}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="w-full h-full object-contain mix-blend-multiply"
            style={{ filter: "drop-shadow(0 30px 40px rgba(60,40,20,0.22))" }}
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          data-text
          style={{ y: textY, order: isReversed ? 1 : 2, willChange: "transform" }}
          className="text-center md:text-left"
        >
          <span className="block text-[10px] tracking-luxury uppercase text-foreground/60 mb-5 text-sand-shadow">
            Pièce {String(index + 1).padStart(2, "0")} — {product.tagline}
          </span>
          <h3 className="font-serif-display text-4xl md:text-6xl text-foreground tracking-luxury uppercase text-sand-shadow leading-[1.05] mb-8">
            {product.name}
          </h3>
          <p className="font-serif-display italic text-lg md:text-xl text-foreground/80 max-w-md mx-auto md:mx-0 mb-10 text-sand-shadow leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-8">
            <span className="text-sm tracking-wide-soft text-foreground/80">{product.price}</span>
            <button
              onClick={handleDiscover}
              disabled={isAnimating}
              onMouseEnter={() => {
                product.detailImgs.forEach((src) => {
                  const img = new Image();
                  img.src = src;
                });
              }}
              className="inline-flex items-center text-[11px] tracking-luxury uppercase text-foreground border-b border-foreground/40 hover:border-accent hover:text-accent transition-colors pb-1 cursor-pointer disabled:cursor-default"
            >
              Découvrir
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function ProductGrid() {
  const [openProduct, setOpenProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="collection" className="relative">
        <div className="py-28 md:py-36 flex items-center justify-center px-6 md:px-12">
          <div className="text-center max-w-2xl">
            <span className="block text-[10px] tracking-luxury uppercase text-foreground/60 mb-6 text-sand-shadow">
              Collection — Printemps 2026
            </span>
            <h2
              id="collections"
              className="font-serif-display text-5xl md:text-7xl text-foreground tracking-luxury uppercase text-sand-shadow leading-[1.05]"
            >
              Pièces choisies
            </h2>
            <p className="mt-10 font-serif-display italic text-lg md:text-xl text-foreground/75 text-sand-shadow">
              Six pièces de la collection. Faites défiler pour les découvrir.
            </p>
          </div>
        </div>

        {products.map((p, i) => (
          <ProductSlide key={p.id} product={p} index={i} onOpen={setOpenProduct} />
        ))}
      </section>

      <AnimatePresence>
        {openProduct && (
          <ProductDetail
            product={openProduct}
            onClose={() => setOpenProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
