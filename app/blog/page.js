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
        <div className="min-h-screen bg-[#020617] text-white overflow-hidden py-20 relative">
            {/* Abstract Background Shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
                <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-brand-accent/5 blur-[80px]"></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-block px-4 py-2 rounded-full glass border border-brand-primary/30 text-brand-accent mb-6 font-mono text-sm">
                                Knowledge Hub
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8">
                                {t("blog.title") || "Our Blog"}
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                {t("blog.subtitle") || "Insights, tips, and trends in digital marketing"}
                            </p>
                        </motion.div>

                        {/* Search and Filter */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <div className="glass-card p-8 rounded-3xl border border-white/5">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 relative">
                                        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                                        <input
                                            type="text"
                                            placeholder={t("blog.search") || "Search articles..."}
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`px-5 py-2.5 rounded-full transition-all text-sm font-medium ${selectedCategory === category.id
                                                ? "bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/20"
                                                : "glass text-gray-400 hover:bg-white/10 hover:text-white"
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
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <Link href={`/blog/${post.slug}`}>
                                        <article className="glass-card rounded-3xl overflow-hidden hover:border-brand-primary/50 transition-all group h-full border border-white/5 flex flex-col">
                                            <div className="aspect-w-16 aspect-h-9 bg-white/5 relative overflow-hidden h-48">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60"></div>
                                                {/* Placeholder for image if available, otherwise gradient pattern */}
                                                <div className="absolute inset-0 bg-brand-primary/10 group-hover:scale-110 transition-transform duration-700"></div>
                                            </div>
                                            <div className="p-8 flex-grow flex flex-col">
                                                <div className="flex items-center gap-4 text-xs text-brand-primary font-mono mb-4 uppercase tracking-wider">
                                                    <span className="flex items-center gap-2">
                                                        <FiCalendar />
                                                        {new Date(post.date).toLocaleDateString()}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-brand-primary/50"></span>
                                                    <span className="flex items-center gap-2">
                                                        <FiClock />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                                                    {getLocalizedContent(post.title)}
                                                </h3>
                                                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">{getLocalizedContent(post.excerpt)}</p>
                                                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                                                    <span className="text-sm text-white/50">{post.author}</span>
                                                    <span className="flex items-center gap-2 text-brand-gold group-hover:text-brand-accent transition-colors text-sm font-semibold">
                                                        {t("common.readMore") || "Read Article"}
                                                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {filteredPosts.length === 0 && (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FiSearch className="text-3xl text-gray-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">No Results Found</h3>
                                <p className="text-gray-400 text-lg">
                                    {t("blog.noResults") || "We couldn't find any articles matching your search. Try different keywords."}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
