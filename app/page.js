"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Link from "next/link";
import "../lib/i18n";
import servicesData from "../data/services";

export default function HomePage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Initialize i18n on mount
  }, []);

  // Get services from data file with current language
  const services = servicesData.map(service => ({
    id: service.id,
    title: service.title[i18n.language] || service.title.en,
    desc: service.shortDesc[i18n.language] || service.shortDesc.en,
    link: `/services/${service.slug}`
  }));

  const stats = [
    { number: "50+", label: t("stats.projectsCompleted") },
    { number: "20+", label: t("stats.happyClients") },
    { number: "5+", label: t("stats.teamMembers") },
    { number: "2+", label: t("stats.yearsExperience") },
  ];

  const testimonials = [
    {
      name: "Unknown",
      position: t("testimonials.position1"),
      text: t("testimonials.testimonial1"),
      avatar: "/client-ahmad.png",
    },
    {
      name: "Unknown",
      position: t("testimonials.position2"),
      text: t("testimonials.testimonial2"),
      avatar: "/client-sara.png",
    },
    {
      name: "Unknown",
      position: t("testimonials.position3"),
      text: t("testimonials.testimonial3"),
      avatar: "/client-hamid.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--brand-dark)] to-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--brand-accent)]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--brand-gold)]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold text-lg shadow-2xl hover:shadow-[var(--brand-gold)]/50 transition-all flex items-center justify-center gap-2"
                >
                  {t("hero.cta")}
                  <FiArrowRight />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  {t("hero.viewWork")}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--brand-primary)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-white/70">{t("services.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.desc}</p>
                <Link href={service.link}>
                  <motion.div
                    className="mt-4 text-[var(--brand-gold)] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {t("common.learnMore")}
                    <FiArrowRight />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t("whyChoose.title")}
              </h2>
              <div className="space-y-4">
                {[
                  t("whyChoose.feature1"),
                  t("whyChoose.feature2"),
                  t("whyChoose.feature3"),
                  t("whyChoose.feature4"),
                  t("whyChoose.feature5"),
                  t("whyChoose.feature6"),
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--brand-gold)] flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {t("whyChoose.ctaTitle")}
              </h3>
              <p className="text-white/70 mb-6">
                {t("whyChoose.ctaDesc")}
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold shadow-xl"
                >
                  {t("common.contactUs")}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("testimonials.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto border-2 border-[var(--brand-gold)]">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white/80 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t("cta.subtitle")}
            </p>
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-white text-[var(--brand-dark)] font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all"
              >
                {t("common.bookNow")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
