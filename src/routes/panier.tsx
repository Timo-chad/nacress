import { createFileRoute } from "@tanstack/react-router";
import { CartPage } from "@/components/CartPage";

export const Route = createFileRoute("/panier")({
  head: () => ({
    meta: [
      { title: "Panier — NACRESS" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CartPage,
});
