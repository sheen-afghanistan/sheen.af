"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from "react-icons/fi";
import blogsData from "../../../data/blogs";
import { use } from "react";

export default function ClientBlogPage({ params }) {
    const { t, i18n } = useTranslation();
    const { id } = use(params);
    const postSlug = id;

    const getLocalizedContent = (content) => {
        if (!content) return "";
        if (typeof content === "string") return content;
        return content[i18n.language] || content.en || "";
    };

    // Find post by slug (or id fallback)
    const post = blogsData.find(p => p.slug === postSlug || p.id === postSlug) || blogsData[0];
    const relatedPosts = blogsData.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[var(--brand-dark)] to-black pt-20">
            <article className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link href="/blog">
                        <motion.button
                            whileHover={{ x: -5 }}
                            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
                        >
                            <FiArrowLeft />
                            {t("common.viewAll") || "Back to Blog"}
                        </motion.button>
                    </Link>

                    {/* Article Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                            {getLocalizedContent(post.title)}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
                            <span className="flex items-center gap-2">
                                <FiUser className="text-[var(--brand-gold)]" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <FiCalendar className="text-[var(--brand-gold)]" />
                                {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-2">
                                <FiClock className="text-[var(--brand-gold)]" />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 md:p-12 rounded-2xl mb-12"
                    >
                        <div className="prose prose-invert prose-lg max-w-none">
                            {getLocalizedContent(post.content)
                                .split("\n\n")
                                .map((paragraph, index) => {
                                    // Heading detection (markdown style **Heading**)
                                    if (paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")) {
                                        const heading = paragraph.replace(/\*\*/g, "");
                                        return (
                                            <h2 key={index} className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4 first:mt-0">
                                                {heading}
                                            </h2>
                                        );
                                    }
                                    // Regular paragraph with inline bold handling
                                    return (
                                        <p key={index} className="text-lg text-white/90 leading-relaxed mb-6">
                                            {paragraph.split("**").map((part, i) =>
                                                i % 2 === 1 ? (
                                                    <strong key={i} className="text-[var(--brand-gold)] font-semibold">
                                                        {part}
                                                    </strong>
                                                ) : (
                                                    part
                                                )
                                            )}
                                        </p>
                                    );
                                })}
                        </div>
                    </motion.div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <h2 className="text-3xl font-bold text-white mb-8">
                                {t("common.readMore") || "Related Articles"}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost, index) => (
                                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            className="glass p-6 rounded-2xl hover:bg-white/10 transition-all"
                                        >
                                            <h3 className="text-lg font-bold text-white mb-2 hover:text-[var(--brand-gold)] transition-colors">
                                                {getLocalizedContent(relatedPost.title)}
                                            </h3>
                                            <p className="text-white/70 text-sm mb-4">
                                                {getLocalizedContent(relatedPost.excerpt)}
                                            </p>
                                            <span className="text-sm text-white/60">{relatedPost.readTime}</span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </article>
        </div>
    );
}
