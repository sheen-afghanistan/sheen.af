"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import projects from "../../data/portfolio";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1];

// Translation keys for categories that have one. Anything else falls back to a
// prettified version of the raw category, so a new project type still gets a
// working tab instead of being silently unreachable.
const CATEGORY_LABEL_KEYS = {
  web: "portfolio.webDev",
  ecommerce: "portfolio.ecommerce",
  mobile: "portfolio.mobileApps",
  "3d": "portfolio.3dInteractive",
  marketing: "portfolio.marketing",
};

const prettify = (id) => id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ");

export default function PortfolioPage() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("all");

  const getLocalizedContent = (content) => {
    if (!content) return "";
    if (typeof content === "string") return content;
    return content[i18n.language] || content.en || "";
  };

  // Built from the categories the projects actually use — a hardcoded list
  // drifts out of sync with the data and leaves tabs that match nothing.
  const categories = useMemo(() => {
    const present = [...new Set(projects.map((p) => p.category).filter(Boolean))];
    return [
      { id: "all", label: t("portfolio.allProjects") },
      ...present.map((id) => ({
        id,
        label: CATEGORY_LABEL_KEYS[id] ? t(CATEGORY_LABEL_KEYS[id]) : prettify(id),
      })),
    ];
  }, [t]);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="page">

      <PageHero
        eyebrow={t("nav.portfolio")}
        title={t("portfolio.title")}
        subtitle={t("portfolio.subtitle")}
      />

      {/* -------------------------------------------------------- Filter bar */}
      <section className="pb-10">
        <div className="shell">
          <div
            role="tablist"
            aria-label={t("portfolio.title")}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                onClick={() => setFilter(cat.id)}
                className={`chip ${filter === cat.id ? "chip-active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Projects */}
      <section className="pb-24">
        <div className="shell">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: (index % 3) * 0.06, duration: 0.5, ease: EASE }}
                  className="card card-lift overflow-hidden group"
                >
                  <Link href={`/portfolio/${project.slug}`} className="flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--ink)]">
                      <Image
                        src={project.image}
                        alt={getLocalizedContent(project.title)}
                        width={1000}
                        height={625}
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-30"
                      />
                      <span className="absolute top-3 end-3 tag !bg-[var(--ink)] !text-[var(--paper)] !border-transparent">
                        {project.category}
                      </span>
                    </div>

                    <div className="card-pad !pt-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="text-fluid-lg font-bold transition-colors duration-300 group-hover:text-[var(--jade-deep)]">
                          {getLocalizedContent(project.title)}
                        </h2>
                        <FiArrowUpRight className="mt-1 shrink-0 t-soft transition-all duration-300 group-hover:text-[var(--jade-deep)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flip-rtl" />
                      </div>

                      <p className="t-muted text-fluid-sm mt-3 line-clamp-3">
                        {getLocalizedContent(project.description)}
                      </p>

                      <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag, idx) => (
                          <span key={idx} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="card card-pad !py-20 text-center">
              <p className="lede">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="section band-ink">
        <div className="shell-narrow text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="display-md">{t("portfolio.readyToStart")}</h2>
            <Link href="/contact" className="inline-block mt-9">
              <span className="btn btn-inverse btn-lg">{t("common.contactUs")}</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
