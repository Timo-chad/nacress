import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Minus, Plus, X, ShieldCheck, Lock, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type PayMethod = "card" | "paypal" | "apple" | "google" | "3x";

const PAY_METHODS: { id: PayMethod; label: string; sub?: string }[] = [
  { id: "card",   label: "Carte bancaire",   sub: "Visa · Mastercard · Amex" },
  { id: "paypal", label: "PayPal" },
  { id: "apple",  label: "Apple Pay" },
  { id: "google", label: "Google Pay" },
  { id: "3x",     label: "3× sans frais",    sub: "via Klarna" },
];

// ─── Icônes ─────────────────────────────────────────────────────────────────
function CardIcon() {
  return (
    <svg viewBox="0 0 38 24" className="w-8 h-5" fill="none">
      <rect width="38" height="24" rx="4" fill="#1A1F71"/>
      <rect x="1" y="7" width="36" height="4" fill="#F7B600"/>
      <rect x="6" y="15" width="8" height="2" rx="1" fill="white" opacity=".6"/>
    </svg>
  );
}
function PayPalIcon() {
  return (
    <svg viewBox="0 0 80 20" className="h-5 w-auto" fill="none">
      <text x="0" y="16" fontSize="14" fontWeight="700" fill="#003087">Pay</text>
      <text x="26" y="16" fontSize="14" fontWeight="700" fill="#009CDE">Pal</text>
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.4.74 3.18.8 1.22-.26 2.4-1 3.7-.84 1.57.2 2.74.96 3.5 2.38-3.22 1.87-2.47 5.97.48 7.28-.57 1.53-1.29 3.04-2.86 5.26zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
function KlarnaIcon() {
  return (
    <span className="text-[11px] font-bold tracking-wide" style={{ color: "#FFB3C7" }}>
      K
    </span>
  );
}

// ─── Page panier ─────────────────────────────────────────────────────────────
export function CartPage() {
  const { items, removeItem, updateQty, total, count } = useCart();
  const [method, setMethod] = useState<PayMethod>("card");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(({ product, quantity }) => ({
            name: product.name,
            priceRaw: product.priceRaw,
            quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur serveur");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
        <Link to="/" className="inline-flex items-center gap-2 text-[11px] tracking-luxury uppercase text-foreground/60 hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" strokeWidth={1.25} />
          Continuer mes achats
        </Link>
        <span className="hidden md:block font-serif-display text-xl tracking-luxury uppercase text-foreground">NACRESS</span>
        <span className="text-[11px] tracking-luxury uppercase text-foreground/60">
          {count} article{count > 1 ? "s" : ""}
        </span>
      </nav>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">

        {/* ── Colonne gauche : articles ─────────────────────────────────── */}
        <section>
          <h1 className="font-serif-display text-3xl md:text-4xl tracking-luxury uppercase text-foreground mb-10">
            Mon panier
          </h1>

          {items.length === 0 ? (
            <p className="text-foreground/50 text-sm italic">Votre panier est vide.</p>
          ) : (
            <ul className="flex flex-col divide-y divide-foreground/10">
              <AnimatePresence initial={false}>
                {items.map(({ product, quantity }) => (
                  <motion.li
                    key={product.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="flex items-center gap-5 py-6"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-20 h-24 object-contain mix-blend-multiply shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-1">{product.tagline}</p>
                      <p className="font-serif-display text-lg text-foreground leading-tight mb-3">{product.name}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQty(product.id, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-foreground/20 hover:border-foreground/50 transition-colors rounded-sm"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="text-sm w-4 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQty(product.id, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-foreground/20 hover:border-foreground/50 transition-colors rounded-sm"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <p className="font-serif-display text-lg text-foreground">
                        €{(product.priceRaw * quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-foreground/30 hover:text-foreground/70 transition-colors"
                        aria-label="Retirer"
                      >
                        <X className="w-4 h-4" strokeWidth={1.25} />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </section>

        {/* ── Colonne droite : récap + paiement ────────────────────────── */}
        {items.length > 0 && (
          <aside className="flex flex-col gap-6">
            {/* Récap */}
            <div className="border border-foreground/12 rounded-sm p-6 flex flex-col gap-3">
              <h2 className="text-[10px] tracking-luxury uppercase text-foreground/60 mb-2">Récapitulatif</h2>
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-sm text-foreground/80">
                  <span>{product.name} × {quantity}</span>
                  <span>€{(product.priceRaw * quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="h-px bg-foreground/10 my-1" />
              <div className="flex justify-between">
                <span className="text-[11px] tracking-luxury uppercase text-foreground/60">Livraison</span>
                <span className="text-sm text-foreground/80">Offerte</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[11px] tracking-luxury uppercase text-foreground">Total</span>
                <span className="font-serif-display text-xl text-foreground">€{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Méthodes de paiement */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[10px] tracking-luxury uppercase text-foreground/60">Mode de paiement</h2>

              <div className="grid grid-cols-5 gap-1.5">
                {PAY_METHODS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`flex items-center justify-center py-2.5 rounded-sm border text-[9px] tracking-wide uppercase transition-all ${
                      method === m.id
                        ? "border-foreground/60 bg-foreground/5"
                        : "border-foreground/15 hover:border-foreground/35"
                    }`}
                    title={m.label}
                  >
                    {m.id === "card"   && <CardIcon />}
                    {m.id === "paypal" && <PayPalIcon />}
                    {m.id === "apple"  && <AppleIcon />}
                    {m.id === "google" && <GoogleIcon />}
                    {m.id === "3x"     && <KlarnaIcon />}
                  </button>
                ))}
              </div>

              <p className="text-[10px] tracking-luxury uppercase text-foreground/60">
                {PAY_METHODS.find((m) => m.id === method)?.label}
                {PAY_METHODS.find((m) => m.id === method)?.sub && (
                  <span className="ml-2 normal-case text-foreground/40 tracking-normal">
                    · {PAY_METHODS.find((m) => m.id === method)?.sub}
                  </span>
                )}
              </p>

              {/* Notice précommande */}
              <div
                className="rounded-sm px-4 py-3.5 flex flex-col gap-1.5"
                style={{ backgroundColor: "oklch(0.94 0.018 88)", border: "1px solid oklch(0.86 0.018 80)" }}
              >
                <p className="text-[10px] tracking-luxury uppercase font-medium text-foreground/70">
                  Précommande — Prix réduit de 20%
                </p>
                <p className="text-[11px] text-foreground/60 leading-relaxed">
                  Chaque bijou NACRESS est façonné à la main. En précommandant, vous bénéficiez d'un tarif préférentiel en échange d'un délai de confection estimé à <strong className="text-foreground/80">1 à 2 mois</strong> avant expédition.
                </p>
              </div>

              <p className="text-[10px] text-foreground/50 leading-relaxed">
                Vous serez redirigé vers la page de paiement sécurisée Stripe.
              </p>

              {error && (
                <p className="text-[11px] text-red-500">{error}</p>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 mt-1 text-[11px] tracking-luxury uppercase font-medium transition-all hover:brightness-90 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "oklch(0.78 0.11 220)", color: "oklch(0.18 0.03 220)" }}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Lock className="w-3.5 h-3.5" strokeWidth={2} />
                )}
                {loading ? "Redirection…" : "Précommander — Payer en sécurité"}
              </button>

              <p className="flex items-center justify-center gap-1.5 text-[9px] text-foreground/35 tracking-wide mt-1">
                <ShieldCheck className="w-3 h-3" />
                Paiement 100% sécurisé · Stripe · SSL
              </p>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
