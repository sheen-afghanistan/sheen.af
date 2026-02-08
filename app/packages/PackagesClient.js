"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiCheck, FiX, FiMail, FiUser, FiPhone, FiMessageSquare } from "react-icons/fi";

export default function PackagesClient({ packages, oneTimePackages }) {
  const { t, i18n } = useTranslation();
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [purchaseForm, setPurchaseForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [purchaseStatus, setPurchaseStatus] = useState("");

  const getLocalizedContent = (content) => {
    if (!content) return "";
    if (typeof content === 'string') return content;
    return content[i18n.language] || content.en || "";
  };

  const handlePurchaseClick = (pkg, isOneTime = false) => {
    setSelectedPackage({
      ...pkg,
      isOneTime,
      selectedBillingCycle: billingCycle,
    });
    setShowModal(true);
  };

  const handlePurchaseSubmit = async (e) => {
    e.preventDefault();
    setPurchaseStatus("sending");

    try {
      const response = await fetch('/api/send-purchase-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageName: getLocalizedContent(selectedPackage.name),
          packageType: selectedPackage.isOneTime ? 'One-Time Service' : 'Subscription Package',
          price: selectedPackage.isOneTime
            ? selectedPackage.price
            : (selectedPackage.selectedBillingCycle === 'monthly'
              ? selectedPackage.monthlyPrice
              : selectedPackage.yearlyPrice),
          billingCycle: selectedPackage.isOneTime ? null : selectedPackage.selectedBillingCycle,
          ...purchaseForm,
        }),
      });

      if (response.ok) {
        setPurchaseStatus("success");
        setTimeout(() => {
          setShowModal(false);
          setPurchaseStatus("");
          setPurchaseForm({ name: "", email: "", phone: "", message: "" });
          setSelectedPackage(null);
        }, 3000);
      } else {
        const error = await response.json();
        setPurchaseStatus("error");
        console.error('Purchase email error:', error);
        setTimeout(() => {
          setPurchaseStatus("");
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting purchase:', error);
      setPurchaseStatus("error");
      setTimeout(() => {
        setPurchaseStatus("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden py-20 relative">
      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-brand-accent/5 blur-[80px]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 rounded-full glass border border-brand-primary/30 text-brand-accent mb-6 font-mono text-sm">
                Transparent Pricing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Pricing Packages
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Choose the perfect package for your business needs. No hidden fees, just value.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-2 glass-card p-2 rounded-full border border-white/5">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-8 py-3 rounded-full transition-all font-semibold text-sm ${billingCycle === "monthly"
                    ? "bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/20"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-8 py-3 rounded-full transition-all font-semibold text-sm flex items-center gap-2 ${billingCycle === "yearly"
                    ? "bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/20"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  Yearly
                  <span className="text-xs bg-brand-gold text-black px-2 py-0.5 rounded-full font-bold">
                    -17%
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`glass-card rounded-3xl p-8 relative border transition-all duration-300 flex flex-col ${pkg.isPopular
                    ? "border-brand-primary shadow-2xl shadow-brand-primary/10 bg-gradient-to-b from-brand-primary/5 to-transparent"
                    : "border-white/5 hover:border-brand-primary/30"
                    }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-brand-gold to-orange-500 rounded-full text-white text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{getLocalizedContent(pkg.name)}</h3>
                    <p className="text-gray-400 text-sm h-10 line-clamp-2">{getLocalizedContent(pkg.description)}</p>
                  </div>

                  <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === "monthly" ? pkg.monthlyPrice : pkg.yearlyPrice}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck className="text-brand-primary text-xs" />
                        </div>
                        {getLocalizedContent(feature)}
                      </li>
                    ))}
                    {pkg.notIncluded && pkg.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiX className="text-red-500/50 text-xs" />
                        </div>
                        {getLocalizedContent(feature)}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePurchaseClick(pkg, false)}
                    className={`w-full px-6 py-4 rounded-xl font-bold transition-all ${pkg.isPopular
                      ? "bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40"
                      : "bg-white/10 text-white hover:bg-white/20 hover:text-brand-primary"
                      }`}
                  >
                    {t("common.buyNow") || "Choose Plan"}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* One-Time Packages */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-brand-primary/5 skew-y-3 transform origin-bottom-left"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">One-Time Services</h2>
              <p className="text-gray-400">Professional services tailored to your specific project needs.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {oneTimePackages.map((pkg, index) => (
                <motion.div
                  key={pkg._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all border border-white/5 hover:border-brand-primary/30 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl text-brand-primary group-hover:text-white">★</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{getLocalizedContent(pkg.name)}</h3>
                  <div className="text-3xl font-bold text-brand-gold mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-gray-400 mb-8 text-sm leading-relaxed">{getLocalizedContent(pkg.description)}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePurchaseClick(pkg, true)}
                    className="w-full px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-brand-primary hover:border-brand-primary font-semibold transition-all"
                  >
                    Purchase Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Purchase Modal */}
        {showModal && selectedPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>

              <h2 className="text-2xl font-bold text-white mb-2">
                Checkout
              </h2>
              <p className="text-gray-400 text-sm mb-6">Complete your purchase request securely.</p>

              <div className="mb-8 p-6 bg-brand-primary/5 rounded-2xl border border-brand-primary/20">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-bold text-lg">{getLocalizedContent(selectedPackage.name)}</h3>
                    <p className="text-brand-primary text-xs uppercase tracking-wider font-semibold">
                      {selectedPackage.isOneTime ? 'One-Time Service' : 'Subscription'}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {selectedPackage.isOneTime
                        ? selectedPackage.price
                        : (selectedPackage.selectedBillingCycle === 'monthly'
                          ? selectedPackage.monthlyPrice
                          : selectedPackage.yearlyPrice)}
                    </div>
                    {!selectedPackage.isOneTime && (
                      <div className="text-xs text-gray-400">
                        / {selectedPackage.selectedBillingCycle}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <form onSubmit={handlePurchaseSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FiUser /> Full Name
                  </label>
                  <input
                    type="text"
                    value={purchaseForm.name}
                    onChange={(e) => setPurchaseForm({ ...purchaseForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-white/20"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                      <FiMail /> Email
                    </label>
                    <input
                      type="email"
                      value={purchaseForm.email}
                      onChange={(e) => setPurchaseForm({ ...purchaseForm, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-white/20"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                      <FiPhone /> Phone
                    </label>
                    <input
                      type="tel"
                      value={purchaseForm.phone}
                      onChange={(e) => setPurchaseForm({ ...purchaseForm, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-white/20"
                      placeholder="+93 700 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FiMessageSquare /> Notes (Optional)
                  </label>
                  <textarea
                    value={purchaseForm.message}
                    onChange={(e) => setPurchaseForm({ ...purchaseForm, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none resize-none placeholder:text-white/20"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                {purchaseStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-center text-sm font-semibold"
                  >
                    Success! We'll get back to you shortly.
                  </motion.div>
                )}

                {purchaseStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400 text-center text-sm font-semibold"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setSelectedPackage(null);
                      setPurchaseForm({ name: "", email: "", phone: "", message: "" });
                      setPurchaseStatus("");
                    }}
                    className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={purchaseStatus === "sending"}
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {purchaseStatus === "sending" ? "Processing..." : "Confirm Request"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
