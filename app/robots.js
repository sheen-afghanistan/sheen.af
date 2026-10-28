import { SITE_URL } from '@/lib/site';

// Crawlers that feed AI search and answer engines. Being crawlable by these is
// what makes the site eligible to be cited in ChatGPT search, Perplexity,
// Claude, Gemini / AI Overviews, Copilot and Apple Intelligence answers.
const AI_CRAWLERS = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'Google-Extended',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Applebot',
    'Applebot-Extended',
    'Bingbot',
    'CCBot',
    'Meta-ExternalAgent',
    'DuckAssistBot',
    'YouBot',
    'cohere-ai',
];

const DISALLOW = ['/api/', '/admin/'];

export default function robots() {
    return {
        // A bot that matches a named group ignores the '*' group, so every
        // group repeats the disallow list.
        rules: [
            { userAgent: '*', allow: '/', disallow: DISALLOW },
            { userAgent: AI_CRAWLERS, allow: '/', disallow: DISALLOW },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
