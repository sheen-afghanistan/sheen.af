import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "About Sheen — Kabul Web, App & SEO Team",
  description: "Learn about Sheen Digital Agency, our mission, vision, and the expert team dedicated to transforming businesses in Afghanistan.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
