import projects from "../../../data/portfolio";
import { generateCreativeWorkSchema, generateBreadcrumbSchema } from "@/lib/seo-utils";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const projectSlug = id;

  // Find project by slug
  const project = projects.find((p) => p.slug === projectSlug || p.id === projectSlug) || projects[0];

  const title = project.title.en;
  const description = project.description.en;
  const imageUrl = project.image || "/logo.png";

  return {
    title,
    description,
    keywords: project.tags || [],
    openGraph: {
      type: "website",
      title,
      description,
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
      creator: "@sheen_af",
    },
    alternates: {
      canonical: `https://agency.sheen.af/portfolio/${project.slug}`,
      languages: {
        "en-US": `https://agency.sheen.af/portfolio/${project.slug}`,
        "fa-AF": `https://agency.sheen.af/portfolio/${project.slug}`,
        "ps-AF": `https://agency.sheen.af/portfolio/${project.slug}`,
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

export default async function PortfolioDetailLayout({ children, params }) {
  const { id } = await params;
  const project = projects.find((p) => p.slug === id || p.id === id) || projects[0];

  // Generate structured data
  const creativeWorkSchema = generateCreativeWorkSchema({
    title: project.title.en,
    description: project.description.en,
    image: project.image,
    year: project.year,
    tags: project.tags,
    slug: project.slug,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: project.title.en, path: `/portfolio/${project.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
