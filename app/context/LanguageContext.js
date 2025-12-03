"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // 'en', 'da', 'pa'

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      packages: "Packages",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      book: "Book Online",
      heroTitle: "Digital Excellence for the Modern Era",
      heroSubtitle: "We build premium digital experiences that elevate your brand.",
      getStarted: "Get Started",
      viewWork: "View Work",
    },
    da: {
      home: "خانه",
      about: "درباره ما",
      services: "خدمات",
      packages: "بسته‌ها",
      portfolio: "نمونه کارها",
      blog: "بلاگ",
      contact: "تماس",
      book: "رزرو آنلاین",
      heroTitle: "تعالی دیجیتال برای عصر مدرن",
      heroSubtitle: "ما تجربیات دیجیتالی ممتازی می‌سازیم که برند شما را ارتقا می‌دهد.",
      getStarted: "شروع کنید",
      viewWork: "مشاهده کارها",
    },
    pa: {
      home: "کور",
      about: "زموږ په اړه",
      services: "خدمتونه",
      packages: "بستې",
      portfolio: "پروژې",
      blog: "بلاګ",
      contact: "اړیکه",
      book: "آنلاین ریزرویشن",
      heroTitle: "د عصري دور لپاره ډیجیټل غوره والی",
      heroSubtitle: "موږ داسې ډیجیټل تجربې رامینځته کوو چې ستاسو برانډ لوړوي.",
      getStarted: "پیل وکړئ",
      viewWork: "کارونه وګورئ",
    },
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
