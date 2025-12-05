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
  ],
  authors: [{ name: "Sheen Digital Agency" }],
  creator: "Sheen Digital Agency",
  publisher: "Sheen Digital Agency",
  robots: {
    index: true,
    follow: true,
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
    url: "https://agency.sheen.af",
    title: "Sheen - Premium Digital Agency in Afghanistan",
    description:
      "Transform your business with Sheen's premium web design, SEO, and digital marketing services in Afghanistan. We build digital success.",
    siteName: "Sheen Digital Agency",
    images: [
      {
        url: "/logo.png", // Make sure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Sheen Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheen - Premium Digital Agency in Afghanistan",
    description:
      "Premium web design, SEO, and digital marketing services in Afghanistan. ساخت ویبسایت در افغانستان",
    images: ["/logo.png"],
    creator: "@sheen_af", // Update with actual handle if available
  },
  alternates: {
    canonical: "https://agency.sheen.af",
    languages: {
      "en-US": "https://agency.sheen.af"
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sheen Digital Agency",
    url: "https://agency.sheen.af",
    logo: "https://agency.sheen.af/logo.png",
    sameAs: [
      "https://www.facebook.com/profile.php?id=100066759369557",
      "https://www.instagram.com/sheen.af",
      "https://www.linkedin.com/company/sheen-af",
      "https://twitter.com/sheen_af",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+93-784-966-018",
      contactType: "customer service",
      areaServed: "AF",
      availableLanguage: ["en", "fa", "ps"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kabul",
      addressLocality: "Kabul",
      addressRegion: "Kabul",
      postalCode: "1005",
      addressCountry: "AF",
    },
    description:
      "Sheen is a premium digital agency in Afghanistan offering web design, SEO, and digital marketing services.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
