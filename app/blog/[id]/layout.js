import blogsData from "../../../data/blogs";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo-utils";

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const postSlug = id;

  // Find post by slug
  const post = blogsData.find((p) => p.slug === postSlug || p.id === postSlug) || blogsData[0];

  const title = post.title.en;
  const description = post.excerpt.en;
  const imageUrl = post.image || "/logo.png";

  return {
    title,
    description,
    keywords: post.tags || [],
    authors: [{ name: post.author || "Sheen Digital Agency" }],
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author || "Sheen Digital Agency"],
      tags: post.tags || [],
      section: post.category || "Technology",
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
      canonical: `https://agency.sheen.af/blog/${post.slug}`,
      languages: {
        "en-US": `https://agency.sheen.af/blog/${post.slug}`,
        "fa-AF": `https://agency.sheen.af/blog/${post.slug}`,
        "ps-AF": `https://agency.sheen.af/blog/${post.slug}`,
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

export default async function BlogDetailLayout({ children, params }) {
  const { id } = await params;
  const post = blogsData.find((p) => p.slug === id || p.id === id) || blogsData[0];

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: post.title.en,
    excerpt: post.excerpt.en,
    image: post.image,
    date: post.date,
    author: post.author,
    slug: post.slug,
    tags: post.tags,
    category: post.category,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title.en, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
