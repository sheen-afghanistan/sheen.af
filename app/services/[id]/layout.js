import servicesData from "../../../data/services";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo-utils";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const serviceId = id || "web-design";

  // Find the service from data
  const service = servicesData.find((s) => s.slug === serviceId) || servicesData[0];

  const title = service.title.en;
  const description = service.description.en;

  return {
    title,
    description,
    keywords: service.features || [],
    openGraph: {
      type: "website",
      title,
      description,
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      alternateLocale: ["fa_AF", "ps_AF"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
      creator: "@sheen_af",
    },
    alternates: {
      canonical: `https://agency.sheen.af/services/${service.slug}`,
      languages: {
        "en-US": `https://agency.sheen.af/services/${service.slug}`,
        "fa-AF": `https://agency.sheen.af/services/${service.slug}`,
        "ps-AF": `https://agency.sheen.af/services/${service.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export default async function ServiceLayout({ children, params }) {
  const { id } = await params;
  const service = servicesData.find((s) => s.slug === id) || servicesData[0];

  // Generate structured data
  const serviceSchema = generateServiceSchema({
    title: service.title.en,
    description: service.description.en,
    pricing: service.pricing,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title.en, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
