import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Mail } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function NewsletterModal({ open, onClose }: Props) {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setEmail("");
      }, 2400);
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[201] flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-[70vw] max-w-md rounded-sm shadow-2xl"
              style={{
                backgroundColor: "oklch(0.96 0.012 88)",
                border: "1px solid oklch(0.86 0.018 80)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-foreground/10">
                <div>
                  <p className="text-[9px] tracking-luxury uppercase text-foreground/50 mb-1">NACRESS</p>
                  <h2 className="font-serif-display text-2xl tracking-luxury uppercase text-foreground">
                    Newsletter
                  </h2>
                </div>
                <button onClick={onClose} className="text-foreground/40 hover:text-foreground transition-colors p-1">
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              <div className="px-8 py-7">
                {status === "sent" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4 text-center py-4"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "oklch(0.78 0.11 220)" }}
                    >
                      <Check className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <p className="font-serif-display text-xl text-foreground">Bienvenue</p>
                    <p className="text-sm text-foreground/55 max-w-xs">
                      Vous recevrez en avant-première nos nouvelles collections et éditions limitées.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-foreground/40 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <p className="text-sm text-foreground/65 font-light leading-relaxed">
                        Recevez en avant-première nos nouvelles collections, éditions limitées et offres exclusives.
                      </p>
                    </div>

                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 bg-transparent border border-foreground/20 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50 rounded-sm transition-colors"
                    />

                    {status === "error" && (
                      <p className="text-[11px] text-red-500">Une erreur est survenue, veuillez réessayer.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex items-center justify-center gap-2 py-3.5 text-[11px] tracking-luxury uppercase font-medium rounded-sm transition-all hover:brightness-90 disabled:opacity-60"
                      style={{ backgroundColor: "oklch(0.78 0.11 220)", color: "oklch(0.18 0.03 220)" }}
                    >
                      {status === "sending" ? "Inscription…" : "S'inscrire"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
