import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        setScrolled(window.scrollY > 60);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled ? "bg-background/40 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif-display text-xl md:text-2xl tracking-luxury uppercase text-foreground">
          NACRESS
        </a>

        <ul className="hidden md:flex items-center gap-12 text-[11px] tracking-luxury uppercase text-foreground/85">
          <li>
            <a href="#collections" className="hover:text-accent transition-colors">Collections</a>
          </li>
          <li>
            <Link to="/histoire" className="hover:text-accent transition-colors">Notre Histoire</Link>
          </li>
        </ul>

        <Link
          to="/panier"
          aria-label={`Panier — ${count} article${count > 1 ? "s" : ""}`}
          className="relative p-2 text-foreground hover:text-accent transition-colors"
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={1.25} />

          {/* Badge vert — apparaît uniquement quand le panier n'est pas vide */}
          <AnimatePresence>
            {count > 0 && (
              <motion.span
                key="badge"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{   scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 22 }}
                className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-semibold px-0.5"
                style={{ backgroundColor: "oklch(0.78 0.11 220)", color: "oklch(0.18 0.03 220)" }}
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </nav>
    </header>
  );
}
