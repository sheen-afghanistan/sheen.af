import { notFound } from "next/navigation";
import blogsData from "../../../data/blogs";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo-utils";
import { SITE_URL } from '@/lib/site';

// Only slugs that exist get a page; anything else is a real 404 instead of
// silently rendering the first post under the wrong URL.
export const dynamicParams = false;

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.slug,
  }));
}

const findPost = (id) => blogsData.find((p) => p.slug === id);

const CATEGORY_NAMES = {
  "web-dev": "Web Development",
  "mobile-apps": "Mobile Apps",
  seo: "SEO",
  marketing: "Marketing",
  ecommerce: "E-Commerce",
  ads: "Advertising",
  branding: "Branding",
  company: "Inside Sheen",
  ai: "AI & Automation",
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = findPost(id);
  if (!post) return {};

  const title = post.title.en;
  const description = post.excerpt.en;
  const imageUrl = post.image || "/logo.png";
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title,
    description,
    keywords: post.tags || [],
    authors: [{ name: post.author || "Sheen Digital Agency", url: `${SITE_URL}/about` }],
    category: CATEGORY_NAMES[post.category] || post.category,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Sheen Digital Agency",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author || "Sheen Digital Agency"],
      tags: post.tags || [],
      section: CATEGORY_NAMES[post.category] || post.category || "Technology",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@sheen_af",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogDetailLayout({ children, params }) {
  const { id } = await params;
  const post = findPost(id);
  if (!post) notFound();

  const schemas = [
    generateArticleSchema({
      title: post.title.en,
      excerpt: post.excerpt.en,
      image: post.image,
      date: post.date,
      updated: post.updated,
      author: post.author,
      slug: post.slug,
      tags: post.tags,
      category: CATEGORY_NAMES[post.category] || post.category,
      wordCount: post.content?.en?.split(/\s+/).filter(Boolean).length,
    }),
    generateBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title.en, path: `/blog/${post.slug}` },
    ]),
  ];

  // The same questions are rendered visibly at the end of the article.
  if (post.faqs?.length) {
    schemas.push(
      generateFAQSchema(post.faqs.map((f) => ({ question: f.q.en, answer: f.a.en })))
    );
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
