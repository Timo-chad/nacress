import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const Route = createFileRoute("/confirmation")({
  head: () => ({
    meta: [
      { title: "Commande confirmée — NACRESS" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: function ConfirmationPage() {
    const { clearCart } = useCart();

    useEffect(() => {
      clearCart();
    }, [clearCart]);

    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "oklch(0.78 0.11 220)" }}
        >
          <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
        >
          <h2 className="font-serif-display text-3xl md:text-4xl tracking-luxury uppercase text-foreground mb-3">
            Commande confirmée
          </h2>
          <p className="text-sm text-foreground/60 max-w-sm mx-auto">
            Merci pour votre commande. Vous recevrez un e-mail de confirmation
            Stripe dans quelques instants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-luxury uppercase text-foreground/60 hover:text-foreground transition-colors mt-2"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.25} />
            Retour à la boutique
          </Link>
        </motion.div>
      </div>
    );
  },
});
