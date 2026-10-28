import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Contact Us — Get a Free Quote",
  description: "Contact Sheen Digital Agency in Kabul for a free consultation on web design, SEO, and digital marketing services.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
