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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Comprehensive digital solutions to grow your business
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
                  className="glass p-8 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group h-full"
                >
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                    {service.title[currentLang] || service.title.en}
                  </h3>
                  <p className="text-white/70 mb-6">
                    {service.shortDesc[currentLang] || service.shortDesc.en}
                  </p>

                  {/* Features Preview */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-white/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="text-[var(--brand-gold)] font-semibold">
                      From {service.pricing.basic.price}
                    </span>
                    <motion.div
                      className="flex items-center gap-2 text-white group-hover:text-[var(--brand-gold)] transition-colors"
                    >
                      Learn More
                      <FiArrowRight />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
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
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Book a free consultation and we'll help you find the perfect solution
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-white text-[var(--brand-dark)] font-bold text-lg shadow-2xl"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
