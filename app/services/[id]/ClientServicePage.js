"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import servicesData from "../../../data/services";
import { use } from "react";

export default function ClientServicePage({ params }) {
    const { t, i18n } = useTranslation();
    const { id } = use(params);
    const serviceId = id || "web-design";
    // Find the service from data
    const service = servicesData.find(s => s.slug === serviceId) || servicesData[0];

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
                    <Link href="/services">
                        <motion.button
                            whileHover={{ x: -5 }}
                            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
                        >
                            <FiArrowLeft />
                            Back to Services
                        </motion.button>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
                            {service.title[currentLang] || service.title.en}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                            {service.description[currentLang] || service.description.en}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[var(--brand-primary)]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            What's Included
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-6 rounded-2xl flex items-start gap-3"
                            >
                                <div className="w-6 h-6 rounded-full bg-[var(--brand-gold)] flex items-center justify-center flex-shrink-0 mt-1">
                                    <FiCheck className="text-white text-sm" />
                                </div>
                                <span className="text-white/90">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Pricing Plans
                        </h2>
                        <p className="text-white/70">
                            Choose the plan that fits your needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {Object.entries(service.pricing).map(([key, plan], index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`glass rounded-2xl p-8 relative ${key === 'professional' ? "border-2 border-[var(--brand-gold)]" : ""
                                    }`}
                            >
                                {key === 'professional' && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] rounded-full text-white text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-gradient-gold mb-6">
                                    {plan.price}
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-white/80">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <FiCheck className="text-green-400 text-sm" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full px-6 py-4 rounded-full font-semibold transition-all ${key === 'professional'
                                            ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                                            : "glass text-white hover:bg-white/10"
                                            }`}
                                    >
                                        Get Started
                                    </motion.button>
                                </Link>
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
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Contact us for a free consultation
                        </p>
                        <Link href="/book">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 rounded-full bg-white text-[var(--brand-dark)] font-bold text-lg shadow-2xl"
                            >
                                Book Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
