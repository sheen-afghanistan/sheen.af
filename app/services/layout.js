import { SITE_URL } from '@/lib/site';

// Each /services/[id] page overrides title and canonical in its own layout.
export const metadata = {
  title: "Services — Web Design, Apps, SEO & Marketing",
  description: "Explore our premium digital services including Web Design, SEO, Google Ads, Social Media Marketing, and Business Automation in Afghanistan.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}
