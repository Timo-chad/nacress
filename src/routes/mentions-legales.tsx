import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  component: MentionsLegales,
});

function MentionsLegales() {
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
          Mentions Légales
        </h1>
        <div className="h-px w-12 bg-foreground/20 mb-12" />

        <section className="space-y-10 text-sm font-light leading-relaxed text-foreground/80">
          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Éditeur du site
            </h2>
            <p>
              Le site nacress.fr est édité par :<br />
              <strong className="font-normal text-foreground">NACRESS</strong><br />
              Forme juridique : Micro-entreprise<br />
              Siège social : Montpellier, France<br />
              SIRET : [en cours d'immatriculation]<br />
              Email : yohanmichau@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Directeur de la publication
            </h2>
            <p>Le directeur de la publication est le gérant de NACRESS.</p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Hébergeur
            </h2>
            <p>
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a
                href="https://vercel.com"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images,
              photographies, vidéos, logos, design) sont la propriété exclusive
              de NACRESS ou de ses partenaires et sont protégés par le droit
              d'auteur. Toute reproduction, représentation, modification ou
              exploitation sans autorisation préalable est strictement
              interdite.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Données personnelles
            </h2>
            <p>
              NACRESS collecte uniquement les données strictement nécessaires
              au traitement des commandes (nom, adresse de livraison, email).
              Ces données ne sont pas cédées à des tiers. Conformément au
              Règlement Général sur la Protection des Données (RGPD — UE
              2016/679) et à la loi Informatique et Libertés, vous disposez
              d'un droit d'accès, de rectification et de suppression de vos
              données. Pour exercer ces droits : yohanmichau@gmail.com.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Cookies
            </h2>
            <p>
              Ce site n'utilise pas de cookies de traçage publicitaire. Des
              cookies techniques strictement nécessaires au bon fonctionnement
              du site peuvent être déposés.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Droit applicable
            </h2>
            <p>
              Le présent site est soumis au droit français. Tout litige
              relatif à son utilisation relève de la compétence exclusive des
              tribunaux compétents de Montpellier.
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
