"use client";

import { useTranslation } from "react-i18next";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiArrowUpRight, FiRefreshCw } from "react-icons/fi";

const EASE = [0.16, 1, 0.3, 1];

const LABELS = {
    faq: { en: "Frequently Asked Questions", da: "پرسش‌های متداول", pa: "ډیری پوښتل شوې پوښتنې" },
    updated: { en: "Updated", da: "به‌روزرسانی", pa: "تازه شوی" },
    aboutAuthor: { en: "About the author", da: "درباره نویسنده", pa: "د لیکوال په اړه" },
    keepReading: { en: "Keep reading", da: "ادامه مطالعه", pa: "نور ولولئ" },
};

/* Splits post content into heading, list and paragraph blocks.
   Posts are inconsistent about **Heading** formatting: some leave a blank line
   after the heading, others put the body text on the very next line. The older
   style used to render as one run-on paragraph with inline bold instead of a
   real <h2>, so a heading is peeled off its own line either way. A block whose
   lines all start with "- " or "1. " becomes a list. */
function parseArticle(content) {
    if (!content) return [];

    const toBlock = (text) => {
        const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
        if (lines.length && lines.every((l) => /^[-•]\s+/.test(l))) {
            return { type: "ul", items: lines.map((l) => l.replace(/^[-•]\s+/, "")) };
        }
        if (lines.length && lines.every((l) => /^\d+[.)]\s+/.test(l))) {
            return { type: "ol", items: lines.map((l) => l.replace(/^\d+[.)]\s+/, "")) };
        }
        return { type: "paragraph", text };
    };

    return content
        .split(/\r?\n\s*\r?\n/)
        .flatMap((block) => {
            const trimmed = block.trim();
            if (!trimmed) return [];

            const [firstLine, ...rest] = trimmed.split(/\r?\n/);
            const headingMatch = firstLine.trim().match(/^\*\*(.+?)\*\*$/);

            if (!headingMatch) return [toBlock(trimmed)];

            const blocks = [{ type: "heading", text: headingMatch[1].trim() }];
            const body = rest.join("\n").trim();
            if (body) blocks.push(toBlock(body));
            return blocks;
        });
}

const LINK_CLASS = "text-[var(--jade-deep)] underline underline-offset-4 decoration-1 hover:decoration-2";

/* Inline formatting: **bold** and [text](url) links. */
function renderInline(text) {
    return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g).map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) {
            return (
                <strong key={i} className="text-[var(--jade-deep)] font-semibold">
                    {bold[1]}
                </strong>
            );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
            const [, label, href] = link;
            return href.startsWith("/") ? (
                <Link key={i} href={href} className={LINK_CLASS}>{label}</Link>
            ) : (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>{label}</a>
            );
        }
        return part;
    });
}

export default function ClientBlogPage({ post, relatedPosts = [], author }) {
    const { t, i18n } = useTranslation();

    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

    const getLocalizedContent = (content) => {
        if (!content) return "";
        if (typeof content === "string") return content;
        return content[i18n.language] || content.en || "";
    };

    const formatDate = (iso) => new Date(iso).toLocaleDateString();
    const blocks = parseArticle(getLocalizedContent(post.content));
    const updated = post.updated && post.updated !== post.date ? post.updated : null;

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
                                <time dateTime={post.date}>{formatDate(post.date)}</time>
                            </span>
                            {updated && (
                                <span className="flex items-center gap-2">
                                    <FiRefreshCw className="text-[var(--jade-deep)]" />
                                    {getLocalizedContent(LABELS.updated)}{" "}
                                    <time dateTime={updated}>{formatDate(updated)}</time>
                                </span>
                            )}
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
                        {blocks.map((block, index) => {
                            if (block.type === "heading") {
                                return (
                                    <h2 key={index} className="display-sm mt-14 mb-5 first:mt-0">
                                        {block.text}
                                    </h2>
                                );
                            }
                            if (block.type === "ul" || block.type === "ol") {
                                const List = block.type;
                                return (
                                    <List
                                        key={index}
                                        className={`text-fluid-lg t-muted leading-[1.75] mb-6 max-w-[68ch] ps-6 space-y-2 ${block.type === "ul" ? "list-disc" : "list-decimal"} marker:text-[var(--jade-deep)]`}
                                    >
                                        {block.items.map((item, i) => (
                                            <li key={i}>{renderInline(item)}</li>
                                        ))}
                                    </List>
                                );
                            }
                            return (
                                <p
                                    key={index}
                                    // The opening paragraph is the direct answer; marked
                                    // speakable for voice assistants and AI summaries.
                                    {...(index === 0 ? { "data-speakable": "" } : {})}
                                    className="text-fluid-lg t-muted leading-[1.85] mb-6 max-w-[68ch]"
                                >
                                    {renderInline(block.text)}
                                </p>
                            );
                        })}
                    </motion.div>

                    {/* ---------------------------------------------------- FAQ */}
                    {post.faqs?.length > 0 && (
                        <section className="mt-16" aria-labelledby="faq-heading">
                            <hr className="rule mb-12" />
                            <h2 id="faq-heading" className="display-sm mb-8">
                                {getLocalizedContent(LABELS.faq)}
                            </h2>
                            <div className="space-y-3">
                                {post.faqs.map((faq, i) => (
                                    <div key={i} className="card card-pad !p-5">
                                        <h3 className="text-fluid-base font-bold">{getLocalizedContent(faq.q)}</h3>
                                        <p className="t-muted text-fluid-base leading-[1.8] mt-3">
                                            {getLocalizedContent(faq.a)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* ------------------------------------------------- Author */}
                    {author && (
                        <aside className="card card-pad !p-6 mt-16 flex flex-col gap-2" aria-label={getLocalizedContent(LABELS.aboutAuthor)}>
                            <span className="eyebrow">{getLocalizedContent(LABELS.aboutAuthor)}</span>
                            <p className="text-fluid-lg font-bold">
                                {post.author}
                                <span className="t-soft font-normal text-fluid-sm"> — {getLocalizedContent(author.role)}</span>
                            </p>
                            <p className="t-muted text-fluid-sm leading-[1.8]">{getLocalizedContent(author.bio)}</p>
                        </aside>
                    )}

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
                            <span className="eyebrow mb-4">{getLocalizedContent(LABELS.keepReading)}</span>
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
