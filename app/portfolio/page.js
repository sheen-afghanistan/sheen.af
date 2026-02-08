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
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden py-20 relative">
      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-brand-accent/5 blur-[80px]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 rounded-full glass border border-brand-primary/30 text-brand-accent mb-6 font-mono text-sm">
                Our Work
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                {t("portfolio.title")}
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                    ? "bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/25"
                    : "glass text-gray-400 hover:bg-white/10 hover:text-white"
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
                  className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-white/5 hover:border-brand-primary/50"
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-brand-dark to-[#020617] flex items-center justify-center text-8xl relative overflow-hidden">
                      <Image
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        src={project.image}
                        alt={getLocalizedContent(project.title)}
                        width={1000}
                        height={1000}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-medium">View Project</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                        {getLocalizedContent(project.title)}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-4 line-clamp-2">{getLocalizedContent(project.description)}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary/5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t("portfolio.readyToStart")}
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Let's turn your vision into reality.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-lg shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all"
                >
                  {t("common.contactUs")}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
