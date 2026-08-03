"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../lib/i18n";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RTL_LANGUAGES = ['da', 'pa'];

/* Keeps <html lang/dir> in step with i18n so the RTL typeface and the
   logical-property layout apply on load, not only after a manual switch. */
function DocumentDirection() {
  const { i18n: instance } = useTranslation();
  const language = instance.language;

  useEffect(() => {
    if (!language) return;
    const isRtl = RTL_LANGUAGES.includes(language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [language]);

  return null;
}

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isBloodDonationPage = pathname?.startsWith('/blood-donation');

  return (
    <I18nextProvider i18n={i18n}>
      <DocumentDirection />
      {!isBloodDonationPage && <Header />}
      <main>{children}</main>
      {!isBloodDonationPage && <Footer />}
    </I18nextProvider>
  );
}
