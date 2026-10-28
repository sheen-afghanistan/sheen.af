import { SITE_URL } from '@/lib/site';

// Own canonical so this page isn't folded into /blood-donation.
export const metadata = {
    alternates: { canonical: `${SITE_URL}/blood-donation/donors` },
};

export default function DonorsLayout({ children }) {
    return <>{children}</>;
}
