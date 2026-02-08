"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiCheck, FiCpu, FiGlobe, FiTrendingUp, FiSmartphone } from "react-icons/fi";
import Link from "next/link";
import "../lib/i18n";
import servicesData from "../data/services";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Get services from data file with current language
  const services = servicesData.map(service => ({
    id: service.id,
    title: service.title[i18n.language] || service.title.en,
    desc: service.shortDesc[i18n.language] || service.shortDesc.en,
    link: `/services/${service.slug}`,
    icon: service.slug.includes('web') ? FiGlobe :
      service.slug.includes('seo') ? FiTrendingUp :
        service.slug.includes('app') ? FiSmartphone : FiCpu
  }));

  const stats = [
    { number: "50+", label: t("stats.projectsCompleted") },
    { number: "20+", label: t("stats.happyClients") },
    { number: "5+", label: t("stats.teamMembers") },
    { number: "2+", label: t("stats.yearsExperience") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden selection:bg-brand-primary selection:text-white">

      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-brand-accent/5 blur-[80px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full glass border border-brand-primary/30 text-brand-accent mb-6 font-mono text-sm">
              ✨ {t("hero.subtitle") || "Digital Excellence Redefined"}
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                Digital Presence
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              We build premium websites and digital experiences that drive growth and elevate your brand identity.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-brand-accent transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                  {t("hero.cta")} <FiArrowRight />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-brand-primary/50">
                  {t("hero.viewWork")}
                </button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-gray-700 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-brand-gold mb-1">★★★★★</div>
                <div className="text-gray-400">Trusted by 50+ businesses</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D-style Visual */}
          <motion.div
            style={{ y: y2, x: mousePosition.x, y: mousePosition.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-brand-primary rounded-3xl opacity-20 blur-2xl transform rotate-6"></div>
              <div className="relative z-10 w-full h-full glass-card rounded-3xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="h-32 rounded-xl bg-white/5 animate-pulse"></div>
                  <div className="h-32 rounded-xl bg-white/5 animate-pulse delay-100"></div>
                  <div className="h-32 rounded-xl bg-white/5 animate-pulse delay-200"></div>
                  <div className="h-32 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-primary hover:scale-110 transition-transform cursor-pointer">85%</div>
                      <div className="text-xs text-brand-accent">Growth</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-1/4 p-4 glass rounded-xl border-l-4 border-brand-gold"
                >
                  <div className="text-xs text-gray-400">SEO Score</div>
                  <div className="text-xl font-bold text-white">98/100</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-8 bottom-1/4 p-4 glass rounded-xl border-l-4 border-brand-primary"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <FiCheck />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Project Status</div>
                      <div className="text-sm font-bold text-white">Completed</div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="text-brand-primary">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We offer a comprehensive suite of digital solutions to help your business thrive in the modern world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-[#0a0f25] border border-white/5 hover:border-brand-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-dark/30 flex items-center justify-center text-brand-primary mb-6 text-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <service.icon />
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <Link href={service.link} className="inline-flex items-center text-sm font-semibold text-white/50 group-hover:text-brand-primary transition-colors">
                    <span>Learn More</span>
                    <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counter */}
      <div className="py-20 border-y border-white/5 bg-white/2 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent mb-2 font-mono">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5"></div>
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-brand-primary/10 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Ready to <span className="text-brand-primary">Grow?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            Let&apos;s build something amazing together. Schedule a free consultation today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/book">
              <button className="px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full font-bold text-xl shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:scale-105 transition-all duration-300">
                {t("common.bookNow")}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
