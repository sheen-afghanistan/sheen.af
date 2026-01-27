import servicesData from "../../../data/services";
import ClientServicePage from "./ClientServicePage";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = servicesData.find((s) => s.slug === id || s.id === id);

  if (!service) {
    return {
      title: "Service Not Found | Sheen",
      description: "The requested service could not be found.",
    };
  }

  const title = service.title.en || "Service";
  const description = service.shortDesc.en || "";

  return {
    title: `${title} | Sheen Digital Agency`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://agency.sheen.af/services/${service.slug}`,
      // Add images if available in service data, or use default
      images: [
        {
          url: "/logo.png", // Default image since servicesData doesn't seemingly have specific images
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/logo.png"],
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.slug,
  }));
}

export default function ServicePage({ params }) {
  return <ClientServicePage params={params} />;
}
