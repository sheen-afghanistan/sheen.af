import { notFound } from "next/navigation";
import blogsData, { toPostSummary } from "../../../data/blogs";
import { getAuthor } from "@/lib/authors";
import ClientBlogPage from "./ClientBlogPage";

// Metadata and structured data live in ./layout.js.

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    id: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = blogsData.find((p) => p.slug === id);
  if (!post) notFound();

  // Same-category posts first, topped up with the newest posts, so every
  // article links onward to three others (internal links help crawl depth).
  const sameCategory = blogsData.filter((p) => p.category === post.category && p.id !== post.id);
  const others = blogsData.filter((p) => p.category !== post.category && p.id !== post.id);
  const related = [...sameCategory, ...others].slice(0, 3).map(toPostSummary);

  // Only this post and three summaries reach the client bundle.
  return <ClientBlogPage post={post} relatedPosts={related} author={getAuthor(post.author)} />;
}
