import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/conformite")({
  component: Conformite,
});

function Conformite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="text-[10px] tracking-luxury uppercase text-foreground/50 hover:text-foreground/80 transition-colors mb-12 block"
        >
          ← Retour
        </Link>
        <h1 className="font-serif-display text-3xl tracking-luxury uppercase mb-2">
          Conformité & Composition
        </h1>
        <div className="h-px w-12 bg-foreground/20 mb-12" />

        <section className="space-y-10 text-sm font-light leading-relaxed text-foreground/80">
          <p className="text-foreground/60">
            Conformément à la réglementation européenne relative à la sécurité
            des produits et à la directive 2001/95/CE, NACRESS vous informe de
            la composition exacte de ses bijoux.
          </p>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Composition des bijoux
            </h2>
            <p className="mb-4">
              Nos bijoux sont fabriqués à partir des matériaux suivants :
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-foreground/40 shrink-0">—</span>
                <span>
                  <strong className="font-normal text-foreground">
                    Acier inoxydable (Stainless Steel)
                  </strong>{" "}
                  — Acier de qualité 316L, résistant à la corrosion et à
                  l'oxydation. Hypoallergénique. Ne contient pas de nickel en
                  surface libre.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-foreground/40 shrink-0">—</span>
                <span>
                  <strong className="font-normal text-foreground">
                    Plaqué or (Gold Plating)
                  </strong>{" "}
                  — Couche d'or appliquée sur acier inoxydable. L'épaisseur du
                  placage varie selon les pièces. Le placage est susceptible de
                  s'estomper progressivement selon les conditions d'utilisation
                  (contact prolongé avec l'eau, la transpiration ou les produits
                  cosmétiques).
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-foreground/40 shrink-0">—</span>
                <span>
                  <strong className="font-normal text-foreground">
                    Perles d'imitation (Imitation Pearl)
                  </strong>{" "}
                  — Perles synthétiques à base de résine ou de verre, recouvertes
                  d'un nacre artificiel. Ne contiennent pas de métaux lourds. Ne
                  constituent pas des perles naturelles ou de culture.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Avertissements & précautions
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <span className="text-foreground/40 shrink-0">—</span>
                <span>
                  En cas d'allergie cutanée connue aux métaux, consultez un
                  professionnel de santé avant le port de ces bijoux.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-foreground/40 shrink-0">—</span>
                <span>
                  Évitez tout contact prolongé avec l'eau de mer, la piscine
                  (chlore) et les produits cosmétiques pour préserver la qualité
                  du placage.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-foreground/40 shrink-0">—</span>
                <span>
                  Tenir hors de portée des enfants de moins de 3 ans (petites
                  pièces susceptibles d'être avalées).
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-foreground/40 shrink-0">—</span>
                <span>
                  Stocker dans un écrin ou pochette fermée à l'abri de l'humidité
                  et de la lumière directe.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Réglementation applicable
            </h2>
            <p>
              Les bijoux NACRESS sont conçus dans le respect des normes
              européennes applicables aux articles de bijouterie fantaisie,
              notamment le règlement REACH (CE n°1907/2006) relatif à
              l'enregistrement, l'évaluation, l'autorisation et la restriction
              des substances chimiques. La teneur en nickel des parties en
              contact direct avec la peau est conforme aux limites fixées par
              l'annexe XVII du règlement REACH.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Origine de fabrication
            </h2>
            <p>
              Les bijoux sont assemblés et sélectionnés par NACRESS depuis
              Montpellier, France. Les composants sont d'origine internationale.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Contact
            </h2>
            <p>
              Pour toute question relative à la composition ou à la conformité
              de nos produits : yohanmichau@gmail.com
            </p>
          </div>
        </section>

        <p className="mt-16 text-[10px] tracking-luxury uppercase text-foreground/30">
          Dernière mise à jour : avril 2026
        </p>
      </div>
    </div>
  );
}
