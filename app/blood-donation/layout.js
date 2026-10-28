import { SITE_URL } from '@/lib/site';

export const metadata = {
    title: {
        absolute: "اهدای خون🩸کابل - لوگر",
    },
    description: "بنیاد بخاطر خون دهندگان ولایت لوگر. با اهدای خون خود، زندگی دوباره ببخشید.",
    openGraph: {
        title: "اهدای خون🩸کابل - لوگر",
        description: "بنیاد بخاطر خون دهندگان ولایت لوگر. با اهدای خون خود، زندگی دوباره ببخشید.",
        siteName: "بنیاد بخاطر خون دهندگان",
        images: [], // Optionally clear out the brand logo image
    },
    twitter: {
        title: "اهدای خون🩸کابل - لوگر",
        description: "بنیاد بخاطر خون دهندگان ولایت لوگر. با اهدای خون خود، زندگی دوباره ببخشید.",
    },
    alternates: { canonical: `${SITE_URL}/blood-donation` },
};

export default function BloodDonationLayout({ children }) {
    return <>{children}</>;
}
