"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiUser, FiCalendar, FiShare2 } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function BlogPostPage({ params }) {
  const { t } = useTranslation();
  const postId = params?.id || "1";

  // Mock blog post data
  const post = {
    id: postId,
    title: "10 Web Design Trends for 2025",
    author: "Ahmad Rezai",
    date: "December 1, 2025",
    readTime: "5 min read",
    category: "Web Development",
    image: "🎨",
    content: `
      <p>The world of web design is constantly evolving, and 2025 promises to bring exciting new trends that will shape how we create digital experiences. In this article, we'll explore the top 10 web design trends you need to know.</p>

      <h2>1. Dark Mode Everything</h2>
      <p>Dark mode has become more than just a trend—it's now an expectation. Users love the reduced eye strain and modern aesthetic that dark interfaces provide. In 2025, we're seeing more sophisticated implementations with automatic switching and customizable themes.</p>

      <h2>2. Micro-Animations</h2>
      <p>Subtle animations that respond to user interactions create a more engaging and intuitive experience. From button hovers to page transitions, micro-animations add personality and guide users through your interface.</p>

      <h2>3. 3D Elements and Immersive Experiences</h2>
      <p>With WebGL and Three.js becoming more accessible, 3D elements are no longer reserved for gaming sites. Product configurators, interactive showcases, and immersive storytelling are becoming mainstream.</p>

      <h2>4. Glassmorphism</h2>
      <p>The frosted glass effect continues to dominate modern interfaces, creating depth and visual hierarchy while maintaining a clean, minimalist aesthetic.</p>

      <h2>5. Bold Typography</h2>
      <p>Large, expressive typography is making a statement. Custom fonts and creative text treatments are being used to create memorable brand experiences.</p>

      <h2>Conclusion</h2>
      <p>These trends represent the future of web design, but remember—the best design is one that serves your users' needs while reflecting your brand's unique identity.</p>
    `,
  };

  const relatedPosts = [
    {
      id: 2,
      title: "SEO Best Practices for 2025",
      image: "🚀",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Building E-Commerce Sites That Convert",
      image: "🛒",
      readTime: "8 min read",
    },
    {
      id: 4,
      title: "The Power of Brand Identity",
      image: "✨",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--brand-dark)] to-black pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--brand-accent)]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
            >
              <FiArrowLeft />
              Back to Blog
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-4 py-2 rounded-full glass text-[var(--brand-gold)] mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/70 mb-8">
              <div className="flex items-center gap-2">
                <FiUser />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-white/70 flex items-center gap-2">
                <FiShare2 />
                Share:
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-500/20 transition-all"
              >
                <FaFacebookF className="text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-400/20 transition-all"
              >
                <FaTwitter className="text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600/20 transition-all"
              >
                <FaLinkedinIn className="text-white" />
              </motion.button>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] rounded-2xl flex items-center justify-center text-9xl mb-12">
              {post.image}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-2xl prose prose-invert prose-lg max-w-none"
          >
            <div
              className="text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Related Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Link href={`/blog/${relatedPost.id}`}>
                  <div className="aspect-video bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] flex items-center justify-center text-8xl">
                    {relatedPost.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <FiClock />
                      {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
