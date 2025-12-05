"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiCalendar, FiUsers, FiArrowRight } from "react-icons/fi";
import projects from "../../../data/portfolio";
import { use } from "react";

export default function PortfolioDetailPage({ params }) {
  const { i18n } = useTranslation();
  const { id } = use(params);
  const projectSlug = id; // URL param

  const getLocalizedContent = (content) => {
    if (!content) return "";
    if (typeof content === 'string') return content;
    return content[i18n.language] || content.en || "";
  };

  // Find project by slug (the URL param 'id' is actually the slug)
  const project = projects.find(p => p.slug === projectSlug || p.id === projectSlug) || projects[0];

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
          <Link href="/portfolio">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
            >
              <FiArrowLeft />
              Back to Portfolio
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-4 py-2 rounded-full glass text-[var(--brand-gold)] mb-6">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {getLocalizedContent(project.title)}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/70 mb-8">
              <div className="flex items-center gap-2">
                <FiUsers />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{project.year}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] rounded-2xl overflow-hidden mb-12">
              <img
                src={project.image}
                alt={getLocalizedContent(project.title)}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {getLocalizedContent(project.description)}
                </p>
              </motion.div>

              {/* Screenshots */}
              {project.images && project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Screenshots</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-video bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] rounded-2xl overflow-hidden cursor-pointer"
                      >
                        <img
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-white/80 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)] mt-2 flex-shrink-0" />
                        {getLocalizedContent(feature)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Visit Link */}
              {project.link && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Visit Website
                  </h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold flex items-center justify-center gap-2"
                    >
                      Visit Live Site
                      <FiExternalLink />
                    </motion.button>
                  </a>
                </motion.div>
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Want Similar Results?
                </h3>
                <p className="text-white/70 mb-4">
                  Let's discuss your project and create something amazing together.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 rounded-full glass text-white hover:bg-white/10 font-semibold flex items-center justify-center gap-2"
                  >
                    Start Your Project
                    <FiArrowRight />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
