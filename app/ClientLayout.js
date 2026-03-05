"use client";

import { usePathname } from 'next/navigation';
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isBloodDonationPage = pathname?.startsWith('/blood-donation');

  return (
    <I18nextProvider i18n={i18n}>
      {!isBloodDonationPage && <Header />}
      <main>{children}</main>
      {!isBloodDonationPage && <Footer />}
    </I18nextProvider>
  );
}
