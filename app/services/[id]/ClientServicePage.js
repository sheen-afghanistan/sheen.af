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
        <div className="min-h-screen bg-[#020617] text-white overflow-hidden py-20 relative">
            {/* Abstract Background Shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/services">
                            <motion.button
                                whileHover={{ x: -5 }}
                                className="flex items-center gap-2 text-gray-400 hover:text-brand-primary mb-8 transition-colors group font-medium"
                            >
                                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                                Back to Services
                            </motion.button>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                                {service.title[currentLang] || service.title.en}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                {service.description[currentLang] || service.description.en}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 relative">
                    <div className="absolute inset-0 bg-brand-primary/5 skewed-bg pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">
                                What's Included
                            </h2>
                            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="glass-card p-8 rounded-3xl border border-white/5 hover:border-brand-primary/30 transition-all group flex flex-col items-center text-center"
                                >
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <FiCheck className="text-brand-primary text-xl" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{feature}</span>
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
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Pricing Plans
                            </h2>
                            <p className="text-gray-400 text-lg">
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
                                    className={`glass-card rounded-3xl p-8 relative border transition-all ${key === 'professional'
                                        ? "border-brand-primary shadow-2xl shadow-brand-primary/10 bg-brand-primary/5"
                                        : "border-white/5 hover:border-white/10"
                                        }`}
                                >
                                    {key === 'professional' && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1 bg-brand-primary rounded-full text-white text-sm font-bold shadow-lg shadow-brand-primary/20">
                                            Most Popular
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan.name}</h3>
                                    <div className="text-4xl font-bold text-white mb-8">
                                        {plan.price}
                                        <span className="text-sm font-normal text-gray-500 ml-1">/project</span>
                                    </div>

                                    <ul className="space-y-4 mb-10">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <FiCheck className="text-brand-primary text-xs" />
                                                </div>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/contact" className="block mt-auto">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full px-6 py-4 rounded-xl font-bold transition-all ${key === 'professional'
                                                ? "bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/20"
                                                : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
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
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-primary/10 pointer-events-none"></div>
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 rounded-3xl border border-brand-primary/30 shadow-2xl"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                                Contact us today for a free consultation and let's bring your vision to life.
                            </p>
                            <Link href="/book">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 rounded-xl bg-white text-[#020617] font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all"
                                >
                                    Book Consultation
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}
