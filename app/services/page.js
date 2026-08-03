"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import servicesData from "../../data/services";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1];

// "From On request" reads badly — only prefix an actual figure.
const isFigure = (price) => /\d/.test(price || "");

export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  return (
    <div className="page">

      <PageHero
        eyebrow={t("nav.services")}
        title="Our Services"
        subtitle="Comprehensive digital solutions to grow your business"
      />

      <section className="section-tight pb-24 relative">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.55, ease: EASE }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <article className="card card-lift card-pad !p-7 h-full">
                    <div className="flex items-start justify-end gap-4">
                      <FiArrowUpRight className="text-lg t-soft transition-all duration-300 group-hover:text-[var(--jade-deep)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flip-rtl" />
                    </div>

                    <h2 className="text-fluid-xl font-bold mt-5 transition-colors duration-300 group-hover:text-[var(--jade-deep)]">
                      {service.title[currentLang] || service.title.en}
                    </h2>
                    <p className="t-muted text-fluid-sm mt-3">
                      {service.shortDesc[currentLang] || service.shortDesc.en}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-fluid-xs t-soft"
                        >
                          <span className="mt-[0.45rem] w-1 h-1 rounded-full bg-[var(--jade-deep)] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <hr className="rule mb-4" />
                      <div className="flex items-baseline justify-between gap-3">
                        {isFigure(service.pricing.basic.price) && (
                          <span className="data uppercase tracking-[0.16em] t-soft">
                            From
                          </span>
                        )}
                        <span
                          className={`ms-auto text-fluid-lg font-bold t-jade ${
 isFigure(service.pricing.basic.price) ? "numeric" : ""
 }`}
                        >
                          {service.pricing.basic.price}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke CTA — distinct from the global footer band. */}
      <section className="section band-ink">
        <div className="shell-narrow text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="eyebrow mb-5">Not sure yet?</span>
            <h2 className="display-md">Not Sure Which Service You Need?</h2>
            <p className="lede mt-5">
              Book a free consultation and we&apos;ll help you find the perfect solution.
            </p>
            <Link href="/contact" className="inline-block mt-9">
              <span className="btn btn-inverse btn-lg">Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
