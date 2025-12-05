/**
 * SEO Utilities for generating metadata and structured data
 */

/**
 * Generate Article Schema for blog posts
 */
export function generateArticleSchema(article, baseUrl = 'https://agency.sheen.af') {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.image ? `${baseUrl}${article.image}` : `${baseUrl}/logo.png`,
        datePublished: article.date,
        dateModified: article.date,
        author: {
            '@type': 'Person',
            name: article.author || 'Sheen Digital Agency',
            url: baseUrl,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Sheen Digital Agency',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/blog/${article.slug}`,
        },
        keywords: article.tags?.join(', ') || '',
        articleSection: article.category || 'Technology',
        inLanguage: ['en', 'fa', 'ps'],
    };
}

/**
 * Generate Service Schema
 */
export function generateServiceSchema(service, baseUrl = 'https://agency.sheen.af') {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: 'Sheen Digital Agency',
            url: baseUrl,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Afghanistan',
        },
        serviceType: service.title,
        offers: service.pricing ? Object.values(service.pricing).map(tier => ({
            '@type': 'Offer',
            name: tier.name,
            price: tier.price,
            priceCurrency: 'USD',
            description: tier.features?.join(', ') || '',
        })) : [],
    };
}

/**
 * Generate Product/Portfolio Schema
 */
export function generateCreativeWorkSchema(project, baseUrl = 'https://agency.sheen.af') {
    return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        image: project.image ? `${baseUrl}${project.image}` : `${baseUrl}/logo.png`,
        creator: {
            '@type': 'Organization',
            name: 'Sheen Digital Agency',
            url: baseUrl,
        },
        dateCreated: project.year,
        keywords: project.tags?.join(', ') || '',
        url: `${baseUrl}/portfolio/${project.slug}`,
    };
}

/**
 * Generate FAQ Schema
 */
export function generateFAQSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items, baseUrl = 'https://agency.sheen.af') {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.path}`,
        })),
    };
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata(blog, locale = 'en') {
    const title = typeof blog.title === 'object' ? blog.title[locale] || blog.title.en : blog.title;
    const excerpt = typeof blog.excerpt === 'object' ? blog.excerpt[locale] || blog.excerpt.en : blog.excerpt;

    return {
        title,
        description: excerpt,
        keywords: blog.tags || [],
        authors: [{ name: blog.author || 'Sheen Digital Agency' }],
        openGraph: {
            type: 'article',
            title,
            description: excerpt,
            publishedTime: blog.date,
            authors: [blog.author || 'Sheen Digital Agency'],
            tags: blog.tags || [],
            images: [
                {
                    url: blog.image || '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: excerpt,
            images: [blog.image || '/logo.png'],
        },
        alternates: {
            canonical: `https://agency.sheen.af/blog/${blog.slug}`,
        },
    };
}

/**
 * Generate metadata for services
 */
export function generateServiceMetadata(service, locale = 'en') {
    const title = typeof service.title === 'object' ? service.title[locale] || service.title.en : service.title;
    const description = typeof service.description === 'object' ? service.description[locale] || service.description.en : service.description;

    return {
        title,
        description,
        keywords: service.features || [],
        openGraph: {
            type: 'website',
            title,
            description,
            images: [
                {
                    url: '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/logo.png'],
        },
        alternates: {
            canonical: `https://agency.sheen.af/services/${service.slug}`,
        },
    };
}

/**
 * Generate metadata for portfolio
 */
export function generatePortfolioMetadata(project, locale = 'en') {
    const title = typeof project.title === 'object' ? project.title[locale] || project.title.en : project.title;
    const description = typeof project.description === 'object' ? project.description[locale] || project.description.en : project.description;

    return {
        title,
        description,
        keywords: project.tags || [],
        openGraph: {
            type: 'website',
            title,
            description,
            images: [
                {
                    url: project.image || '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [project.image || '/logo.png'],
        },
        alternates: {
            canonical: `https://agency.sheen.af/portfolio/${project.slug}`,
        },
    };
}
