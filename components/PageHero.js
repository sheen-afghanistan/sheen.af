"use client";

import { motion } from "framer-motion";

/* Masthead for inner routes. Left-aligned on a measure, not centred over the
   full width — centred headings with a centred lede under them is the layout
   every template ships. */
export default function PageHero({ eyebrow, title, subtitle, children, back }) {
  return (
    <section className="pt-28 sm:pt-32 pb-10">
      <div className="shell">
        {back}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}

          <h1 className="display-lg">{title}</h1>

          {subtitle && <p className="lede mt-5 max-w-2xl">{subtitle}</p>}

          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
