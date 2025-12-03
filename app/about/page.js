"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

export default function AboutPage() {
  const { t } = useTranslation();

  const team = [
    {
      name: "Ahmad Rezai",
      position: "CEO & Founder",
      image: "👨‍💼",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sara Ahmadi",
      position: "Lead Designer",
      image: "👩‍💼",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Hamid Karimi",
      position: "Tech Lead",
      image: "👨‍💻",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Fatima Nazari",
      position: "Marketing Director",
      image: "👩‍💻",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "We stay ahead of trends and use cutting-edge technologies",
      icon: "💡",
    },
    {
      title: "Quality",
      desc: "Premium results that exceed expectations every time",
      icon: "⭐",
    },
    {
      title: "Integrity",
      desc: "Honest, transparent communication and ethical practices",
      icon: "🤝",
    },
    {
      title: "Results",
      desc: "Data-driven strategies that deliver measurable outcomes",
      icon: "📈",
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
              About Sheen
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              We are a team of passionate digital experts dedicated to transforming businesses through innovative technology solutions.
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
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-white/80 mb-4">
                Founded in 2019, Sheen started with a simple mission: to help Afghan businesses thrive in the digital age. What began as a small team of developers has grown into a full-service digital agency.
              </p>
              <p className="text-white/80 mb-4">
                Today, we serve clients across Afghanistan and beyond, delivering world-class web solutions, SEO services, advertising campaigns, and custom automation tools.
              </p>
              <p className="text-white/80">
                Our commitment to excellence and innovation has made us one of the most trusted digital agencies in the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Mission & Vision</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[var(--brand-gold)] font-semibold mb-2">Mission</h4>
                  <p className="text-white/80">
                    To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and deliver measurable results.
                  </p>
                </div>
                <div>
                  <h4 className="text-[var(--brand-gold)] font-semibold mb-2">Vision</h4>
                  <p className="text-white/80">
                    To become the leading digital agency in Afghanistan, known for innovation, quality, and transforming businesses through technology.
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
              Our Values
            </h2>
            <p className="text-xl text-white/70">
              The principles that guide everything we do
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
                <div className="text-5xl mb-4">{value.icon}</div>
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
              Meet Our Team
            </h2>
            <p className="text-xl text-white/70">
              The talented people behind Sheen
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
                <div className="text-7xl mb-4">{member.image}</div>
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
              Why Sheen Stands Out
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Expertise, Global Standards",
                desc: "We understand the Afghan market while delivering international-quality work",
              },
              {
                title: "Full-Service Solutions",
                desc: "From design to development to marketing - we handle it all",
              },
              {
                title: "Proven Track Record",
                desc: "200+ successful projects and countless satisfied clients",
              },
              {
                title: "Cutting-Edge Technology",
                desc: "We use the latest tools and frameworks for optimal results",
              },
              {
                title: "Dedicated Support",
                desc: "24/7 support and maintenance to keep your business running",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees - clear, competitive pricing from the start",
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
