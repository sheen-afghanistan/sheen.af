import { SITE_URL } from '@/lib/site';

// Each /portfolio/[id] page overrides title and canonical in its own layout.
export const metadata = {
  title: "Portfolio — Our Recent Work",
  description: "Browse our portfolio of successful projects including e-commerce platforms, corporate websites, and mobile apps developed for clients in Afghanistan and abroad.",
  alternates: { canonical: `${SITE_URL}/portfolio` },
};

export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}
