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
              Pricing Packages
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Choose the perfect package for your business needs
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 glass px-2 py-2 rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full transition-all ${billingCycle === "monthly"
                  ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                  : "text-white/70"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full transition-all ${billingCycle === "yearly"
                  ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                  : "text-white/70"
                  }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 px-2 py-1 rounded-full">
                  Save 17%
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
                className={`glass rounded-2xl p-8 relative ${pkg.isPopular ? "border-2 border-[var(--brand-gold)]" : ""
                  }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{getLocalizedContent(pkg.name)}</h3>
                <p className="text-white/70 mb-6">{getLocalizedContent(pkg.description)}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gradient-gold">
                    {billingCycle === "monthly" ? pkg.monthlyPrice : pkg.yearlyPrice}
                  </span>
                  <span className="text-white/60">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <FiCheck className="text-green-400 text-sm" />
                      </div>
                      {getLocalizedContent(feature)}
                    </li>
                  ))}
                  {pkg.notIncluded && pkg.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/40">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <FiX className="text-red-400 text-sm" />
                      </div>
                      {getLocalizedContent(feature)}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePurchaseClick(pkg, false)}
                  className={`w-full px-6 py-4 rounded-full font-semibold transition-all ${pkg.isPopular
                    ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                    : "glass text-white hover:bg-white/10"
                    }`}
                >
                  {t("common.buyNow")}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Packages */}
      <section className="py-20 bg-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">One-Time Services</h2>
            <p className="text-white/70">Additional services available à la carte</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {oneTimePackages.map((pkg, index) => (
              <motion.div
                key={pkg._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{getLocalizedContent(pkg.name)}</h3>
                <div className="text-3xl font-bold text-gradient-gold mb-4">
                  {pkg.price}
                </div>
                <p className="text-white/70 mb-6">{getLocalizedContent(pkg.description)}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePurchaseClick(pkg, true)}
                  className="w-full px-6 py-3 rounded-full glass text-white hover:bg-white/10 transition-all"
                >
                  Purchase
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Modal */}
      {showModal && selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Purchase {getLocalizedContent(selectedPackage.name)}
            </h2>

            <div className="mb-6 p-4 bg-white/5 rounded-lg">
              <div className="text-white/60 text-sm mb-1">
                {selectedPackage.isOneTime ? 'One-Time Service' : 'Subscription Package'}
              </div>
              <div className="text-3xl font-bold text-gradient-gold">
                {selectedPackage.isOneTime
                  ? selectedPackage.price
                  : (selectedPackage.selectedBillingCycle === 'monthly'
                    ? selectedPackage.monthlyPrice
                    : selectedPackage.yearlyPrice)}
                {!selectedPackage.isOneTime && (
                  <span className="text-sm text-white/60 ml-2">
                    / {selectedPackage.selectedBillingCycle}
                  </span>
                )}
              </div>
            </div>

            <form onSubmit={handlePurchaseSubmit} className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <FiUser /> Your Name *
                </label>
                <input
                  type="text"
                  value={purchaseForm.name}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none"
                  placeholder="Suliman Hakimi"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <FiMail /> Email *
                </label>
                <input
                  type="email"
                  value={purchaseForm.email}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none"
                  placeholder="suliman@example.com"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <FiPhone /> Phone *
                </label>
                <input
                  type="tel"
                  value={purchaseForm.phone}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none"
                  placeholder="+93 700 000 000"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <FiMessageSquare /> Additional Message
                </label>
                <textarea
                  value={purchaseForm.message}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none resize-none"
                  placeholder="Any special requirements..."
                />
              </div>

              {purchaseStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                >
                  Purchase request sent! We'll contact you soon.
                </motion.div>
              )}

              {purchaseStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-center"
                >
                  Failed to send request. Please try again.
                </motion.div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedPackage(null);
                    setPurchaseForm({ name: "", email: "", phone: "", message: "" });
                    setPurchaseStatus("");
                  }}
                  className="flex-1 px-6 py-3 rounded-full glass text-white hover:bg-white/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={purchaseStatus === "sending"}
                  className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold disabled:opacity-50 transition-all"
                >
                  {purchaseStatus === "sending" ? "Sending..." : "Submit Request"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
