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
    <footer className="bg-[var(--brand-dark)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">SHEEN</h3>
            <p className="text-white/70 mb-6">{t("footer.aboutText")}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--brand-gold)] transition-all"
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("services.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-design" className="text-white/70 hover:text-white transition-colors">
                  {t("services.webDesign")}
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-white/70 hover:text-white transition-colors">
                  {t("services.seo")}
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="text-white/70 hover:text-white transition-colors">
                  {t("services.googleAds")}
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-white/70 hover:text-white transition-colors">
                  {t("services.ecommerce")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-white/70">
              <li>Email: info@sheen.af</li>
              <li>Phone: +93 784 966 018</li>
              <li>Address: Kabul, Afghanistan</li>
              <li className="pt-2 text-sm opacity-80">Serving all of Afghanistan NATIONAL AND INTERNATIONAL</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Sheen. {t("footer.rights")}</p>
        </div>
      </div>

      {/* Floating Buttons */}
      <motion.a
        href="https://wa.me/93784966018"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-40"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>

      <motion.a
        href="https://m.me/100066759369557"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-6 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-40"
      >
        <SiMessenger className="text-white text-2xl" />
      </motion.a>
    </footer>
  );
}
