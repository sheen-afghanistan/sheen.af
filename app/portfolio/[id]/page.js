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
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden py-20 relative">
      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation & Hero */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-brand-primary mb-8 transition-colors group font-medium"
              >
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </motion.button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block px-4 py-2 rounded-full glass border border-brand-primary/30 text-brand-primary mb-6 font-mono text-sm uppercase tracking-wider">
                {project.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                {getLocalizedContent(project.title)}
              </h1>

              <div className="flex flex-wrap items-center gap-8 text-gray-300 mb-12 text-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <FiUsers />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Client</span>
                    <span className="font-semibold">{project.client}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <FiCalendar />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Year</span>
                    <span className="font-semibold">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-white/5 rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-50 z-10"></div>
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
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 md:p-10 rounded-3xl border border-white/5"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-brand-primary rounded-full"></span>
                    Overview
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
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
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="w-2 h-8 bg-brand-primary rounded-full"></span>
                      Screenshots
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.images.map((screenshot, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="aspect-video bg-white/5 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-brand-primary/50 transition-all shadow-lg"
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
                  className="glass-card p-8 rounded-3xl border border-white/5"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-lg bg-brand-primary/10 text-brand-primary text-sm font-semibold border border-brand-primary/20"
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
                    className="glass-card p-8 rounded-3xl border border-white/5"
                  >
                    <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                          </span>
                          <span className="text-sm leading-relaxed">{getLocalizedContent(feature)}</span>
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
                    className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <FiExternalLink className="text-8xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                      Visit Website
                    </h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10 w-full block">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20"
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
                  className="glass-card p-8 rounded-3xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/5 to-transparent relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-primary/5"></div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                    Want Similar Results?
                  </h3>
                  <p className="text-gray-400 mb-8 relative z-10 text-sm">
                    Let's discuss your project and create something amazing together.
                  </p>
                  <Link href="/contact" className="relative z-10 w-full block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 rounded-xl border border-white/10 text-white hover:bg-white/10 font-bold flex items-center justify-center gap-2 transition-all"
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
    </div>
  );
}
