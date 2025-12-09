import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://agency.sheen.af"),
  title: {
    default: "Sheen - Premium Digital Agency in Afghanistan | Web Design & SEO",
    template: "%s | Sheen Digital Agency",
  },
  description:
    "Sheen is the leading digital agency in Afghanistan specializing in premium web design, SEO, Google Ads, social media marketing, and business automation. ساخت ویبسایت در افغانستان",
  keywords: [
    "Afghanistan web agency",
    "web design Kabul",
    "digital marketing Afghanistan",
    "SEO services Kabul",
    "Google Ads Afghanistan",
    "social media marketing",
    "business automation",
    "software company Afghanistan",
    "ساخت ویبسایت در افغانستان",
    "طراحی سایت کابل",
    "دیجیتال مارکتینگ",
    "Sheen",
    "شین",
    "Sheen Digital Agency",
    "Next.js development Afghanistan",
    "React development Kabul",
    "e-commerce Afghanistan",
    "API integration",
    "3D web experiences",
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
    title: "Sheen - Premium Digital Agency in Afghanistan",
    description:
      "Transform your business with Sheen's premium web design, SEO, and digital marketing services in Afghanistan. We build digital success.",
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
    title: "Sheen - Premium Digital Agency in Afghanistan",
    description:
      "Premium web design, SEO, and digital marketing services in Afghanistan. ساخت ویبسایت در افغانستان",
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
          "Sheen is a premium digital agency in Afghanistan offering web design, SEO, digital marketing, and business automation services.",
        slogan: "Transform Your Digital Presence",
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
        areaServed: {
          "@type": "Country",
          name: "Afghanistan",
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

  return (
    <html lang="en" suppressHydrationWarning>
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
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
