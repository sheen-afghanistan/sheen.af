"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import projects from "../../data/portfolio";

export default function PortfolioPage() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("all");

  const getLocalizedContent = (content) => {
    if (!content) return "";
    if (typeof content === 'string') return content;
    return content[i18n.language] || content.en || "";
  };

  const categories = [
    { id: "all", label: t("portfolio.allProjects") },
    { id: "web", label: t("portfolio.webDev") },
    { id: "ecommerce", label: t("portfolio.ecommerce") },
    { id: "mobile", label: t("portfolio.mobileApps") },
    { id: "3d", label: t("portfolio.3dInteractive") },
    { id: "marketing", label: t("portfolio.marketing") },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--brand-dark)] to-black pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--brand-accent)]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              {t("portfolio.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              {t("portfolio.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === cat.id
                  ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                  : "glass text-white/80 hover:bg-white/10"
                  }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="aspect-video bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] flex items-center justify-center text-8xl">
                    <Image className="object-cover w-full h-full" src={project.image} alt={getLocalizedContent(project.title)} width={1000} height={1000} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors">
                      {getLocalizedContent(project.title)}
                    </h3>
                    <p className="text-white/70 mb-4">{getLocalizedContent(project.description)}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("portfolio.readyToStart")}
            </h2>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-white text-[var(--brand-dark)] font-bold text-lg shadow-2xl"
              >
                {t("common.contactUs")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
