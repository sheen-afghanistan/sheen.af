"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import servicesData from "../../data/services";

export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

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
                Our Expertise
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Our Services
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions designed to grow your business and establish a powerful online presence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass-card p-8 rounded-3xl hover:border-brand-primary/50 transition-all cursor-pointer group h-full flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                        {service.title[currentLang] || service.title.en}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.shortDesc[currentLang] || service.shortDesc.en}
                      </p>

                      {/* Features Preview */}
                      <ul className="space-y-3 mb-8">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                      <span className="text-brand-gold font-bold font-mono text-sm">
                        From {service.pricing.basic.price}
                      </span>
                      <motion.div
                        className="flex items-center gap-2 text-white/70 group-hover:text-brand-primary transition-colors font-semibold text-sm"
                      >
                        Learn More
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary/5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Book a free consultation and we'll help you find the perfect solution tailored to your goals.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-lg shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
