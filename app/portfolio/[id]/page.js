"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiCalendar, FiUsers, FiArrowRight } from "react-icons/fi";
import projects from "../../../data/portfolio";
import { use } from "react";

const EASE = [0.16, 1, 0.3, 1];

export default function PortfolioDetailPage({ params }) {
  const { i18n } = useTranslation();
  const { id } = use(params);
  const projectSlug = id;

  const getLocalizedContent = (content) => {
    if (!content) return "";
    if (typeof content === "string") return content;
    return content[i18n.language] || content.en || "";
  };

  const project =
    projects.find((p) => p.slug === projectSlug || p.id === projectSlug) || projects[0];

  const title = getLocalizedContent(project.title);

  return (
    <div className="page">

      {/* ---------------------------------------------------------- Masthead */}
      <section className="relative pt-28 pb-12 sm:pt-32">
        <div className="shell relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 mb-10 text-fluid-sm t-soft transition-colors group"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1 flip-rtl" />
            Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-3xl"
          >
            <span className="eyebrow mb-5">{project.category}</span>
            <h1 className="display-lg">{title}</h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-fluid-sm t-soft">
              <span className="flex items-center gap-2">
                <FiUsers className="text-[var(--jade-deep)]" />
                {project.client}
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar className="text-[var(--jade-deep)]" />
                {project.year}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="mt-12 relative aspect-[16/9] rounded-[var(--r-lg)] overflow-hidden border border-[var(--rule)] bg-[var(--ink)]"
          >
            <Image
              src={project.image}
              alt={title}
              width={1600}
              height={900}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Details */}
      <section className="section-tight pb-24 relative">
        <div className="shell">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="card card-pad !p-8"
              >
                <span className="eyebrow mb-4">Overview</span>
                <p className="text-fluid-lg t-muted leading-relaxed">
                  {getLocalizedContent(project.description)}
                </p>
              </motion.div>

              {project.images && project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <span className="eyebrow mb-5">Screenshots</span>
                  <div className="grid sm:grid-cols-2 gap-4 mt-2">
                    {project.images.map((screenshot, index) => (
                      <div
                        key={index}
                        className="group relative aspect-video rounded-[var(--r-lg)] overflow-hidden border border-[var(--rule)] bg-[var(--ink)]"
                      >
                        <Image
                          src={screenshot}
                          alt={`${title} — screenshot ${index + 1}`}
                          width={900}
                          height={506}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE }}
                className="card card-pad !p-6"
              >
                <h2 className="data uppercase tracking-[0.18em] t-soft mb-4">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tech, index) => (
                    <span key={index} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {project.features && project.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
                  className="card card-pad !p-6"
                >
                  <h2 className="data uppercase tracking-[0.18em] t-soft mb-4">
                    Key Features
                  </h2>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-fluid-sm t-muted"
                      >
                        <span className="mt-[0.5rem] w-1 h-1 rounded-full bg-[var(--jade-deep)] shrink-0" />
                        {getLocalizedContent(feature)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {project.link && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <span className="btn btn-primary btn-block">
                      Visit Live Site
                      <FiExternalLink />
                    </span>
                  </a>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                className="card card-marked card-pad !p-6"
              >
                <h2 className="text-fluid-lg font-bold">Want Similar Results?</h2>
                <p className="t-muted text-fluid-sm mt-2.5">
                  Let&apos;s discuss your project and create something great together.
                </p>
                <Link href="/contact" className="mt-6">
                  <span className="btn btn-secondary btn-block">
                    Start Your Project
                    <FiArrowRight className="flip-rtl" />
                  </span>
                </Link>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
