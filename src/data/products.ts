import p1 from "@/assets/catalogue 2026/collier collection printemps.jpg";
import p2 from "@/assets/catalogue 2026/bague collection printemps.jpg";
import p3 from "@/assets/catalogue 2026/boucle d'oreille collection printemps.jpg";
import p4 from "@/assets/catalogue 2026/bracellet collection primtemps (1).jpg";
import p5 from "@/assets/catalogue 2026/bracellet collection primtemps (2).jpg";
import p6 from "@/assets/catalogue 2026/collier de cheville collection primtemps.jpg";

import d1a from "@/assets/post découvrir button/1.png";
import d1b from "@/assets/post découvrir button/2.png";
import d1c from "@/assets/post découvrir button/3.png";
import d2a from "@/assets/post découvrir button/4.png";
import d2b from "@/assets/post découvrir button/5.png";
import d2c from "@/assets/post découvrir button/6.png";
import d3a from "@/assets/post découvrir button/7.png";
import d3b from "@/assets/post découvrir button/8.png";
import d3c from "@/assets/post découvrir button/9.png";
import d4a from "@/assets/post découvrir button/10.png";
import d4b from "@/assets/post découvrir button/11.png";
import d4c from "@/assets/post découvrir button/12.png";
import d5a from "@/assets/post découvrir button/13.png";
import d5b from "@/assets/post découvrir button/14.png";
import d5c from "@/assets/post découvrir button/15.png";
import d6a from "@/assets/post découvrir button/16.png";
import d6b from "@/assets/post découvrir button/17.png";
import d6c from "@/assets/post découvrir button/18.png";

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  priceRaw: number;
  priceOriginal: string;
  priceOriginalRaw: number;
  tagline: string;
  description: string;
  descriptionFull: string;
  img: string;
  detailImgs: [string, string, string];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "collier-perle-solitaire",
    name: "Collier Perle Solitaire",
    price: "€76",
    priceRaw: 76,
    priceOriginal: "€95",
    priceOriginalRaw: 95,
    tagline: "Pièce essentielle",
    description: "Chaîne en acier inoxydable plaqué or, ornée d'une unique perle de culture d'eau douce.",
    descriptionFull:
      "Une seule perle, tout un équilibre. Suspendue sur une fine chaîne plaquée or 18 carats en acier inoxydable anti-ternissement, cette perle de culture d'eau douce cultivée de manière responsable capte la lumière avec une douceur rare. Longueur réglable 40–45 cm.",
    img: p1,
    detailImgs: [d1a, d1b, d1c],
  },
  {
    id: 2,
    slug: "bague-onde-nacree",
    name: "Bague Onde Nacrée",
    price: "€54",
    priceRaw: 54,
    priceOriginal: "€67",
    priceOriginalRaw: 67,
    tagline: "Volume sculpté",
    description: "Anneau ouvert ajustable en laiton plaqué or, rehaussé d'émail blanc nacré aux reflets opalins.",
    descriptionFull:
      "La mer figée en un anneau. Ce modèle ouvert en laiton plaqué or 18 carats présente une surface travaillée en vague, recouverte d'un émail blanc nacré aux reflets changeants selon la lumière. Taille unique, ajustable.",
    img: p2,
    detailImgs: [d2a, d2b, d2c],
  },
  {
    id: 3,
    slug: "creoles-perle-eau",
    name: "Créoles Perle d'Eau",
    price: "€44",
    priceRaw: 44,
    priceOriginal: "€55",
    priceOriginalRaw: 55,
    tagline: "Suspension délicate",
    description: "Petites créoles en acier inoxydable plaqué or, prolongées d'une perle de culture en pendentif.",
    descriptionFull:
      "La légèreté d'une goutte d'eau. Ces créoles minimalistes en acier inoxydable plaqué or portent chacune en pendentif une perle de culture d'eau douce. Le mouvement naturel de la perle au fil de la journée crée un effet vivant, presque organique. Diamètre créole 14 mm.",
    img: p3,
    detailImgs: [d3a, d3b, d3c],
  },
  {
    id: 4,
    slug: "bracelet-perle-unique",
    name: "Bracelet Perle Unique",
    price: "€60",
    priceRaw: 60,
    priceOriginal: "€75",
    priceOriginalRaw: 75,
    tagline: "Trait de lumière",
    description: "Fine chaîne plaquée or, perle de culture centrale et breloque en zircon cubique.",
    descriptionFull:
      "Un bracelet qui n'en dit pas trop, mais dit tout. La fine chaîne forçat plaquée or s'orne en son centre d'une perle de culture et d'une discrète breloque en zircon cubique. Fermoir lobster doré. Longueur 16 + 3 cm d'extension.",
    img: p4,
    detailImgs: [d4a, d4b, d4c],
  },
  {
    id: 5,
    slug: "bracelet-constellation",
    name: "Bracelet Constellation",
    price: "€64",
    priceRaw: 64,
    priceOriginal: "€80",
    priceOriginalRaw: 80,
    tagline: "Sept perles, sept reflets",
    description: "Chaîne maille forçat en acier inoxydable plaqué or, ponctuée de sept perles d'imitation lumineuses.",
    descriptionFull:
      "Sept perles comme sept îles à l'horizon. Régulièrement espacées sur une chaîne maille forçat en acier inoxydable plaqué or, ces perles d'imitation nacrées captent et redistribuent la lumière à chaque mouvement. Longueur 17 + 3 cm.",
    img: p5,
    detailImgs: [d5a, d5b, d5c],
  },
  {
    id: 6,
    slug: "chaine-cheville-rivage",
    name: "Chaîne de Cheville Rivage",
    price: "€56",
    priceRaw: 56,
    priceOriginal: "€70",
    priceOriginalRaw: 70,
    tagline: "Souvenir de plage",
    description: "Chaîne de cheville plaquée or, perles d'imitation, breloques coquillage, étoile de mer et nacre.",
    descriptionFull:
      "Portez la plage avec vous, partout. Cette chaîne de cheville légère accumule avec grâce trois breloques emblématiques — un coquillage, une étoile de mer et un disque de nacre — reliées par des perles d'imitation sur une chaîne plaquée or. Longueur 22 + 3 cm.",
    img: p6,
    detailImgs: [d6a, d6b, d6c],
  },
];
