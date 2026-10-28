import blogsData from '@/data/blogs';
import servicesData from '@/data/services';
import projects from '@/data/portfolio';
import { SITE_URL } from '@/lib/site';

export default function sitemap() {
    const baseUrl = SITE_URL;
    const now = new Date();
    // The blog index changes whenever the newest post does.
    const latestPost = new Date(blogsData[0]?.updated || blogsData[0]?.date || now);

    // Static pages
    const staticPages = [
        { path: '', changeFrequency: 'weekly', priority: 1.0, lastModified: latestPost },
        { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
        { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
        { path: '/portfolio', changeFrequency: 'monthly', priority: 0.9 },
        { path: '/blog', changeFrequency: 'daily', priority: 0.9, lastModified: latestPost },
        { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
        { path: '/book', changeFrequency: 'yearly', priority: 0.7 },
        { path: '/blood-donation', changeFrequency: 'monthly', priority: 0.5 },
    ].map(({ path, lastModified = now, ...rest }) => ({
        url: `${baseUrl}${path}`,
        lastModified,
        ...rest,
    }));

    // Dynamic blog pages
    const blogPages = blogsData.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.updated || blog.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Dynamic service pages
    const servicePages = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Dynamic portfolio pages
    const portfolioPages = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.7,
    }));

    return [
        ...staticPages,
        ...blogPages,
        ...servicePages,
        ...portfolioPages,
    ];
}
