"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";

export default function PackagesPage() {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState("monthly");

  const packages = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: "$299",
      yearlyPrice: "$2,990",
      features: [
        "5-Page Website",
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "1 Month Support",
      ],
      notIncluded: ["E-Commerce", "Custom Features", "API Integration"],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: "$599",
      yearlyPrice: "$5,990",
      features: [
        "10-Page Website",
        "Advanced Design",
        "SEO Optimization",
        "Blog System",
        "3 Months Support",
        "Google Analytics",
        "Social Media Integration",
      ],
      notIncluded: ["E-Commerce", "Custom API"],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Complete solution for large businesses",
      monthlyPrice: "$1,299",
      yearlyPrice: "$12,990",
      features: [
        "Unlimited Pages",
        "Premium Design",
        "Advanced SEO",
        "E-Commerce Ready",
        "6 Months Support",
        "Custom Features",
        "API Integration",
        "Priority Support",
        "Performance Optimization",
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  const oneTimePackages = [
    {
      name: "Logo Design",
      price: "$199",
      description: "Professional logo design with unlimited revisions",
    },
    {
      name: "SEO Audit",
      price: "$299",
      description: "Comprehensive SEO analysis and recommendations",
    },
    {
      name: "Google Ads Setup",
      price: "$399",
      description: "Complete campaign setup and optimization",
    },
  ];

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
              Pricing Packages
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Choose the perfect package for your business needs
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 glass px-2 py-2 rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                    : "text-white/70"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === "yearly"
                    ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                    : "text-white/70"
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 px-2 py-1 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass rounded-2xl p-8 relative ${
                  pkg.popular ? "border-2 border-[var(--brand-gold)]" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-white/70 mb-6">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gradient-gold">
                    {billingCycle === "monthly" ? pkg.monthlyPrice : pkg.yearlyPrice}
                  </span>
                  <span className="text-white/60">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <FiCheck className="text-green-400 text-sm" />
                      </div>
                      {feature}
                    </li>
                  ))}
                  {pkg.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/40">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <FiX className="text-red-400 text-sm" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-6 py-4 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                      : "glass text-white hover:bg-white/10"
                  }`}
                >
                  {t("common.buyNow")}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Packages */}
      <section className="py-20 bg-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">One-Time Services</h2>
            <p className="text-white/70">Additional services available à la carte</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {oneTimePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-gradient-gold mb-4">
                  {pkg.price}
                </div>
                <p className="text-white/70 mb-6">{pkg.description}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 rounded-full glass text-white hover:bg-white/10 transition-all"
                >
                  Purchase
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
