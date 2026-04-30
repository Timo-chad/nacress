import { motion } from "framer-motion";

export function PoeticSection() {
  return (
    <section id="histoire" className="relative py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center reading-veil rounded-sm px-8 py-10 md:px-16 md:py-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="block text-[11px] tracking-luxury uppercase text-foreground/80 mb-10 font-normal text-sand-shadow"
          style={{ letterSpacing: "0.4em" }}
        >
          La Nacre & l'Océan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-serif-display text-2xl md:text-4xl leading-[1.5] text-foreground italic text-sand-shadow"
          style={{ fontWeight: 500 }}
        >
          «Là où la lumière effleure l'eau, naît la nacre.
          <br />
          Chaque bijou NACRESS est une étreinte —
          <br />
          un fragment d'écume, une promesse tenue par la mer.»
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 h-px w-12 bg-accent mx-auto origin-center"
          aria-hidden
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-sm md:text-base text-foreground/85 max-w-xl mx-auto leading-loose font-normal text-sand-shadow"
          style={{ letterSpacing: "0.06em" }}
        >
          Façonnés à la main dans nos ateliers et expédiés depuis le sud de la France, nos bijoux
          célèbrent la beauté brute des éléments. Or recyclé, perles cultivées,
          nacre d'eau de mer — chaque pièce est une ode au minimalisme côtier.
        </motion.p>
      </div>
    </section>
  );
}
