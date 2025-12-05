import servicesData from "../../../data/services";
export async function generateMetadata({ params }) {
  const { id } = await(params);
  const serviceId = id || "web-design";

  // Find the service from data
  const service = servicesData.find(s => s.slug === serviceId) || servicesData[0];

  return {
    title: `${service.title.en} - Sheen Services`,
    description: service.description.en,
    keywords: service.features.join(', '),
  };
}

export default function ServiceLayout({ children }) {
  return <>{children}</>;
}
