"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const serviceLinks = [
    { href: "/services/web-design", label: t("services.webDesign") },
    { href: "/services/seo", label: t("services.seo") },
    { href: "/services/google-ads", label: t("services.googleAds") },
    { href: "/services/ecommerce", label: t("services.ecommerce") },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100066759369557", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/sheen-af", label: "LinkedIn" },
  ];

  const contactRows = [
    { icon: FiMail, value: "info@sheen.af", href: "mailto:info@sheen.af" },
    { icon: FiPhone, value: "+93 784 966 018", href: "tel:+93784966018" },
    { icon: FiMapPin, value: "Kabul, Afghanistan", href: null },
  ];

  return (
    <footer className="band-ink">
      {/* Closing call to action, set on the dark band rather than in a card. */}
      <div className="shell pt-16 sm:pt-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-7 pb-14 border-b border-[rgba(247,245,240,0.18)]">
          <div className="max-w-xl">
            <h2 className="display-md">{t("cta.title")}</h2>
            <p className="t-muted mt-3">{t("cta.subtitle")}</p>
          </div>
          <Link href="/book" className="shrink-0">
            <span className="btn btn-inverse btn-lg">
              {t("common.bookNow")}
              <FiArrowUpRight className="flip-rtl" />
            </span>
          </Link>
        </div>
      </div>

      <div className="shell pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <div className="mb-4">
              <span className="font-display text-[1.4rem] font-extrabold tracking-[-0.04em] text-[var(--paper)]">
                SHEEN
              </span>
            </div>
            <p className="t-muted max-w-xs text-fluid-sm">{t("footer.aboutText")}</p>

            <div className="flex gap-2 mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 grid place-items-center rounded-[2px] border border-[rgba(247,245,240,0.2)] text-[rgba(247,245,240,0.7)] hover:text-[var(--ink)] hover:bg-[var(--jade)] hover:border-transparent transition-colors duration-200"
                >
                  <social.icon className="text-[0.9rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="data uppercase tracking-[0.16em] text-[rgba(247,245,240,0.5)] mb-5">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-fluid-sm t-muted hover:text-[var(--jade)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="data uppercase tracking-[0.16em] text-[rgba(247,245,240,0.5)] mb-5">
              {t("services.title")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-fluid-sm t-muted hover:text-[var(--jade)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className="data uppercase tracking-[0.16em] text-[rgba(247,245,240,0.5)] mb-5">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4">
              {contactRows.map((row) => {
                const content = (
                  <span className="flex items-center gap-3 text-fluid-sm t-muted group-hover:text-[var(--paper)] transition-colors">
                    <row.icon className="text-[var(--jade)] shrink-0" />
                    <span className="data">{row.value}</span>
                  </span>
                );
                return (
                  <li key={row.value} className="group">
                    {row.href ? <a href={row.href}>{content}</a> : content}
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-fluid-xs t-soft leading-relaxed">
              Serving all of Afghanistan — national and international.
            </p>
          </div>
        </div>

        <hr className="rule my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-fluid-xs t-soft">
          <p>© {new Date().getFullYear()} Sheen. {t("footer.rights")}</p>
          <p className="font-mono tracking-widest uppercase">Kabul · Afghanistan</p>
        </div>
      </div>

      {/* Floating contact buttons */}
      <div className="fixed bottom-5 end-5 z-40 flex flex-col gap-3">
        <motion.a
          href="https://wa.me/93784966018"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-11 h-11 grid place-items-center rounded-[3px] bg-[#1FA855] text-white text-xl shadow-[0_6px_18px_-8px_rgba(18,33,28,0.5)]"
        >
          <FaWhatsapp />
        </motion.a>

        <motion.a
          href="https://m.me/100066759369557"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on Messenger"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-11 h-11 grid place-items-center rounded-[3px] bg-[var(--lapis)] text-white text-xl shadow-[0_6px_18px_-8px_rgba(18,33,28,0.5)]"
        >
          <SiMessenger />
        </motion.a>
      </div>
    </footer>
  );
}
