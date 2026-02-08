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
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 rounded-full glass border border-brand-primary/30 text-brand-accent mb-6 font-mono text-sm">
                Get in Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                {t("contact.title")}
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                className="glass-card p-10 rounded-3xl border border-white/5"
              >
                <h2 className="text-3xl font-bold text-white mb-2">{t("contact.formTitle")}</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">{t("contact.nameLabel")} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-white/20"
                      placeholder={t("contact.namePlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">{t("contact.emailLabel")} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-white/20"
                      placeholder={t("contact.emailPlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">{t("contact.phoneLabel")}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-white/20"
                      placeholder={t("contact.phonePlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">{t("contact.subjectLabel")} *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-white/20"
                      placeholder={t("contact.subjectPlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">{t("contact.messageLabel")} *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all resize-none placeholder:text-white/20"
                      placeholder={t("contact.messagePlaceholder")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === "sending"}
                    className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-lg shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-brand-primary/40 transition-all"
                  >
                    {status === "sending" ? t("contact.sending") : t("contact.send")}
                    <FiSend />
                  </motion.button>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-center font-medium"
                    >
                      {t("contact.success")}
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400 text-center font-medium"
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
                <h2 className="text-3xl font-bold text-white mb-8 pl-4 border-l-4 border-brand-primary">{t("contact.infoTitle")}</h2>

                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-all block border border-white/5 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                      <info.icon className="text-brand-primary text-2xl group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">{info.title}</div>
                      <div className="text-white font-bold text-lg">{info.value}</div>
                    </div>
                  </motion.a>
                ))}

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 rounded-3xl h-80 flex items-center justify-center border border-white/5 mt-8 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kabul_City.jpg/1200px-Kabul_City.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 transform group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                  <div className="text-center text-white relative z-10">
                    <div className="w-16 h-16 bg-brand-primary/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-primary/30 animate-bounce">
                      <FiMapPin className="text-3xl text-white" />
                    </div>
                    <p className="font-bold text-lg">Visit Our Office</p>
                    <p className="text-white/80 text-sm">Kabul, Afghanistan</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
