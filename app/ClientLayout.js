"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ClientLayout({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main>{children}</main>
      <Footer />
    </I18nextProvider>
  );
}
