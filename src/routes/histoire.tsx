import { createFileRoute, Link } from "@tanstack/react-router";
import { Histoire } from "@/components/Histoire";

export const Route = createFileRoute("/histoire")({
  head: () => ({
    meta: [
      { title: "Notre Histoire — NACRESS" },
      {
        name: "description",
        content:
          "L'histoire de NACRESS, née au bord de l'océan. Découvrez l'inspiration derrière nos bijoux côtiers.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nacress.fr/histoire" }],
  }),
  component: Histoire,
});
