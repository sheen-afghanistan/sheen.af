import projects from "../../../data/portfolio";

export async function generateMetadata({ params }) {
  const { id } = await (params);
  const projectSlug = id;

  // Find project by slug
  const project = projects.find(p => p.slug === projectSlug || p.id === projectSlug) || projects[0];

  return {
    title: `${project.title.en} - Portfolio | Sheen`,
    description: project.description.en,
    keywords: project.tags ? project.tags.join(', ') : '',
  };
}

export default function PortfolioDetailLayout({ children }) {
  return <>{children}</>;
}
