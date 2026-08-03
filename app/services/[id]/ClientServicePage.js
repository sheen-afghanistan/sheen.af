"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import servicesData from "../../../data/services";
import { use } from "react";
import PageHero from "../../../components/PageHero";
import SectionHead from "../../../components/SectionHead";

const EASE = [0.16, 1, 0.3, 1];

export default function ClientServicePage({ params }) {
    const { i18n } = useTranslation();
    const { id } = use(params);
    const serviceId = id || "web-design";
    const service = servicesData.find((s) => s.slug === serviceId) || servicesData[0];

    const currentLang = i18n.language || "en";

    return (
        <div className="page">

            <PageHero
                eyebrow="Service"
                title={service.title[currentLang] || service.title.en}
                subtitle={service.description[currentLang] || service.description.en}
                back={
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 mb-10 text-fluid-sm t-soft transition-colors group"
                    >
                        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1 flip-rtl" />
                        Back to Services
                    </Link>
                }
            />

            {/* ------------------------------------------------------- Included */}
            <section className="section relative border-t border-[var(--rule)] bg-[var(--paper-alt)]">
                <div className="shell">
                    <SectionHead title="What's Included" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: (index % 4) * 0.07, duration: 0.5, ease: EASE }}
                                className="card card-lift card-pad !p-5 !flex-row items-start gap-3"
                            >
                                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[var(--jade-wash)] border border-[var(--jade)] grid place-items-center">
                                    <FiCheck className="text-[0.65rem] text-[var(--jade-deep)]" />
                                </span>
                                <span className="text-fluid-sm t-muted leading-relaxed">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* -------------------------------------------------------- Pricing */}
            <section className="section relative border-t border-[var(--rule)]">
                <div className="shell">
                    <SectionHead
                        title="Pricing Plans"
                        subtitle="Choose the plan that fits your needs"
                    />

                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(service.pricing).map(([key, plan], index) => {
                            const featured = key === "professional";
                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ delay: index * 0.1, duration: 0.55, ease: EASE }}
                                    className={`card card-pad !p-8 relative ${featured ? "card-marked md:-mt-4" : "card-lift"}`}
                                >
                                    {featured && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[var(--jade-deep)] text-white font-mono text-[0.65rem] uppercase tracking-[0.14em] font-semibold whitespace-nowrap">
                                            Most Popular
                                        </span>
                                    )}

                                    <h3 className="text-fluid-lg font-bold">{plan.name}</h3>
                                    <div className="numeric font-display text-4xl font-extrabold t-jade mt-4 mb-7">
                                        {plan.price}
                                    </div>

                                    <hr className="rule mb-6" />

                                    <ul className="space-y-3">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-fluid-sm t-muted">
                                                <span className="mt-0.5 w-[1.1rem] h-[1.1rem] shrink-0 rounded-full bg-[var(--jade-wash)] grid place-items-center">
                                                    <FiCheck className="text-[0.6rem] text-[var(--jade)]" />
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/contact" className="mt-auto pt-8">
                                        <span className={`btn btn-block ${featured ? "btn-primary" : "btn-secondary"}`}>
                                            Get Started
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------ CTA */}
            <section className="section band-ink">
                <div className="shell-narrow text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: EASE }}
                    >
                        <h2 className="display-md">Ready to Get Started?</h2>
                        <p className="lede mt-5">Contact us for a free consultation.</p>
                        <Link href="/book" className="inline-block mt-9">
                            <span className="btn btn-inverse btn-lg">Book Now</span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
