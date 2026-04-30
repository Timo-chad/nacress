import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductDetail } from "@/components/ProductDetail";
import { products, type Product } from "@/data/products";

export const Route = createFileRoute("/produit/$slug")({
  head: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    if (!p) return {};

    const productJsonLd = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          name: p.name,
          description: p.descriptionFull,
          image: `https://nacress.fr${p.img}`,
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: p.priceRaw,
            availability: "https://schema.org/InStock",
            url: `https://nacress.fr/produit/${p.slug}`,
          },
          brand: { "@type": "Brand", name: "NACRESS" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: "https://nacress.fr/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Collections",
              item: "https://nacress.fr/#collections",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: p.name,
              item: `https://nacress.fr/produit/${p.slug}`,
            },
          ],
        },
      ],
    });

    const metaDesc = `${p.name} — bijou nacre NACRESS. ${p.descriptionFull.slice(0, 120)} Livraison offerte en France.`;
    return {
      meta: [
        { title: `${p.name} — Bijou Nacre NACRESS | Coastal Luxury` },
        { name: "description", content: metaDesc },
        { name: "keywords",    content: `${p.name.toLowerCase()}, bijou nacre, bijoux côtiers, NACRESS, ${p.tagline.toLowerCase()}, perle, nacre` },
        { property: "og:title", content: `${p.name} — Bijou Nacre NACRESS` },
        { property: "og:description", content: metaDesc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `https://nacress.fr/produit/${p.slug}` },
      ],
      links: [
        { rel: "canonical", href: `https://nacress.fr/produit/${p.slug}` },
      ],
      scripts: [{ type: "application/ld+json", children: productJsonLd }],
    };
  },
  loader: ({ params }): Product => {
    const p = products.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  component: function ProductPage() {
    const product = Route.useLoaderData() as Product;
    return (
      <ProductDetail
        product={product}
        onClose={() => window.history.back()}
      />
    );
  },
});
