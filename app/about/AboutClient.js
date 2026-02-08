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
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden py-20 relative">
      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-brand-accent/5 blur-[80px]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <div className="inline-block px-4 py-2 rounded-full glass border border-brand-primary/30 text-brand-accent mb-6 font-mono text-sm">
                {t("about.subtitle") || "Who We Are"}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                {t("about.title")}
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We are a team of visionary creators and technical experts dedicated to redefining the digital landscape of Afghanistan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white"><span className="text-brand-primary">Our Story</span> & Mission</h2>
                <div className="space-y-6 text-gray-400 leading-loose">
                  <p>{t("about.storyP1")}</p>
                  <p>{t("about.storyP2")}</p>
                  <p>{t("about.storyP3")}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl border border-white/5"
              >
                <h3 className="text-2xl font-bold text-white mb-8">{t("about.missionVision")}</h3>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-brand-primary">
                    <h4 className="text-brand-primary font-semibold mb-2 text-lg">{t("about.mission")}</h4>
                    <p className="text-gray-400">
                      {t("about.missionText")}
                    </p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-brand-gold">
                    <h4 className="text-brand-gold font-semibold mb-2 text-lg">{t("about.vision")}</h4>
                    <p className="text-gray-400">
                      {t("about.visionText")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t("about.ourValues")}
              </h2>
              <p className="text-gray-400">
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
                  className="glass-card p-8 rounded-2xl text-center hover:bg-white/5 transition-all group"
                >
                  <div className="w-12 h-12 mx-auto bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t("about.meetTeam")}
              </h2>
              <p className="text-gray-400">
                {t("about.teamSubtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 rounded-3xl text-center group border border-white/5"
                >
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-brand-primary to-brand-dark">
                    <img src={member.image} className="w-full h-full object-cover rounded-full border-4 border-[#020617]" alt={member.name} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-primary font-medium mb-6 uppercase tracking-wider text-sm">{member.position}</p>
                  <div className="flex justify-center gap-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-gray-400"
                        title="LinkedIn"
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                    {member.social.twitter && member.social.twitter !== "#" && (
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-black hover:text-white transition-all text-gray-400"
                        title="Twitter"
                      >
                        <FaTwitter />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all text-gray-400"
                        title="GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-brand-primary/5 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t("about.whySheen")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: t("about.why1Title"), desc: t("about.why1Desc") },
                { title: t("about.why2Title"), desc: t("about.why2Desc") },
                { title: t("about.why3Title"), desc: t("about.why3Desc") },
                { title: t("about.why4Title"), desc: t("about.why4Desc") },
                { title: t("about.why5Title"), desc: t("about.why5Desc") },
                { title: t("about.why6Title"), desc: t("about.why6Desc") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-8 rounded-2xl hover:border-brand-primary/30 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
