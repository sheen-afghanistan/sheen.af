// Single source of truth for the site's canonical origin.
//
// This used to be hardcoded as "https://agency.sheen.af" in ~44 places, which
// pointed every canonical, og:url, sitemap entry and JSON-LD @id at a domain the
// site does not actually serve from. Change it here (or via NEXT_PUBLIC_SITE_URL)
// and every tag follows.
//
// No trailing slash — callers build paths as `${SITE_URL}/blog/...`.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sheen.af'
).replace(/\/+$/, '');

/** Absolute URL for a site-relative path, e.g. url('/blog/foo'). */
export const url = (path = '') =>
  `${SITE_URL}${path && !path.startsWith('/') ? '/' : ''}${path}`;

export default SITE_URL;
