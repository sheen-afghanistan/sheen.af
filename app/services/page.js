"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      id: "web-design",
      title: t("services.webDesign"),
      desc: t("services.webDesignDesc"),
      icon: "🌐",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Fast Loading",
        "SEO-Friendly",
        "Cross-Browser Compatible",
      ],
    },
    {
      id: "seo",
      title: t("services.seo"),
      desc: t("services.seoDesc"),
      icon: "🚀",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
        "Analytics & Reporting",
      ],
    },
    {
      id: "google-ads",
      title: t("services.googleAds"),
      desc: t("services.googleAdsDesc"),
      icon: "📊",
      features: [
        "Campaign Setup",
        "Ad Optimization",
        "Keyword Management",
        "A/B Testing",
        "ROI Tracking",
      ],
    },
    {
      id: "social-ads",
      title: t("services.socialAds"),
      desc: t("services.socialAdsDesc"),
      icon: "📱",
      features: [
        "Facebook Ads",
        "Instagram Ads",
        "LinkedIn Ads",
        "Audience Targeting",
        "Creative Design",
      ],
    },
    {
      id: "api-integration",
      title: t("services.apiIntegration"),
      desc: t("services.apiIntegrationDesc"),
      icon: "🔗",
      features: [
        "Shipit Integration",
        "Payment Gateways",
        "CRM Integration",
        "Custom APIs",
        "Third-Party Services",
      ],
    },
    {
      id: "ecommerce",
      title: t("services.ecommerce"),
      desc: t("services.ecommerceDesc"),
      icon: "🛒",
      features: [
        "Product Management",
        "Shopping Cart",
        "Payment Integration",
        "Inventory System",
        "Order Tracking",
      ],
    },
    {
      id: "3d-web",
      title: t("services.3dWeb"),
      desc: t("services.3dWebDesc"),
      icon: "✨",
      features: [
        "3D Modeling",
        "Interactive Experiences",
        "WebGL",
        "Animations",
        "Virtual Tours",
      ],
    },
    {
      id: "automation",
      title: t("services.automation"),
      desc: t("services.automationDesc"),
      icon: "⚙️",
      features: [
        "Workflow Automation",
        "Email Automation",
        "Data Processing",
        "Custom Tools",
        "Integration Services",
      ],
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
              {t("services.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-6xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70">{service.desc}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/services/${service.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold flex items-center justify-center gap-2"
                  >
                    {t("common.learnMore")}
                    <FiArrowRight />
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
              Contact us today for a free consultation
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-white text-[var(--brand-dark)] font-bold text-lg shadow-2xl"
              >
                {t("common.contactUs")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
