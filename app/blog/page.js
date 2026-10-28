import blogsData, { toPostSummary } from "../../data/blogs";
import { generateBreadcrumbSchema } from "@/lib/seo-utils";
import { SITE_URL } from '@/lib/site';
import { BLOG_DESCRIPTION } from "./layout";
import BlogClient from "./BlogClient";

// Server wrapper: hands the client listing card summaries only, so the blog
// index doesn't ship every article body in its JavaScript.
export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "Sheen Blog",
    description: BLOG_DESCRIPTION,
    inLanguage: ["en", "fa-AF", "ps-AF"],
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: blogsData.slice(0, 30).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title.en,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      author: { "@type": "Person", name: post.author },
    })),
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogClient posts={blogsData.map(toPostSummary)} />
    </>
  );
}
