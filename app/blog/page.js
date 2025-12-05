"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiSearch, FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import blogsData from "../../data/blogs";

export default function BlogPage() {
    const { t, i18n } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const getLocalizedContent = (content) => {
        if (!content) return "";
        if (typeof content === 'string') return content;
        return content[i18n.language] || content.en || "";
    };

    const categories = [
        { id: "all", label: { en: "All Posts", da: "همه پست‌ها", pa: "ټولې پوسټونه" } },
        { id: "web-dev", label: { en: "Web Development", da: "توسعه وب", pa: "ویب پرمختګ" } },
        { id: "seo", label: { en: "SEO", da: "سئو", pa: "SEO" } },
        { id: "marketing", label: { en: "Marketing", da: "بازاریابی", pa: "بازار موندنه" } },
        { id: "ecommerce", label: { en: "E-Commerce", da: "تجارت الکترونیک", pa: "ای کامرس" } },
        { id: "ads", label: { en: "Advertising", da: "تبلیغات", pa: "اعلانات" } }
    ];

    const filteredPosts = blogsData.filter(post => {
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
        const title = getLocalizedContent(post.title);
        const excerpt = getLocalizedContent(post.excerpt);
        const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
                            {t("blog.title") || "Our Blog"}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                            {t("blog.subtitle") || "Insights, tips, and trends in digital marketing"}
                        </p>
                    </motion.div>

                    {/* Search and Filter */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="glass p-6 rounded-2xl">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                                    <input
                                        type="text"
                                        placeholder={t("blog.search") || "Search articles..."}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-[var(--brand-gold)] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-4 py-2 rounded-full transition-all ${selectedCategory === category.id
                                            ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                                            : "glass text-white/80 hover:bg-white/10"
                                            }`}
                                    >
                                        {getLocalizedContent(category.label)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                                            <span className="flex items-center gap-1">
                                                <FiCalendar className="text-[var(--brand-gold)]" />
                                                {new Date(post.date).toLocaleDateString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FiClock className="text-[var(--brand-gold)]" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                                            {getLocalizedContent(post.title)}
                                        </h3>
                                        <p className="text-white/70 mb-4">{getLocalizedContent(post.excerpt)}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-white/60">{post.author}</span>
                                            <span className="flex items-center gap-2 text-[var(--brand-gold)] group-hover:gap-3 transition-all">
                                                {t("common.readMore") || "Read More"}
                                                <FiArrowRight />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-white/60 text-xl">
                                {t("blog.noResults") || "No articles found. Try a different search or category."}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
