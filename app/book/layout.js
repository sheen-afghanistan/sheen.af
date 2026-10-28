import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Book a Free Consultation",
  description: "Schedule a free consultation with our experts to discuss your digital project requirements.",
  alternates: { canonical: `${SITE_URL}/book` },
};

export default function BookLayout({ children }) {
  return <>{children}</>;
}
