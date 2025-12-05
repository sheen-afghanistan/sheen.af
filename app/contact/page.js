"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        const error = await response.json();
        setStatus("error");
        console.error('Email error:', error);

        // Clear error message after 5 seconds
        setTimeout(() => {
          setStatus("");
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("error");

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: t("contact.email"),
      value: "info@sheen.af",
      link: "mailto:info@sheen.af",
    },
    {
      icon: FiPhone,
      title: t("contact.phone"),
      value: "+93 784 966 018",
      link: "tel:+93784966018",
    },
    {
      icon: FaWhatsapp,
      title: t("contact.whatsapp"),
      value: "+93 784 966 018",
      link: "https://wa.me/93784966018",
    },
    {
      icon: FiMapPin,
      title: t("contact.address"),
      value: t("contact.addressValue"),
      link: "#",
    },
    {
      icon: FiClock,
      title: t("contact.supportHours"),
      value: t("contact.available247"),
      link: "#",
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
              {t("contact.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{t("contact.formTitle")}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2">{t("contact.nameLabel")} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none transition-all"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">{t("contact.emailLabel")} *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none transition-all"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">{t("contact.phoneLabel")}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none transition-all"
                    placeholder={t("contact.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">{t("contact.subjectLabel")} *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none transition-all"
                    placeholder={t("contact.subjectPlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">{t("contact.messageLabel")} *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none transition-all resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "sending"}
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "sending" ? t("contact.sending") : t("contact.send")}
                  <FiSend />
                </motion.button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                  >
                    {t("contact.success")}
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-center"
                  >
                    {t("contact.error") || "Failed to send message. Please try again."}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-8">{t("contact.infoTitle")}</h2>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all block"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">{info.title}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </motion.a>
              ))}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-2xl h-64 flex items-center justify-center"
              >
                <div className="text-center text-white/60">
                  <FiMapPin className="text-5xl mx-auto mb-4" />
                  {/* <p>{t("contact.mapIntegration")}</p> */}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
