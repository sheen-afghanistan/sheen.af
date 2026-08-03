"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1];

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
      link: null,
    },
    {
      icon: FiClock,
      title: t("contact.supportHours"),
      value: t("contact.available247"),
      link: null,
    },
  ];

  const fields = [
    { name: "name", type: "text", label: t("contact.nameLabel"), placeholder: t("contact.namePlaceholder"), required: true, half: true },
    { name: "email", type: "email", label: t("contact.emailLabel"), placeholder: t("contact.emailPlaceholder"), required: true, half: true },
    { name: "phone", type: "tel", label: t("contact.phoneLabel"), placeholder: t("contact.phonePlaceholder"), required: false, half: true },
    { name: "subject", type: "text", label: t("contact.subjectLabel"), placeholder: t("contact.subjectPlaceholder"), required: true, half: true },
  ];

  return (
    <div className="page">

      <PageHero
        eyebrow={t("nav.contact")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <section className="section-tight pb-24 relative">
        <div className="shell">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            {/* ------------------------------------------------------- Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="lg:col-span-3 card card-pad !p-7 sm:!p-9"
            >
              <h2 className="display-sm mb-8">{t("contact.formTitle")}</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="field-label">
                        {field.label}
                        {field.required && <span className="text-[var(--jade-deep)]">*</span>}
                      </label>
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="field"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    {t("contact.messageLabel")}
                    <span className="text-[var(--jade-deep)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field field-textarea"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn btn-primary btn-block btn-lg">
                  {status === "sending" ? t("contact.sending") : t("contact.send")}
                  <FiSend className="flip-rtl" />
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="alert alert-success"
                  >
                    {t("contact.success")}
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="alert alert-error"
                  >
                    {t("contact.error") || "Failed to send message. Please try again."}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* -------------------------------------------------- Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="lg:col-span-2"
            >
              <h2 className="display-sm mb-7">{t("contact.infoTitle")}</h2>

              <ul className="space-y-3">
                {contactInfo.map((info, index) => {
                  const inner = (
                    <span className="card card-pad !p-5 !flex-row items-center gap-4 group-hover:border-[rgba(212,175,55,0.34)] transition-colors duration-300">
                      <span className="w-11 h-11 shrink-0 grid place-items-center rounded-full border border-[var(--jade)] bg-[var(--jade-wash)]">
                        <info.icon className="text-[var(--jade-deep)]" />
                      </span>
                      <span className="min-w-0">
                        <span className="block data uppercase tracking-[0.14em] t-soft">
                          {info.title}
                        </span>
                        <span className="block text-fluid-sm font-medium truncate">
                          {info.value}
                        </span>
                      </span>
                      {info.link && (
                        <FiArrowUpRight className="ms-auto shrink-0 t-soft transition-colors duration-300 group-hover:text-[var(--jade-deep)] flip-rtl" />
                      )}
                    </span>
                  );

                  return (
                    <li key={index} className="group">
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block"
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="card card-marked card-pad !p-6 mt-3">
                <h3 className="text-fluid-lg font-bold">
                  {t("whyChoose.ctaTitle")}
                </h3>
                <p className="t-muted text-fluid-sm mt-2.5">{t("whyChoose.ctaDesc")}</p>
                <a
                  href="https://wa.me/93784966018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                >
                  <span className="btn btn-primary btn-block">
                    <FaWhatsapp className="text-lg" />
                    {t("contact.whatsapp")}
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
