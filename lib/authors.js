import { SITE_URL } from '@/lib/site';

// Byline details for blog authors. Feeds the visible author box on each post
// and the Person node in its BlogPosting schema, so search engines and AI
// answer engines can tie an article to a named, verifiable expert (E-E-A-T).
const AUTHORS = {
  'Suliman Hakimi': {
    jobTitle: 'Founder & CEO, Sheen Digital Agency',
    role: { en: 'Founder & CEO', da: 'مؤسس و مدیر عامل', pa: 'بنسټګر او اجرایوي رییس' },
    bio: {
      en: 'Suliman leads Sheen and works directly on client strategy for SEO, Google Ads and growth for businesses in Afghanistan and the Afghan diaspora.',
      da: 'سلیمان شین را رهبری می‌کند و مستقیماً روی استراتژی سئو، گوگل ادز و رشد برای تجارت‌ها در افغانستان و افغان‌های خارج از کشور کار می‌کند.',
      pa: 'سلیمان شین رهبري کوي او په مستقیم ډول د افغانستان او بهر میشتو افغانانو د سوداګریو لپاره د SEO، ګوګل اعلاناتو او ودې په ستراتیژۍ کار کوي.',
    },
    sameAs: [
      'https://www.linkedin.com/in/suliman-hakimi',
      'https://github.com/SulimanHakimi',
      'https://x.com/SulimanHakimi12',
    ],
  },
  'Jawad Hakimi': {
    jobTitle: 'Full-Stack Developer & Designer, Sheen Digital Agency',
    role: { en: 'Full-Stack Developer & Designer', da: 'دیولوپر و دیزاینر فول‌استک', pa: 'فول‌سټک پرمختیا کوونکی او ډیزاینر' },
    bio: {
      en: 'Jawad builds the Next.js websites, integrations and automations Sheen ships, from the database to the interface.',
      da: 'جواد ویب‌سایت‌های Next.js، ادغام‌ها و اتوماسیون‌هایی را که شین تحویل می‌دهد، از دیتابیس تا رابط کاربری می‌سازد.',
      pa: 'جواد هغه Next.js ویب پاڼې، یوځای کول او اتومات‌کول جوړوي چې شین یې سپاري، له ډیټابیس څخه تر انټرفیس پورې.',
    },
    sameAs: [],
  },
  'Layla Wakily': {
    jobTitle: 'Mobile & Web Developer, UI/UX Designer, Sheen Digital Agency',
    role: { en: 'Mobile & Web Developer, UI/UX', da: 'توسعه‌دهنده موبایل و ویب، UI/UX', pa: 'د موبایل او ویب پرمختیا کوونکې، UI/UX' },
    bio: {
      en: 'Layla designs and builds Sheen\'s mobile apps and interfaces, with a focus on right-to-left Dari and Pashto experiences.',
      da: 'لیلا اپلیکیشن‌های موبایل و رابط‌های کاربری شین را دیزاین و می‌سازد و روی تجربه‌های راست‌به‌چپ دری و پښتو تمرکز دارد.',
      pa: 'لیلا د شین موبایل اپونه او انټرفیسونه ډیزاین او جوړوي، او د ښي‌ څخه کیڼ ته دري او پښتو تجربو ته پام کوي.',
    },
    sameAs: [],
  },
};

export function getAuthor(name) {
  return AUTHORS[name] || null;
}

/** schema.org Person for a byline; falls back to the organization. */
export function authorSchema(name) {
  const a = getAuthor(name);
  if (!a) {
    return { '@type': 'Organization', name: name || 'Sheen Digital Agency', url: SITE_URL };
  }
  return {
    '@type': 'Person',
    name,
    jobTitle: a.jobTitle,
    url: `${SITE_URL}/about`,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    ...(a.sameAs.length ? { sameAs: a.sameAs } : {}),
  };
}
