"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiGlobe, FiCheck, FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "da", label: "Dari", native: "دری" },
  { code: "pa", label: "Pashto", native: "پښتو" },
];

const RTL_LANGUAGES = ["da", "pa"];

export default function Header() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  const isRtl = RTL_LANGUAGES.includes(i18n.language);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dismiss the language menu on an outside click or Escape.
  useEffect(() => {
    if (!isLangOpen) return;

    const handlePointer = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === "Escape") setIsLangOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isLangOpen]);

  // A drawer over the page should not leave the page scrolling behind it.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // <html lang/dir> is synced by DocumentDirection in ClientLayout, which
  // reacts to the language change — no DOM writes needed here.
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 bg-[var(--paper)] transition-[border-color] duration-300 border-b ${
          isScrolled ? "border-[var(--rule)]" : "border-transparent"
        }`}
      >
        <div className="shell">
          <div className="flex items-center justify-between h-[4.25rem]">
            {/* Wordmark */}
            <Link href="/" className="relative z-50" aria-label="Sheen — home">
              <span className="font-display text-[1.4rem] font-extrabold tracking-[-0.04em]">
                {isRtl ? "شین" : "SHEEN"}
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`text-fluid-sm transition-colors duration-200 ${
                    isActive(link.href)
                      ? "font-semibold text-[var(--jade-deep)]"
                      : "t-muted hover:text-[var(--ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language switcher */}
              <div className="relative hidden lg:block" ref={langRef}>
                <button
                  type="button"
                  onClick={() => setIsLangOpen((open) => !open)}
                  aria-haspopup="listbox"
                  aria-expanded={isLangOpen}
                  aria-label="Change language"
                  className="chip !py-2 !px-3.5"
                >
                  <FiGlobe className="text-base" />
                  <span className="data uppercase tracking-widest">
                    {i18n.language?.slice(0, 2)}
                  </span>
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.ul
                      role="listbox"
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute end-0 mt-2 w-48 p-1 rounded-[3px] bg-[var(--paper-raised)] border border-[var(--rule-strong)] shadow-[0_8px_24px_-14px_rgba(18,33,28,0.25)]"
                    >
                      {LANGUAGES.map((lang) => (
                        <li key={lang.code}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={i18n.language === lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-[2px] text-fluid-sm transition-colors ${
                              i18n.language === lang.code
                                ? "bg-[var(--jade-wash)] font-semibold"
                                : "t-muted hover:bg-[var(--paper-alt)] hover:text-[var(--ink)]"
                            }`}
                          >
                            <span>{lang.native}</span>
                            {i18n.language === lang.code ? (
                              <FiCheck className="text-[var(--jade-deep)]" />
                            ) : (
                              <span className="data uppercase t-soft">
                                {lang.code}
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/book" className="hidden lg:block">
                <span className="btn btn-primary btn-sm">
                  {t("nav.book")}
                  <FiArrowUpRight className="text-base flip-rtl" />
                </span>
              </Link>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden relative z-50 w-10 h-10 grid place-items-center rounded-[2px] border border-[var(--rule-strong)] text-xl active:scale-95 transition-transform"
              >
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--paper)]"
          >
            <div className="h-full overflow-y-auto flex flex-col justify-center px-7 py-24">
              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + index * 0.04, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-4 border-b border-[var(--rule)]"
                    >
                      <span
                        className={`font-display text-[1.75rem] font-bold tracking-tight ${
                          isActive(link.href) ? "text-[var(--jade-deep)]" : ""
                        }`}
                      >
                        {link.label}
                      </span>
                      {isActive(link.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--jade)]" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-10 space-y-6"
              >
                <div className="flex items-center gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => changeLanguage(lang.code)}
                      className={`chip ${i18n.language === lang.code ? "chip-active" : ""}`}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>

                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <span className="btn btn-primary btn-lg btn-block">
                    {t("nav.book")}
                    <FiArrowUpRight className="flip-rtl" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
