import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import img1 from "@/assets/histoire/1.png";
import img2 from "@/assets/histoire/2.jpg";
import img3 from "@/assets/histoire/3.png";
import img4 from "@/assets/histoire/4.png";
import img5 from "@/assets/histoire/5.jpg";

// ─── Contenu ─────────────────────────────────────────────────────────────────
const BLOCKS: { text: string; img: string; alt: string }[] = [
  {
    img: img1,
    alt: "Nacress — coquillages en Polynésie",
    text: `J'avais un ami en Polynésie française qui adorait collectionner les coquillages. Ce n'était pas un simple hobby pour lui ; c'était sa façon de capturer le temps, d'immortaliser un instant précis où l'océan avait décidé de déposer un fragment de sa splendeur sur le sable chaud.`,
  },
  {
    img: img2,
    alt: "Nacress — la mer, sentiment de liberté",
    text: `J'ai longtemps cherché un moyen de matérialiser ce sentiment. Cette sensation unique, un mélange de liberté absolue et de connexion intime, que l'on ne ressent qu'en bord de mer.`,
  },
  {
    img: img3,
    alt: "Nacress — communauté de voyageurs",
    text: `Je ne suis pas polynésien, mais je fais partie de cette communauté de rêveurs, de voyageurs et d'amoureux de l'horizon — une communauté qui se comprend sans un mot, simplement en partageant un regard face à l'étendue bleue.`,
  },
  {
    img: img4,
    alt: "Nacress — naissance de la marque",
    text: `C'est ainsi que NACRESS est née. De la volonté de capturer l'esprit de l'océan, son éclat, sa fluidité et sa pureté, dans une ligne de joaillerie « Coastal Luxury » sophistiquée.\n\nPour que, où que vous soyez — dans le cœur battant d'une métropole ou sur une autre côte du monde — vous puissiez emporter une part de cette énergie avec vous.`,
  },
  {
    img: img5,
    alt: "Nacress — un bijou, un talisman",
    text: `Un bijou NACRESS n'est pas un simple accessoire ; c'est une ancre, un talisman. Il ne raconte pas seulement mon histoire, il commence à raconter la vôtre.\n\nNACRESS n'est pas une marque, c'est une immersion. C'est une invitation à redécouvrir la mer, à embrasser sa fluidité, et à porter, comme une évidence, l'éclat brut d'un luxe qui ne s'excuse de rien, mais qui se souvient de tout.`,
  },
];

// ─── Paramètres chaotiques fixes par index ──────────────────────────────────
// Rotation, taille et décalage vertical uniques pour chaque bloc — jamais identiques.
const CHAOS: {
  rotate: number;
  imgScale: string;     // classe Tailwind pour la largeur max de l'image
  textOffset: string;   // décalage vertical du bloc texte
  imgOffset: string;    // décalage vertical de l'image
}[] = [
  { rotate: -2.8,  imgScale: "max-w-[360px]", textOffset: "mt-0",    imgOffset: "mt-8"  },
  { rotate:  1.4,  imgScale: "max-w-[420px]", textOffset: "mt-14",   imgOffset: "mt-0"  },
  { rotate: -1.1,  imgScale: "max-w-[300px]", textOffset: "mt-4",    imgOffset: "mt-20" },
  { rotate:  3.2,  imgScale: "max-w-[390px]", textOffset: "mt-10",   imgOffset: "mt-2"  },
  { rotate: -2.0,  imgScale: "max-w-[340px]", textOffset: "mt-0",    imgOffset: "mt-12" },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Block({
  block,
  index,
}: {
  block: (typeof BLOCKS)[number];
  index: number;
}) {
  const chaos     = CHAOS[index % CHAOS.length];
  const imageLeft = index % 2 === 0; // alterne gauche / droite

  const paragraphs = block.text.split("\n\n").filter(Boolean);

  const imageEl = (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: chaos.rotate * 0.4 }}
      whileInView={{ opacity: 1, y: 0, rotate: chaos.rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: EASE_OUT }}
      className={`${chaos.imgScale} w-full mx-auto ${chaos.imgOffset} shrink-0`}
    >
      <img
        src={block.img}
        alt={block.alt}
        className="w-full h-auto object-cover shadow-[0_8px_32px_rgba(60,40,10,0.18)]"
        style={{ borderRadius: "2px" }}
      />
    </motion.div>
  );

  const textEl = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.08 }}
      className={`max-w-prose ${chaos.textOffset}`}
    >
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-[oklch(0.28_0.03_70)] leading-[1.85] ${
            i === 0
              ? "text-lg md:text-xl font-medium mb-5"
              : "text-base md:text-[17px] font-normal mb-4 opacity-90"
          }`}
        >
          {p}
        </p>
      ))}
    </motion.div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row items-start gap-10 md:gap-16 ${
        imageLeft ? "" : "md:flex-row-reverse"
      } px-6 md:px-0`}
    >
      {imageEl}
      {textEl}
    </div>
  );
}

// ─── Page principale ─────────────────────────────────────────────────────────
export function Histoire() {
  return (
    <div className="min-h-screen sand-texture">
      {/* Navbar légère */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-5 bg-[oklch(0.955_0.022_88)]/80 backdrop-blur-sm border-b border-[oklch(0.88_0.018_85)]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-luxury uppercase text-[oklch(0.28_0.03_70)]/70 hover:text-[oklch(0.28_0.03_70)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.25} />
          Retour
        </Link>
        <span className="font-serif-display text-xl tracking-luxury uppercase text-[oklch(0.28_0.03_70)]">
          NACRESS
        </span>
        <div className="w-20" aria-hidden />
      </nav>

      {/* En-tête */}
      <header className="max-w-2xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="block text-[10px] tracking-luxury uppercase text-[oklch(0.28_0.03_70)]/60 mb-5"
        >
          Maison NACRESS
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
          className="font-serif-display text-5xl md:text-7xl tracking-luxury uppercase text-[oklch(0.28_0.03_70)] leading-tight"
        >
          Notre Histoire
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.35 }}
          className="mt-8 h-px w-12 bg-[oklch(0.72_0.13_198)] mx-auto origin-left"
        />
      </header>

      {/* Contenu chaotique */}
      <main className="max-w-5xl mx-auto px-4 md:px-12 pb-32 flex flex-col gap-24 md:gap-32">
        {BLOCKS.map((block, i) => (
          <Block key={i} block={block} index={i} />
        ))}
      </main>
    </div>
  );
}
