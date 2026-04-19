import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartToast() {
  const { lastAdded, clearLastAdded } = useCart();

  useEffect(() => {
    if (!lastAdded) return;
    const t = setTimeout(clearLastAdded, 4500); // +50% de durée d'affichage
    return () => clearTimeout(t);
  }, [lastAdded, clearLastAdded]);

  return (
    <AnimatePresence>
      {lastAdded && (
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{ y: 24, opacity: 0, transition: { duration: 0.45, ease: [0.4, 0, 1, 1] } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3.5 text-[11px] tracking-wide-soft shadow-lg rounded-sm"
          style={{
            backgroundColor: "oklch(0.94 0.018 88)",   // sable clair
            color:           "oklch(0.32 0.035 60)",   // brun foncé doux
            border:          "1px solid oklch(0.84 0.022 80)",
          }}
        >
          <span
            className="flex items-center justify-center w-4 h-4 rounded-full shrink-0"
            style={{ backgroundColor: "oklch(0.78 0.11 220)" }}
          >
            <Check className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
          </span>
          Votre article a bien été ajouté
        </motion.div>
      )}
    </AnimatePresence>
  );
}
