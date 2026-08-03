"use client";

import { motion } from "framer-motion";

/* Left-aligned by default. Centred is opt-in, not the house style. */
export default function SectionHead({ eyebrow, title, subtitle, align = "start" }) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl mb-10 ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="display-md">{title}</h2>
      {subtitle && <p className="lede mt-3">{subtitle}</p>}
    </motion.div>
  );
}
