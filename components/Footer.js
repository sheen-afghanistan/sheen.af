"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
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

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100066759369557", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/sheen-af", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-[#020617] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-dark/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent">
                SHEEN
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t("footer.aboutText") || "Premium digital agency transforming businesses through innovation and design excellence."}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/10"
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t("services.title")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-design" className="text-gray-400 hover:text-brand-primary transition-colors">
                  {t("services.webDesign")}
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-gray-400 hover:text-brand-primary transition-colors">
                  {t("services.seo")}
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="text-gray-400 hover:text-brand-primary transition-colors">
                  {t("services.googleAds")}
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-gray-400 hover:text-brand-primary transition-colors">
                  {t("services.ecommerce")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t("footer.contact")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="font-semibold text-white mr-2">Email:</span>
                <a href="mailto:info@sheen.af" className="hover:text-brand-primary transition-colors">info@sheen.af</a>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-white mr-2">Phone:</span>
                <a href="tel:+93784966018" className="hover:text-brand-primary transition-colors">+93 784 966 018</a>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-white mr-2">Address:</span>
                <span>Kabul, Afghanistan</span>
              </li>
              <li className="pt-4 border-t border-white/10 text-sm opacity-80 mt-2">
                Serving all of Afghanistan <br /> NATIONAL AND INTERNATIONAL
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sheen Digital Agency. {t("footer.rights")}</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <motion.a
        href="https://wa.me/93784966018"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] z-40 transition-shadow"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>

      <motion.a
        href="https://m.me/100066759369557"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#0084FF] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,132,255,0.4)] hover:shadow-[0_4px_30px_rgba(0,132,255,0.6)] z-40 transition-shadow"
      >
        <SiMessenger className="text-white text-2xl" />
      </motion.a>
    </footer>
  );
}
