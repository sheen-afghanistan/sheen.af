"use client";

import { useTranslation } from "react-i18next";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiArrowUpRight } from "react-icons/fi";
import blogsData from "../../../data/blogs";
import { use } from "react";

const EASE = [0.16, 1, 0.3, 1];

/* Splits post content into heading and paragraph blocks.
   Posts are inconsistent about **Heading** formatting: some leave a blank line
   after the heading, others put the body text on the very next line. The older
   style used to render as one run-on paragraph with inline bold instead of a
   real <h2>, so a heading is peeled off its own line either way. */
function parseArticle(content) {
    if (!content) return [];

    return content
        .split(/\r?\n\s*\r?\n/)
        .flatMap((block) => {
            const trimmed = block.trim();
            if (!trimmed) return [];

            const [firstLine, ...rest] = trimmed.split(/\r?\n/);
            const headingMatch = firstLine.trim().match(/^\*\*(.+?)\*\*$/);

            if (!headingMatch) return [{ type: "paragraph", text: trimmed }];

            const blocks = [{ type: "heading", text: headingMatch[1].trim() }];
            const body = rest.join("\n").trim();
            if (body) blocks.push({ type: "paragraph", text: body });
            return blocks;
        });
}

export default function ClientBlogPage({ params }) {
    const { t, i18n } = useTranslation();
    const { id } = use(params);
    const postSlug = id;

    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

    const getLocalizedContent = (content) => {
        if (!content) return "";
        if (typeof content === "string") return content;
        return content[i18n.language] || content.en || "";
    };

    // Find post by slug (or id fallback)
    const post = blogsData.find(p => p.slug === postSlug || p.id === postSlug) || blogsData[0];
    const relatedPosts = blogsData.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

    return (
        <div className="page">

            {/* Reading progress */}
            <motion.div
                aria-hidden="true"
                style={{ scaleX: progress }}
                className="fixed top-0 inset-x-0 z-[60] h-[2px] origin-left bg-[var(--jade)]"
            />

            <article className="relative pt-28 pb-24 sm:pt-32">
                <div className="shell-narrow relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 mb-10 text-fluid-sm t-soft transition-colors group"
                    >
                        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1 flip-rtl" />
                        {t("common.viewAll") || "Back to Blog"}
                    </Link>

                    {/* -------------------------------------------------- Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        <span className="eyebrow mb-5">{post.category}</span>
                        <h1 className="display-lg">{getLocalizedContent(post.title)}</h1>

                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 data t-soft">
                            <span className="flex items-center gap-2">
                                <FiUser className="text-[var(--jade-deep)]" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <FiCalendar className="text-[var(--jade-deep)]" />
                                {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-2">
                                <FiClock className="text-[var(--jade-deep)]" />
                                {post.readTime}
                            </span>
                        </div>

                        <hr className="rule mt-10" />
                    </motion.header>

                    {/* ------------------------------------------------- Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
                        className="mt-12"
                    >
                        {parseArticle(getLocalizedContent(post.content)).map((block, index) =>
                            block.type === "heading" ? (
                                <h2
                                    key={index}
                                    className="display-sm mt-14 mb-5 first:mt-0"
                                >
                                    {block.text}
                                </h2>
                            ) : (
                                <p
                                    key={index}
                                    className="text-fluid-lg t-muted leading-[1.85] mb-6 max-w-[68ch]"
                                >
                                    {block.text.split("**").map((part, i) =>
                                        i % 2 === 1 ? (
                                            <strong key={i} className="text-[var(--jade-deep)] font-semibold">
                                                {part}
                                            </strong>
                                        ) : (
                                            part
                                        )
                                    )}
                                </p>
                            )
                        )}
                    </motion.div>

                    {/* -------------------------------------------------- Related */}
                    {relatedPosts.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, ease: EASE }}
                            className="mt-20"
                        >
                            <hr className="rule mb-12" />
                            <span className="eyebrow mb-4">Keep reading</span>
                            <h2 className="display-sm mb-8">
                                {t("common.readMore") || "Related Articles"}
                            </h2>

                            <div className="grid sm:grid-cols-3 gap-4">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="group"
                                    >
                                        <article className="card card-lift card-pad !p-5 h-full">
                                            <h3 className="text-fluid-base font-bold transition-colors duration-300 group-hover:text-[var(--jade-deep)]">
                                                {getLocalizedContent(relatedPost.title)}
                                            </h3>
                                            <p className="t-muted text-fluid-xs mt-2.5 line-clamp-3">
                                                {getLocalizedContent(relatedPost.excerpt)}
                                            </p>
                                            <span className="mt-auto pt-5 flex items-center justify-between data t-soft">
                                                {relatedPost.readTime}
                                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flip-rtl" />
                                            </span>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </div>
            </article>
        </div>
    );
}
