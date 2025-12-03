"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiSearch, FiClock, FiUser } from "react-icons/fi";

export default function BlogPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "web-dev", label: "Web Development" },
    { id: "seo", label: "SEO" },
    { id: "marketing", label: "Digital Marketing" },
    { id: "design", label: "Design" },
    { id: "business", label: "Business" },
  ];

  const posts = [
    {
      id: 1,
      title: "10 Web Design Trends for 2025",
      excerpt: "Discover the latest trends shaping modern web design and how to implement them in your projects.",
      category: "web-dev",
      author: "Ahmad Rezai",
      date: "Dec 1, 2025",
      readTime: "5 min read",
      image: "🎨",
    },
    {
      id: 2,
      title: "SEO Best Practices for Afghan Businesses",
      excerpt: "Learn how to optimize your website for search engines and reach more customers in Afghanistan.",
      category: "seo",
      author: "Sara Ahmadi",
      date: "Nov 28, 2025",
      readTime: "7 min read",
      image: "🚀",
    },
    {
      id: 3,
      title: "Google Ads vs Facebook Ads: Which is Better?",
      excerpt: "A comprehensive comparison of two major advertising platforms and when to use each.",
      category: "marketing",
      author: "Hamid Karimi",
      date: "Nov 25, 2025",
      readTime: "6 min read",
      image: "📊",
    },
    {
      id: 4,
      title: "Building E-Commerce Sites That Convert",
      excerpt: "Essential features and strategies for creating successful online stores.",
      category: "web-dev",
      author: "Fatima Nazari",
      date: "Nov 20, 2025",
      readTime: "8 min read",
      image: "🛒",
    },
    {
      id: 5,
      title: "The Power of Brand Identity",
      excerpt: "Why consistent branding matters and how to create a memorable brand identity.",
      category: "design",
      author: "Ahmad Rezai",
      date: "Nov 15, 2025",
      readTime: "5 min read",
      image: "✨",
    },
    {
      id: 6,
      title: "Digital Transformation for Afghan SMEs",
      excerpt: "How small and medium enterprises can leverage technology for growth.",
      category: "business",
      author: "Sara Ahmadi",
      date: "Nov 10, 2025",
      readTime: "6 min read",
      image: "💼",
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Insights, tips, and news from the world of digital marketing
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 text-xl" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-full glass text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                    : "glass text-white/80 hover:bg-white/10"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="aspect-video bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] flex items-center justify-center text-8xl">
                    {post.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                      <span className="flex items-center gap-1">
                        <FiUser className="text-xs" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="text-xs" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/70 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-sm">{post.date}</span>
                      <span className="text-[var(--brand-gold)] font-semibold">
                        {t("common.readMore")} →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-xl">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get the latest articles and insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full glass text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-[var(--brand-dark)] font-bold shadow-xl"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
