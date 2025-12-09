"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    document.documentElement.dir = lng === 'da' || lng === 'pa' ? 'rtl' : 'ltr';
  };

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/packages", label: t("nav.packages") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-dark shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50 relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-gradient-gold"
            >
              {i18n.language === 'da' || i18n.language === 'pa' ? 'شین' : 'SHEEN'}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center ${i18n.language === 'da' || i18n.language === 'pa' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full glass text-white hover:bg-white/10 transition-all"
              >
                <FiGlobe className="text-lg" />
                <span className="uppercase text-sm font-semibold">
                  {i18n.language}
                </span>
              </motion.button>

            </div>

            {/* Book Now Button */}
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {t("nav.book")}
              </motion.button>
            </Link>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white text-2xl z-50 relative p-2"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center space-y-8 p-8 w-full max-w-sm">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-semibold text-white/90 hover:text-[var(--brand-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="flex flex-col items-center space-y-6 w-full pt-8 border-t border-white/10"
              >                

                <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                  <button className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-bold text-lg shadow-xl">
                    {t("nav.book")}
                  </button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
