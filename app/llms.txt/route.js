import blogsData from '@/data/blogs';
import servicesData from '@/data/services';
import projects from '@/data/portfolio';
import { SITE_URL } from '@/lib/site';

// /llms.txt — a plain-Markdown map of the site for large language models
// (llmstxt.org). Gives AI assistants and answer engines a clean summary of who
// Sheen is and the canonical URLs worth citing, without parsing the UI.
export const dynamic = 'force-static';

export function GET() {
  const lines = [
    '# Sheen Digital Agency',
    '',
    '> Kabul-based digital agency building websites, mobile apps, SEO, Google Ads, social media advertising, e-commerce, API integrations and business automation for businesses in Afghanistan and Afghan-owned businesses abroad. Works in English, Dari and Pashto.',
    '',
    '- Founder & CEO: Suliman Hakimi. Team: Jawad Hakimi (full-stack developer & designer), Layla Wakily (mobile & web developer, UI/UX).',
    '- Contact: info@sheen.af, +93 784 966 018. Based in Kabul, Afghanistan; serves clients worldwide.',
    '- Stack: Next.js, server-rendered, multilingual with right-to-left support for Dari and Pashto.',
    '',
    '## Services',
    '',
    ...servicesData.map((s) => `- [${s.title.en}](${SITE_URL}/services/${s.slug}): ${s.shortDesc.en}`),
    '',
    '## Portfolio',
    '',
    ...projects.map((p) => `- [${p.title.en}](${SITE_URL}/portfolio/${p.slug}): ${p.description.en}`),
    '',
    '## Blog',
    '',
    ...blogsData.map((b) => `- [${b.title.en}](${SITE_URL}/blog/${b.slug}): ${b.excerpt.en}`),
    '',
    '## Optional',
    '',
    `- [About](${SITE_URL}/about)`,
    `- [Contact](${SITE_URL}/contact)`,
    `- [Book a consultation](${SITE_URL}/book)`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
