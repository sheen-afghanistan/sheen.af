import { SITE_URL } from '@/lib/site';

export const BLOG_DESCRIPTION =
  "Practical guides on web design, mobile apps, SEO, AI search (GEO), Google Ads, social media and e-commerce for businesses in Afghanistan and the Afghan diaspora.";

// Applies to /blog; each post's own layout overrides title, canonical etc.
export const metadata = {
  title: "Blog: Web, SEO, AI Search & Marketing Guides",
  description: BLOG_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/blog`,
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Sheen Blog — Web, SEO, AI Search & Marketing Guides",
    description: BLOG_DESCRIPTION,
  },
};

export default function BlogLayout({ children }) {
  return children;
}
