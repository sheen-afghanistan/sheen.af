"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import PageHero from "../../components/PageHero";
import SectionHead from "../../components/SectionHead";

const EASE = [0.16, 1, 0.3, 1];

export default function AboutClient() {
  const { t } = useTranslation();

  const team = [
    {
      name: "Suliman Hakimi",
      position: "CEO & Founder",
      image: "/suli.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/suliman-hakimi/",
        twitter: "https://x.com/SulimanHakimi12",
        github: "https://github.com/SulimanHakimi",
      },
    },
    {
      name: "Jawad Hakimi",
      position: "Full Stack Web Developer & Designer",
      image: "/jawad.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/jawad-hakimi-061a512a4/",
        twitter: "#",
        github: "https://github.com/jawad-hakimee",
      },
    },
  ];

  const values = [
    { title: t("about.value1Title"), desc: t("about.value1Desc") },
    { title: t("about.value2Title"), desc: t("about.value2Desc") },
    { title: t("about.value3Title"), desc: t("about.value3Desc") },
    { title: t("about.value4Title"), desc: t("about.value4Desc") },
  ];

  const reasons = [
    { title: t("about.why1Title"), desc: t("about.why1Desc") },
    { title: t("about.why2Title"), desc: t("about.why2Desc") },
    { title: t("about.why3Title"), desc: t("about.why3Desc") },
    { title: t("about.why4Title"), desc: t("about.why4Desc") },
    { title: t("about.why5Title"), desc: t("about.why5Desc") },
    { title: t("about.why6Title"), desc: t("about.why6Desc") },
  ];

  const socialIcons = [
    { key: "linkedin", Icon: FaLinkedinIn, label: "LinkedIn" },
    { key: "twitter", Icon: FaTwitter, label: "Twitter" },
    { key: "github", Icon: FaGithub, label: "GitHub" },
  ];

  return (
    <div className="page">

      <PageHero
        eyebrow={t("nav.about")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      {/* ---------------------------------------------------------- Our story */}
      <section className="section relative border-t border-[var(--rule)]">
        <div className="shell">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="display-md">{t("about.ourStory")}</h2>
              <div className="mt-7 space-y-5 t-muted">
                <p>{t("about.storyP1")}</p>
                <p>{t("about.storyP2")}</p>
                <p>{t("about.storyP3")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="card card-marked card-pad !p-8 sm:!p-10"
            >
              <h3 className="display-sm mb-8">{t("about.missionVision")}</h3>

              <div className="space-y-7">
                <div>
                  <h4 className="data uppercase tracking-[0.18em] text-[var(--jade-deep)] mb-2.5">
                    {t("about.mission")}
                  </h4>
                  <p className="t-muted text-fluid-sm">{t("about.missionText")}</p>
                </div>
                <hr className="rule" />
                <div>
                  <h4 className="data uppercase tracking-[0.18em] text-[var(--jade-deep)] mb-2.5">
                    {t("about.vision")}
                  </h4>
                  <p className="t-muted text-fluid-sm">{t("about.visionText")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Values */}
      <section className="section relative border-t border-[var(--rule)] bg-[var(--paper-alt)]">
        <div className="shell">
          <SectionHead
            title={t("about.ourValues")}
            subtitle={t("about.valuesSubtitle")}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: EASE }}
                className="card card-lift card-pad"
              >
                <h3 className="text-fluid-lg font-bold">{value.title}</h3>
                <p className="t-muted text-fluid-sm mt-3">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Team */}
      <section className="section relative border-t border-[var(--rule)]">
        <div className="shell">
          <SectionHead
            title={t("about.meetTeam")}
            subtitle={t("about.teamSubtitle")}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.55, ease: EASE }}
                className="card card-lift card-pad text-center items-center"
              >
                <div className="relative mb-5">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-[var(--jade-wash)]"
                  />
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.position}`}
                    loading="lazy"
                    className="relative w-28 h-28 rounded-full object-cover ring-1 ring-[var(--rule-strong)]"
                  />
                </div>

                <h3 className="text-fluid-lg font-bold">{member.name}</h3>
                <p className="text-fluid-xs text-[var(--jade-deep)] mt-1.5 px-2">
                  {member.position}
                </p>

                <div className="flex justify-center gap-2 mt-6">
                  {socialIcons.map(({ key, Icon, label }) =>
                    member.social[key] ? (
                      <a
                        key={key}
                        href={member.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${label}`}
                        className="w-9 h-9 grid place-items-center rounded-full border border-[var(--rule)] bg-[var(--paper-alt)] t-muted hover:text-[var(--ink)] hover:bg-[var(--jade-deep)] hover:border-transparent transition-colors duration-300"
                      >
                        <Icon className="text-[0.8rem]" />
                      </a>
                    ) : null
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Why Sheen */}
      <section className="section relative border-t border-[var(--rule)] bg-[var(--paper-alt)]">
        <div className="shell">
          <SectionHead title={t("about.whySheen")} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.55, ease: EASE }}
                className="card card-lift card-pad"
              >
                <h3 className="text-fluid-lg font-bold">{item.title}</h3>
                <p className="t-muted text-fluid-sm mt-3">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
