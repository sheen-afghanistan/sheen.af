"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

export default function ShopPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "templates", label: "Website Templates" },
    { id: "plugins", label: "Plugins & Tools" },
    { id: "graphics", label: "Graphics & Assets" },
    { id: "services", label: "Services" },
  ];

  const products = [
    {
      id: 1,
      name: "Premium E-Commerce Template",
      category: "templates",
      price: "$99",
      image: "🛍️",
      description: "Modern, fully responsive e-commerce template",
    },
    {
      id: 2,
      name: "SEO Optimization Plugin",
      category: "plugins",
      price: "$49",
      image: "🚀",
      description: "Boost your website's search engine ranking",
    },
    {
      id: 3,
      name: "Logo Design Package",
      category: "graphics",
      price: "$199",
      image: "🎨",
      description: "Professional logo design with revisions",
    },
    {
      id: 4,
      name: "Monthly SEO Service",
      category: "services",
      price: "$299/mo",
      image: "📊",
      description: "Ongoing SEO optimization and reporting",
    },
    {
      id: 5,
      name: "Business Website Template",
      category: "templates",
      price: "$79",
      image: "🏢",
      description: "Clean corporate website template",
    },
    {
      id: 6,
      name: "Social Media Graphics Pack",
      category: "graphics",
      price: "$39",
      image: "📱",
      description: "Ready-to-use social media templates",
    },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Shop
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Premium digital products and services for your business
            </p>
          </motion.div>

          {/* Cart Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="fixed top-24 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] rounded-full flex items-center justify-center cursor-pointer shadow-xl"
          >
            <FiShoppingCart className="text-white text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {cart.length}
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                    : "glass text-white/80 hover:bg-white/10"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className="aspect-square bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-dark)] flex items-center justify-center text-8xl relative">
                  {product.image}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-red-500/20 transition-all"
                  >
                    <FiHeart className="text-white" />
                  </motion.button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/70 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient-gold">
                      {product.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product)}
                      className="px-6 py-2 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold flex items-center gap-2"
                    >
                      <FiShoppingCart />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
