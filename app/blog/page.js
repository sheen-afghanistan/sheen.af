"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiSearch, FiCalendar, FiClock, FiArrowUpRight } from "react-icons/fi";
import blogsData from "../../data/blogs";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1];

const CATEGORY_LABELS = {
    "web-dev": { en: "Web Development", da: "توسعه وب", pa: "ویب پرمختګ" },
    "mobile-apps": { en: "Mobile Apps", da: "اپلیکیشن موبایل", pa: "موبایل اپونه" },
    seo: { en: "SEO", da: "سئو", pa: "SEO" },
    marketing: { en: "Marketing", da: "بازاریابی", pa: "بازار موندنه" },
    ecommerce: { en: "E-Commerce", da: "تجارت الکترونیک", pa: "ای کامرس" },
    ads: { en: "Advertising", da: "تبلیغات", pa: "اعلانات" },
    branding: { en: "Branding", da: "برندسازی", pa: "برنډنګ" },
    company: { en: "Inside Sheen", da: "درباره شین", pa: "د شین په اړه" },
};

export default function BlogPage() {
    const { t, i18n } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const getLocalizedContent = (content) => {
        if (!content) return "";
        if (typeof content === 'string') return content;
        return content[i18n.language] || content.en || "";
    };

    // Only categories that posts actually use get a tab, and every used
    // category gets one — 'branding' and 'company' were previously unreachable.
    const categories = useMemo(() => {
        const present = [...new Set(blogsData.map((p) => p.category).filter(Boolean))];
        return [
            { id: "all", label: { en: "All Posts", da: "همه پست‌ها", pa: "ټولې پوسټونه" } },
            ...present.map((id) => ({
                id,
                label: CATEGORY_LABELS[id] || {
                    en: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " "),
                },
            })),
        ];
    }, []);

    const filteredPosts = blogsData.filter(post => {
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
        const title = getLocalizedContent(post.title);
        const excerpt = getLocalizedContent(post.excerpt);
        const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="page">

            <PageHero
                eyebrow={t("nav.blog")}
                title={t("blog.title") || "Our Blog"}
                subtitle={t("blog.subtitle") || "Insights, tips, and trends in digital marketing"}
            />

            {/* ------------------------------------------------- Search & filter */}
            <section className="pb-12">
                <div className="shell">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="relative">
                            <FiSearch
                                aria-hidden="true"
                                className="absolute start-4 top-1/2 -translate-y-1/2 t-soft"
                            />
                            <input
                                type="search"
                                aria-label={t("blog.search") || "Search articles"}
                                placeholder={t("blog.search") || "Search articles..."}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="field !ps-11 !py-3.5"
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mt-5">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    aria-pressed={selectedCategory === category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`chip ${selectedCategory === category.id ? "chip-active" : ""}`}
                                >
                                    {getLocalizedContent(category.label)}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------------------------------------- Posts */}
            <section className="pb-24">
                <div className="shell">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: (index % 3) * 0.07, duration: 0.5, ease: EASE }}
                                className="card card-lift group"
                            >
                                <Link href={`/blog/${post.slug}`} className="card-pad flex flex-col h-full">
                                    <div className="flex items-center gap-4 data t-soft">
                                        <span className="flex items-center gap-1.5">
                                            <FiCalendar className="text-[var(--jade-deep)]" />
                                            {new Date(post.date).toLocaleDateString()}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <FiClock className="text-[var(--jade-deep)]" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-fluid-lg font-bold mt-4 transition-colors duration-300 group-hover:text-[var(--jade-deep)]">
                                        {getLocalizedContent(post.title)}
                                    </h2>
                                    <p className="t-muted text-fluid-sm mt-3 line-clamp-3">
                                        {getLocalizedContent(post.excerpt)}
                                    </p>

                                    <div className="mt-auto pt-6">
                                        <hr className="rule mb-4" />
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="text-fluid-xs t-soft">{post.author}</span>
                                            <span className="inline-flex items-center gap-1.5 text-fluid-xs font-medium text-[var(--jade)]">
                                                {t("common.readMore") || "Read More"}
                                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flip-rtl" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="card card-pad !py-20 text-center max-w-lg mx-auto">
                            <p className="lede">
                                {t("blog.noResults") || "No articles found. Try a different search or category."}
                            </p>
                            <button
                                type="button"
                                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                                className="btn btn-secondary btn-sm mt-6 mx-auto"
                            >
                                Reset filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
