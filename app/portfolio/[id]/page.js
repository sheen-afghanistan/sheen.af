"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiCalendar, FiUsers } from "react-icons/fi";

export default function PortfolioDetailPage({ params }) {
  const projectId = params?.id || "1";

  // Mock project data
  const projects = {
    "1": {
      title: "E-Commerce Platform",
      category: "E-Commerce",
      client: "TechStore Afghanistan",
      date: "November 2025",
      image: "🛍️",
      description: "A modern, full-featured e-commerce platform built for a leading tech retailer in Afghanistan. The platform includes advanced product filtering, secure payment integration, and a comprehensive admin dashboard.",
      challenge: "The client needed a scalable e-commerce solution that could handle high traffic during sale events while providing a seamless shopping experience across all devices.",
      solution: "We built a custom Next.js application with MongoDB for data management, integrated Stripe for payments, and implemented advanced caching strategies for optimal performance.",
      results: [
        "300% increase in online sales",
        "50% reduction in cart abandonment",
        "99.9% uptime during peak traffic",
        "4.8/5 customer satisfaction rating",
      ],
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS", "Vercel"],
      features: [
        "Advanced product search and filtering",
        "Secure payment processing",
        "Real-time inventory management",
        "Customer reviews and ratings",
        "Order tracking system",
        "Admin dashboard with analytics",
      ],
      screenshots: ["📱", "💻", "🖥️", "⌨️"],
    },
    "2": {
      title: "Corporate Website",
      category: "Web Development",
      client: "Afghan Business Group",
      date: "October 2025",
      image: "🏢",
      description: "A professional corporate website showcasing services, team, and achievements with a modern, clean design.",
      challenge: "Create a professional online presence that reflects the company's values and expertise.",
      solution: "Designed and developed a responsive website with custom CMS for easy content management.",
      results: [
        "200% increase in inquiries",
        "Improved brand perception",
        "Better client engagement",
        "SEO ranking improvements",
      ],
      technologies: ["Next.js", "React", "Node.js", "MongoDB"],
      features: [
        "Custom CMS",
        "Blog system",
        "Team showcase",
        "Service pages",
        "Contact forms",
        "SEO optimization",
      ],
      screenshots: ["🎨", "📊", "✨", "🚀"],
    },
  };

  const project = projects[projectId] || projects["1"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--brand-dark)] to-black pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--brand-accent)]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
            >
              <FiArrowLeft />
              Back to Portfolio
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-4 py-2 rounded-full glass text-[var(--brand-gold)] mb-6">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/70 mb-8">
              <div className="flex items-center gap-2">
                <FiUsers />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{project.date}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] rounded-2xl flex items-center justify-center text-9xl mb-12">
              {project.image}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Our Solution</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Screenshots</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-video bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] rounded-2xl flex items-center justify-center text-8xl cursor-pointer"
                    >
                      {screenshot}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="text-[var(--brand-gold)] text-xl">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-white/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Want Similar Results?
                </h3>
                <p className="text-white/70 mb-4">
                  Let's discuss your project and create something amazing together.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold flex items-center justify-center gap-2"
                  >
                    Start Your Project
                    <FiExternalLink />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
