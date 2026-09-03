"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";
import Link from "next/link";
import "../lib/i18n";
import servicesData from "../data/services";
import projects from "../data/portfolio";
import SectionHead from "../components/SectionHead";

const EASE = [0.16, 1, 0.3, 1];

const domainOf = (url) => (url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function HomePage() {
  const { t, i18n } = useTranslation();

  const localize = (v) => (typeof v === "string" ? v : v?.[i18n.language] || v?.en || "");

  const services = servicesData.map((service) => ({
    id: service.id,
    title: service.title[i18n.language] || service.title.en,
    desc: service.shortDesc[i18n.language] || service.shortDesc.en,
    link: `/services/${service.slug}`,
  }));

  const stats = [
    { number: "50+", label: t("stats.projectsCompleted") },
    { number: "20+", label: t("stats.happyClients") },
    { number: "5+", label: t("stats.teamMembers") },
    { number: "2+", label: t("stats.yearsExperience") },
  ];

  // Real delivered work, straight from the portfolio data. This replaced three
  // invented testimonials attributed to "Unknown" — placeholder quotes read as
  // unfinished and give a search engine nothing it can verify.
  const clientWork = projects.slice(0, 3).map((project) => ({
    client: project.client,
    project: localize(project.title),
    desc: localize(project.description),
    year: project.year,
    link: project.link,
    image: project.image,
  }));

  const advantages = [
    t("whyChoose.feature1"), t("whyChoose.feature2"), t("whyChoose.feature3"),
    t("whyChoose.feature4"), t("whyChoose.feature5"), t("whyChoose.feature6"),
  ];

  return (
    <div className="page">
      {/* ---------------------------------------------------------------- Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="shell">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="eyebrow mb-6"
            >
              {t("contact.addressValue")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
              className="display-xl"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
              className="lede mt-6 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26, ease: EASE }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link href="/contact">
                <span className="btn btn-primary btn-lg">
                  {t("hero.cta")}
                  <FiArrowRight className="flip-rtl" />
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="btn btn-secondary btn-lg">{t("hero.viewWork")}</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- Signature: the work index
          A studio's credibility is its shipped work, so it sits directly under
          the headline — real clients, real years, real live domains. */}
      <section className="band-alt border-y border-[var(--rule)]">
        <div className="shell py-14 sm:py-16">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <span className="eyebrow">{t("portfolio.title")}</span>
            <Link href="/portfolio" className="link text-fluid-sm">
              {t("common.viewAll")}
            </Link>
          </div>

          <ul>
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.06, duration: 0.45, ease: EASE }}
                className="border-t border-[var(--rule)] last:border-b"
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group grid grid-cols-[1fr_auto] sm:grid-cols-[1.6fr_1fr_auto] items-center gap-x-6 gap-y-1 py-5"
                >
                  <span className="font-display text-fluid-xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[var(--jade-deep)]">
                    {localize(project.title)}
                  </span>
                  <span className="data t-soft col-span-2 sm:col-span-1 sm:text-center">
                    {domainOf(project.link)} · {project.year}
                  </span>
                  <FiArrowUpRight className="row-start-1 col-start-2 sm:col-start-3 t-soft transition-all duration-200 group-hover:text-[var(--jade-deep)] group-hover:-translate-y-0.5 flip-rtl" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------------------------- Stats */}
      <section className="shell py-14">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45, ease: EASE }}
            >
              {/* Reversed so the figure reads first while dt still precedes dd
                  in the DOM — otherwise the label is announced twice. */}
              <div className="flex flex-col-reverse">
                <dt className="text-fluid-sm t-muted mt-2">{stat.label}</dt>
                <dd className="numeric font-display text-[2.4rem] sm:text-[2.9rem] font-extrabold leading-none text-[var(--jade-deep)]">
                  {stat.number}
                </dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------------ Services */}
      <section className="section border-t border-[var(--rule)]">
        <div className="shell">
          <SectionHead title={t("services.title")} subtitle={t("services.subtitle")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (index % 4) * 0.06, duration: 0.45, ease: EASE }}
              >
                <Link href={service.link} className="block h-full group">
                  <article className="card card-lift card-pad h-full">
                    <h3 className="text-fluid-lg font-bold transition-colors duration-200 group-hover:text-[var(--jade-deep)]">
                      {service.title}
                    </h3>
                    <p className="t-muted text-fluid-sm mt-2.5">{service.desc}</p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-fluid-sm font-semibold text-[var(--jade-deep)]">
                      {t("common.learnMore")}
                      <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flip-rtl" />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Why Sheen */}
      <section className="section band-alt border-y border-[var(--rule)]">
        <div className="shell">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <h2 className="display-md">{t("whyChoose.title")}</h2>
              <p className="lede mt-4">{t("whyChoose.ctaDesc")}</p>
              <Link href="/contact" className="inline-block mt-8">
                <span className="btn btn-primary">
                  {t("common.contactUs")}
                  <FiArrowRight className="flip-rtl" />
                </span>
              </Link>
            </motion.div>

            <ul className="grid sm:grid-cols-2 gap-x-8">
              {advantages.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4, ease: EASE }}
                  className="flex items-start gap-3 py-3.5 border-b border-[var(--rule)]"
                >
                  <FiCheck className="mt-1 shrink-0 text-[var(--jade-deep)]" />
                  <span className="text-fluid-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Client work */}
      <section className="section">
        <div className="shell">
          <SectionHead title={t("clientWork.title")} subtitle={t("clientWork.subtitle")} />

          <div className="grid md:grid-cols-3 gap-4">
            {clientWork.map((work, index) => (
              <motion.article
                key={work.client}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: EASE }}
                className="card card-pad"
              >
                <h3 className="text-fluid-base font-semibold">{work.client}</h3>
                <p className="t-soft text-fluid-xs mt-1">
                  {work.project} · {work.year}
                </p>
                <p className="text-fluid-sm mt-3">{work.desc}</p>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-6 inline-flex items-center gap-1.5 text-fluid-sm font-semibold"
                >
                  {domainOf(work.link)}
                  <FiArrowUpRight aria-hidden="true" />
                  <span className="sr-only">{t("clientWork.visit")}</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
