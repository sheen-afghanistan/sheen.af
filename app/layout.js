import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Vazirmatn,
} from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

/* Display — editorial grotesque with real character in the headlines. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/* Body / UI — humanist geometric, holds up at small sizes. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* Eyebrows, tags and metadata — technical counterpoint. */
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

/* Dari / Pashto — a script-native face instead of a Latin fallback. */
const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://agency.sheen.af"),
  title: {
    default: "Web Design, Mobile Apps & SEO in Afghanistan | Sheen",
    template: "%s | Sheen Digital Agency",
  },
  description:
    "Sheen builds websites, mobile apps and SEO campaigns for businesses in Afghanistan and for Afghans living abroad. Kabul-based, serving clients worldwide.",
  keywords: [
    // Core
    "digital agency Afghanistan",
    "web design Afghanistan",
    "website development Afghanistan",
    "SEO services Afghanistan",
    "digital marketing Kabul",

    // Website building
    "website builder Afghanistan",
    "build a website Afghanistan",
    "professional website design Kabul",
    "top web design company Kabul",
    "e-commerce website development Afghanistan",
    "business website Afghanistan",
    "affordable website design Afghanistan",

    // Mobile apps
    "mobile app development Afghanistan",
    "app developer Kabul",
    "Android app development Afghanistan",
    "iOS app development Afghanistan",
    "React Native developer Afghanistan",
    "Flutter app development Kabul",
    "build a mobile app Afghanistan",

    // Afghans living abroad / diaspora
    "web design for Afghans abroad",
    "website for Afghan business abroad",
    "Afghan diaspora web agency",
    "Afghan web developers for overseas clients",
    "hire Afghan developers remotely",
    "website for Afghan business in Germany",
    "website for Afghan business in USA",
    "website for Afghan business in Europe",
    "Afghan owned digital agency international clients",

    // Long-tail
    "best digital marketing agency in Afghanistan",
    "affordable SEO services Afghanistan",
    "Google Ads management Afghanistan",

    // Location-based
    "digital agency Kabul",
    "web design Herat",
    "SEO company Afghanistan",
    "digital marketing agency Kabul",

    // Service-specific
    "social media marketing Afghanistan",
    "business automation Afghanistan",
    "e-commerce development Kabul",
    "API integration Afghanistan",
    "3D web experiences Afghanistan",

    // Local Language
    "ساخت ویبسایت در افغانستان",
    "طراحی سایت کابل",
    "ساخت اپلیکیشن موبایل افغانستان",
    "دیجیتال مارکتینگ افغانستان",
    "سئو افغانستان",
    "طراحی سایت برای افغان‌های خارج از کشور",
    "د ویب پاڼې جوړول افغانستان",
    "د موبایل اپلیکیشن جوړول",

    // Brand
    "Sheen Digital Agency",
    "Sheen Afghanistan",
    "شین",

    // Technology
    "Next.js development Afghanistan",
    "React development Kabul",
    "modern web design Afghanistan",
  ],
  authors: [{ name: "Sheen Digital Agency", url: "https://agency.sheen.af" }],
  creator: "Sheen Digital Agency",
  publisher: "Sheen Digital Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "CpREQ-7SAyuXuLNBBfGuS98cdDg3pywRTLPpGZ9Rsqw", // Add your actual verification code
    yandex: "bbabd6975c43efe7",
    bing: "42CD6515D45991F50EF8A5B9905C25C6",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fa_AF", "ps_AF"],
    url: "https://agency.sheen.af",
    title: "Sheen — Websites, Mobile Apps & SEO for Afghans Worldwide",
    description:
      "Websites, mobile apps, SEO and Google Ads built by a Kabul-based team — for businesses inside Afghanistan and for Afghans running businesses abroad.",
    siteName: "Sheen Digital Agency",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sheen Digital Agency - Premium Web Design & Digital Marketing",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sheen_af",
    creator: "@sheen_af",
    title: "Sheen — Websites, Mobile Apps & SEO for Afghans Worldwide",
    description:
      "Websites, mobile apps, SEO and Google Ads for businesses in Afghanistan and Afghans abroad. ساخت ویبسایت و اپلیکیشن در افغانستان",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://agency.sheen.af",
    languages: {
      "en-US": "https://agency.sheen.af",
      "fa-AF": "https://agency.sheen.af",
      "ps-AF": "https://agency.sheen.af",
    },
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://agency.sheen.af/#organization",
        name: "Sheen Digital Agency",
        legalName: "Sheen Digital Agency",
        url: "https://agency.sheen.af",
        logo: {
          "@type": "ImageObject",
          url: "https://agency.sheen.af/logo.png",
          width: 512,
          height: 512,
        },
        image: "https://agency.sheen.af/logo.png",
        description:
          "Sheen is a digital agency based in Kabul, Afghanistan, building websites, mobile apps, e-commerce stores, SEO and Google Ads campaigns for businesses inside Afghanistan and for Afghans running businesses abroad.",
        slogan: "Transform Your Digital Presence",
        knowsLanguage: ["en", "fa", "ps"],
        foundingDate: "2020",
        sameAs: [
          "https://www.facebook.com/profile.php?id=100066759369557",
          "https://www.instagram.com/sheen.af",
          "https://www.linkedin.com/company/sheen-af",
          "https://twitter.com/sheen_af",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+93-784-966-018",
            contactType: "customer service",
            areaServed: "AF",
            availableLanguage: ["English", "Dari", "Pashto"],
            contactOption: "TollFree",
          },
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "info@sheen.af",
            areaServed: "AF",
            availableLanguage: ["English", "Dari", "Pashto"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kabul",
          addressLocality: "Kabul",
          addressRegion: "Kabul",
          postalCode: "1005",
          addressCountry: "AF",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "34.5553",
          longitude: "69.2075",
        },
        // Kabul-based, but a large share of the work is for Afghans running
        // businesses overseas — the served area is not just Afghanistan.
        areaServed: [
          { "@type": "Country", name: "Afghanistan" },
          { "@type": "Place", name: "Worldwide" },
        ],
        audience: {
          "@type": "Audience",
          audienceType:
            "Businesses in Afghanistan and Afghan-owned businesses abroad",
          geographicArea: [
            { "@type": "Country", name: "Afghanistan" },
            { "@type": "Place", name: "Worldwide" },
          ],
        },
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Design & Development",
                description: "Modern, responsive websites that convert visitors into customers",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile App Development",
                description:
                  "Android and iOS mobile apps for Afghan businesses at home and abroad",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO & Digital Marketing",
                description: "Boost your visibility and rank higher on search engines",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads Management",
                description: "Get instant visibility with targeted Google Ads campaigns",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Social Media Advertising",
                description: "Reach your audience on Facebook, Instagram, and LinkedIn",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-commerce Solutions",
                description: "Build a powerful online store that drives sales",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://agency.sheen.af/#website",
        url: "https://agency.sheen.af",
        name: "Sheen Digital Agency",
        description: "Premium Digital Agency in Afghanistan",
        publisher: {
          "@id": "https://agency.sheen.af/#organization",
        },
        inLanguage: ["en", "fa", "ps"],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://agency.sheen.af/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://agency.sheen.af/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://agency.sheen.af",
          },
        ],
      },
    ],
  };

  // The font variables live on <html>: the composite --font-body /
  // --font-display stacks are declared at :root and can only reference
  // custom properties defined on that same element.
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${bricolage.variable} ${jakarta.variable} ${jetbrains.variable} ${vazirmatn.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="msvalidate.01" content="42CD6515D45991F50EF8A5B9905C25C6" />
        <meta name="yandex-verification" content="bbabd6975c43efe7" />
        <meta name="google-site-verification" content="CpREQ-7SAyuXuLNBBfGuS98cdDg3pywRTLPpGZ9Rsqw" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X8D31HXBFJ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'G-X8D31HXBFJ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ugo5pufmj7");
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
