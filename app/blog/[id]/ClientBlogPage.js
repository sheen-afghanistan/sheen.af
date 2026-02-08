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
        <div className="min-h-screen bg-[#020617] text-white overflow-hidden py-20 relative">
            {/* Abstract Background Shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
            </div>

            <article className="py-20 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link href="/blog">
                        <motion.button
                            whileHover={{ x: -5 }}
                            className="flex items-center gap-2 text-gray-400 hover:text-brand-primary mb-8 transition-colors group font-medium"
                        >
                            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            {t("common.viewAll") || "Back to Blog"}
                        </motion.button>
                    </Link>

                    {/* Article Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-block px-4 py-2 rounded-full glass border border-brand-primary/30 text-brand-primary mb-6 font-mono text-sm uppercase tracking-wider">
                            {post.category || "Blog Post"}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            {getLocalizedContent(post.title)}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-12 border-b border-white/10 pb-8">
                            <span className="flex items-center gap-2 text-sm font-medium">
                                <span className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                    <FiUser />
                                </span>
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2 text-sm font-medium">
                                <span className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                    <FiCalendar />
                                </span>
                                {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-2 text-sm font-medium">
                                <span className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                    <FiClock />
                                </span>
                                {post.readTime}
                            </span>
                        </div>
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 md:p-12 rounded-3xl mb-16 border border-white/5 relative overflow-hidden"
                    >
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-brand-primary prose-a:text-brand-primary hover:prose-a:text-brand-accent">
                            {getLocalizedContent(post.content)
                                .split("\n\n")
                                .map((paragraph, index) => {
                                    // Heading detection (markdown style **Heading**)
                                    if (paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")) {
                                        const heading = paragraph.replace(/\*\*/g, "");
                                        return (
                                            <h2 key={index} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 first:mt-0 relative inline-block">
                                                <span className="relative z-10">{heading}</span>
                                                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/20 -z-0 transform -rotate-1"></span>
                                            </h2>
                                        );
                                    }
                                    // Regular paragraph with inline bold handling
                                    return (
                                        <p key={index} className="text-lg text-gray-300 leading-relaxed mb-8">
                                            {paragraph.split("**").map((part, i) =>
                                                i % 2 === 1 ? (
                                                    <strong key={i} className="text-brand-primary font-bold">
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
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-3xl font-bold text-white">
                                    {t("common.readMore") || "Related Articles"}
                                </h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost, index) => (
                                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            whileHover={{ y: -10 }}
                                            className="glass-card p-6 rounded-3xl hover:border-brand-primary/50 transition-all border border-white/5 h-full flex flex-col group bg-white/5"
                                        >
                                            <div className="bg-brand-primary/10 text-brand-primary text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-4">
                                                {relatedPost.category || "Blog"}
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                                                {getLocalizedContent(relatedPost.title)}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                                {getLocalizedContent(relatedPost.excerpt)}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                                                <span className="text-xs text-brand-gold font-medium flex items-center gap-1">
                                                    Read Article <FiArrowLeft className="rotate-180" />
                                                </span>
                                                <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                                            </div>
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
