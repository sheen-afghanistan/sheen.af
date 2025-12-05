import blogsData from "../../../data/blogs";

export async function generateMetadata({ params }) {
  const { id } = await(params);
  const postSlug = id;

  // Find post by slug
  const post = blogsData.find(p => p.slug === postSlug || p.id === postSlug) || blogsData[0];

  return {
    title: `${post.title.en} - Sheen Blog`,
    description: post.excerpt.en,
    keywords: post.tags ? post.tags.join(', ') : '',
  };
}

export default function BlogDetailLayout({ children }) {
  return <>{children}</>;
}
