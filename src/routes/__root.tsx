import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

const JSON_LD_GLOBAL = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://nacress.com/#website",
      "url": "https://nacress.com/",
      "name": "NACRESS",
      "inLanguage": "fr-FR",
    },
    {
      "@type": "Organization",
      "@id": "https://nacress.com/#organization",
      "name": "NACRESS",
      "url": "https://nacress.com/",
      "logo": "https://nacress.com/icon-512.png",
      "description": "Bijoux inspirés de l'océan. Collection Printemps 2026.",
    },
  ],
});

export const Route = createRootRoute({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON_LD_GLOBAL }],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
    </>
  ),
  notFoundComponent: NotFoundComponent,
});
