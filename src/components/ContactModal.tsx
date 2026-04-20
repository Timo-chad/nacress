import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: Props) {
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setEmail("");
        setMessage("");
      }, 2200);
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[201] flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-[70vw] max-w-lg rounded-sm shadow-2xl flex flex-col"
              style={{
                height: "60vh",
                minHeight: "360px",
                backgroundColor: "oklch(0.96 0.012 88)",
                border: "1px solid oklch(0.86 0.018 80)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-foreground/10">
                <div>
                  <p className="text-[9px] tracking-luxury uppercase text-foreground/50 mb-1">
                    NACRESS
                  </p>
                  <h2 className="font-serif-display text-2xl tracking-luxury uppercase text-foreground">
                    Nous écrire
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-foreground/40 hover:text-foreground transition-colors p-1"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-8 py-6">
                {status === "sent" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center gap-4 text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "oklch(0.78 0.11 220)" }}
                    >
                      <Check className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <p className="font-serif-display text-xl text-foreground">Message envoyé</p>
                    <p className="text-sm text-foreground/55">Nous vous répondrons dans les plus brefs délais.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="h-full flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] tracking-luxury uppercase text-foreground/55">
                        Votre adresse e-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vous@exemple.com"
                        className="w-full px-4 py-3 bg-transparent border border-foreground/20 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50 rounded-sm transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[9px] tracking-luxury uppercase text-foreground/55">
                        Votre message
                      </label>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Bonjour, je souhaite…"
                        className="w-full flex-1 min-h-[100px] px-4 py-3 bg-transparent border border-foreground/20 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50 rounded-sm transition-colors resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-[11px] text-red-500">Une erreur est survenue, veuillez réessayer.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex items-center justify-center gap-2 py-3.5 text-[11px] tracking-luxury uppercase font-medium rounded-sm transition-all hover:brightness-90 disabled:opacity-60"
                      style={{ backgroundColor: "oklch(0.78 0.11 220)", color: "oklch(0.18 0.03 220)" }}
                    >
                      <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
                      {status === "sending" ? "Envoi…" : "Envoyer"}
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
