"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";


export default function AboutClient() {
  const { t } = useTranslation();

  const team = [
    {
      name: "Suliman Hakimi",
      position: "CEO & Founder",
      image: "/suli.jpeg",
      social: { linkedin: "https://www.linkedin.com/in/suliman-hakimi/", twitter: "https://x.com/SulimanHakimi12", github: "https://github.com/SulimanHakimi" },
    },
    {
      name: "Jawad Hakimi",
      position: "Full Stack Web Developer & Designer",
      image: "/jawad.jpg",
      social: { linkedin: "https://www.linkedin.com/in/jawad-hakimi-061a512a4/", twitter: "#", github: "https://github.com/jawad-hakimee" },
    },
    {
      name: "Layla Wakily",
      position: "Mobile App & Web Developer, UI/UX Designer",
      image: "https://thumbs.dreamstime.com/b/smiling-muslim-woman-wearing-blue-hijab-circle-profile-smiling-muslim-woman-wearing-blue-hijab-circle-profile-ai-generated-402854748.jpg",
      social: { linkedin: "https://www.linkedin.com/in/layla-wakily-4b453a31a/", twitter: "https://x.com/la_wakily", github: "https://github.com/Laylawakily" },
    }
  ];

  const values = [
    {
      title: t("about.value1Title"),
      desc: t("about.value1Desc")
    },
    {
      title: t("about.value2Title"),
      desc: t("about.value2Desc"),
    },
    {
      title: t("about.value3Title"),
      desc: t("about.value3Desc")
    },
    {
      title: t("about.value4Title"),
      desc: t("about.value4Desc")
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
              {t("about.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">{t("about.ourStory")}</h2>
              <p className="text-white/80 mb-4">
                {t("about.storyP1")}
              </p>
              <p className="text-white/80 mb-4">
                {t("about.storyP2")}
              </p>
              <p className="text-white/80">
                {t("about.storyP3")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t("about.missionVision")}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[var(--brand-gold)] font-semibold mb-2">{t("about.mission")}</h4>
                  <p className="text-white/80">
                    {t("about.missionText")}
                  </p>
                </div>
                <div>
                  <h4 className="text-[var(--brand-gold)] font-semibold mb-2">{t("about.vision")}</h4>
                  <p className="text-white/80">
                    {t("about.visionText")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("about.ourValues")}
            </h2>
            <p className="text-xl text-white/70">
              {t("about.valuesSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("about.meetTeam")}
            </h2>
            <p className="text-xl text-white/70">
              {t("about.teamSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl text-center group hover:bg-white/10 transition-all"
              >
                <img src={member.image} className="w-32 h-32 mx-auto object-cover rounded-full mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[var(--brand-gold)] mb-4">{member.position}</p>
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-[var(--brand-gold)] transition-all"
                    >
                      <FaLinkedinIn className="text-sm" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-[var(--brand-gold)] transition-all"
                    >
                      <FaTwitter className="text-sm" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-[var(--brand-gold)] transition-all"
                    >
                      <FaGithub className="text-sm" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("about.whySheen")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("about.why1Title"),
                desc: t("about.why1Desc"),
              },
              {
                title: t("about.why2Title"),
                desc: t("about.why2Desc"),
              },
              {
                title: t("about.why3Title"),
                desc: t("about.why3Desc"),
              },
              {
                title: t("about.why4Title"),
                desc: t("about.why4Desc"),
              },
              {
                title: t("about.why5Title"),
                desc: t("about.why5Desc"),
              },
              {
                title: t("about.why6Title"),
                desc: t("about.why6Desc"),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
