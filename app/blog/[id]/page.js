import Link from "next/link";
import blogsData from "../../../data/blogs";
import ClientBlogPage from "./ClientBlogPage";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogsData.find((p) => p.slug === id || p.id === id);

  if (!post) {
    return {
      title: "Blog Post Not Found | Sheen",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.title.en || post.title.da || "Blog Post";
  const description = post.excerpt.en || post.excerpt.da || "";
  const keywords = post.tags ? post.tags.join(", ") : "";

  return {
    title: `${title} | Sheen Digital Agency`,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: `https://agency.sheen.af/blog/${post.slug}`,
      images: [
        {
          url: post.image || "/logo.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [post.image || "/logo.png"],
    },
  };
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    id: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  return <ClientBlogPage params={params} />;
}
