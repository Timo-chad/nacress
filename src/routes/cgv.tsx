import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cgv")({
  component: CGV,
});

function CGV() {
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
          Conditions Générales de Vente
        </h1>
        <div className="h-px w-12 bg-foreground/20 mb-12" />

        <section className="space-y-10 text-sm font-light leading-relaxed text-foreground/80">
          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 1 — Identification du vendeur
            </h2>
            <p>
              NACRESS, micro-entreprise dont le siège est établi à Montpellier,
              France. Email : yohanmichau@gmail.com. SIRET : [en cours
              d'immatriculation]. Les présentes CGV s'appliquent à toute
              commande passée sur le site nacress.fr.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 2 — Produits
            </h2>
            <p>
              Les bijoux NACRESS sont des créations artisanales proposées en
              édition limitée. Les photographies sont contractuelles et
              fidèles aux produits. De légères variations de couleur peuvent
              exister selon la calibration de votre écran. NACRESS se réserve
              le droit de modifier son catalogue à tout moment. Chaque produit
              est accompagné d'une fiche détaillant sa composition matière.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 3 — Prix
            </h2>
            <p>
              Les prix sont indiqués en euros, toutes taxes comprises (TVA
              applicable selon le régime fiscal en vigueur). NACRESS bénéficie
              de la franchise en base de TVA (art. 293 B du CGI) tant que le
              seuil légal n'est pas atteint — dans ce cas, la mention "TVA non
              applicable" s'applique. Les prix peuvent être modifiés à tout
              moment ; seul le prix affiché au moment de la validation de la
              commande est contractuel. Les frais de livraison sont indiqués
              lors de la finalisation de commande.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 4 — Commande
            </h2>
            <p>
              La validation du paiement constitue l'acceptation définitive de
              la commande et des présentes CGV. Un email de confirmation est
              adressé à l'acheteur. NACRESS se réserve le droit d'annuler
              toute commande suspicieuse ou en cas de rupture de stock, avec
              remboursement intégral dans les meilleurs délais.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 5 — Paiement
            </h2>
            <p>
              Le paiement est exigible immédiatement à la commande. Les
              transactions sont sécurisées par notre prestataire de paiement.
              NACRESS ne conserve aucune donnée bancaire.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 6 — Livraison
            </h2>
            <p>
              Les commandes sont expédiées depuis Montpellier, France, dans un
              délai de 3 à 7 jours ouvrés après confirmation du paiement. En
              cas de retard significatif, l'acheteur en sera informé par email.
              NACRESS ne saurait être tenu responsable des délais imputables
              aux transporteurs ou à des événements de force majeure.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 7 — Droit de rétractation
            </h2>
            <p>
              Conformément à l'article L221-18 du Code de la consommation,
              l'acheteur dispose d'un délai de <strong className="font-normal text-foreground">14 jours</strong> à
              compter de la réception du colis pour exercer son droit de
              rétractation, sans justification ni pénalité. Le retour du
              produit est à la charge de l'acheteur. Le remboursement
              intervient dans les 14 jours suivant la réception du retour.
              Les articles doivent être retournés dans leur état et emballage
              d'origine.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 8 — Garanties légales
            </h2>
            <p>
              Les produits NACRESS bénéficient de la garantie légale de
              conformité (art. L217-4 à L217-14 du Code de la consommation)
              et de la garantie contre les vices cachés (art. 1641 à 1649 du
              Code civil). En cas de défaut constaté, contactez-nous à
              yohanmichau@gmail.com.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 9 — Responsabilité
            </h2>
            <p>
              NACRESS ne saurait être tenu responsable des dommages indirects
              liés à l'utilisation du site ou des produits. La responsabilité
              de NACRESS est limitée au montant de la commande concernée.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-3">
              Article 10 — Règlement des litiges
            </h2>
            <p>
              En cas de litige, une solution amiable sera recherchée en
              priorité. À défaut, vous pouvez recourir à la médiation de la
              consommation via la plateforme européenne de résolution des
              litiges en ligne :{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Les présentes CGV sont régies par le droit français.
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
