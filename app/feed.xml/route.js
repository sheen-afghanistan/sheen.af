import blogsData from '@/data/blogs';
import { SITE_URL } from '@/lib/site';

// RSS 2.0 feed of the blog. Feed readers, aggregators and some AI crawlers
// discover new posts here faster than through the sitemap.
export const dynamic = 'force-static';

const escapeXml = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export function GET() {
  const items = blogsData.slice(0, 50).map((post) => {
    const link = `${SITE_URL}/blog/${post.slug}`;
    return [
      '    <item>',
      `      <title>${escapeXml(post.title.en)}</title>`,
      `      <link>${link}</link>`,
      `      <guid isPermaLink="true">${link}</guid>`,
      `      <description>${escapeXml(post.excerpt.en)}</description>`,
      `      <dc:creator>${escapeXml(post.author)}</dc:creator>`,
      `      <category>${escapeXml(post.category)}</category>`,
      `      <pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
      '    </item>',
    ].join('\n');
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Sheen Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Web design, mobile apps, SEO, AI search and digital marketing guides from Sheen Digital Agency, Kabul.</description>
    <language>en</language>
    <lastBuildDate>${new Date(blogsData[0]?.updated || blogsData[0]?.date || Date.now()).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
