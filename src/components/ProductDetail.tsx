import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
  onClose: () => void;
}

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProductDetail({ product, onClose }: Props) {
  const { addItem } = useCart();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      // Monte depuis le bas, accélération dégressive identique au slide
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0,      opacity: 1 }}
      exit={{   y: "100%", opacity: 0 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      style={{ willChange: "transform" }}
      className="fixed inset-0 z-50 bg-background overflow-y-auto"
    >
      {/* Bouton fermer */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.3 }}
        onClick={onClose}
        className="sticky top-6 ml-auto mr-6 flex p-2 text-foreground/50 hover:text-foreground transition-colors"
        aria-label="Fermer"
      >
        <X className="w-5 h-5" strokeWidth={1.25} />
      </motion.button>

      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 pb-20 flex flex-col gap-12">

        {/* Trois photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55, ease: EASE_OUT }}
          className="grid grid-cols-3 gap-3 md:gap-5"
        >
          {product.detailImgs.map((src, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <img
                src={src}
                alt={`${product.name} — vue ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Infos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55, ease: EASE_OUT }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-8"
        >
          <div className="max-w-xl">
            <span className="block text-[10px] tracking-luxury uppercase text-foreground/60 mb-4">
              {product.tagline}
            </span>
            <h2 className="font-serif-display text-3xl md:text-5xl text-foreground tracking-luxury uppercase leading-tight mb-6">
              {product.name}
            </h2>
            <p className="font-serif-display italic text-base md:text-lg text-foreground/75 leading-relaxed">
              {product.descriptionFull}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
            <span className="font-serif-display text-3xl text-foreground">
              {product.price}
            </span>
            <button
              onClick={() => addItem(product)}
              className="inline-flex items-center gap-3 px-8 py-3.5 text-[11px] tracking-luxury uppercase font-medium rounded-sm transition-all duration-300 hover:brightness-90"
              style={{
                backgroundColor: "oklch(0.78 0.11 220)",
                color: "oklch(0.18 0.03 220)",
              }}
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              Ajouter au panier
            </button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
