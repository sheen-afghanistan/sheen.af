"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

export default function BookClient() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const services = [
    "webDesign",
    "seo",
    "googleAds",
    "socialAds",
    "ecommerce",
    "apiIntegration",
    "automation",
    "other", // I might need to add 'other' to translations or just use a generic key
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit booking
      try {
        const response = await fetch('/api/send-booking-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStep(4); // Success screen
        } else {
          const error = await response.json();
          console.error('Booking email error:', error);
          alert('Failed to send booking confirmation. Please try again or contact us directly.');
        }
      } catch (error) {
        console.error('Error submitting booking:', error);
        alert('An error occurred. Please try again or contact us at +93 784 966 018');
      }
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
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
              {t("book.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              {t("book.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s
                      ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                      : "glass text-white/50"
                      }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${step > s ? "bg-[var(--brand-gold)]" : "bg-white/10"
                        }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-around mt-2 text-white/70 text-sm">
              <span>{t("book.step1")}</span>
              <span>{t("book.step2")}</span>
              <span>{t("book.step3")}</span>
            </div>
          </div>

          {step !== 4 ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {t("book.selectService")}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((serviceKey) => (
                        <motion.button
                          key={serviceKey}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleChange("service", serviceKey)}
                          className={`p-4 rounded-lg text-left transition-all ${formData.service === serviceKey
                            ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                            : "glass text-white/80 hover:bg-white/10"
                            }`}
                        >
                          {t(`services.${serviceKey}`) !== `services.${serviceKey}` ? t(`services.${serviceKey}`) : serviceKey}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {t("book.chooseDateTime")}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white/80 mb-3 flex items-center gap-2">
                          <FiCalendar />
                          {t("book.selectDate")}
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-3 flex items-center gap-2">
                          <FiClock />
                          {t("book.selectTime")}
                        </label>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                          {timeSlots.map((time) => (
                            <motion.button
                              key={time}
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleChange("time", time)}
                              className={`p-3 rounded-lg text-sm transition-all ${formData.time === time
                                ? "bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white"
                                : "glass text-white/80 hover:bg-white/10"
                                }`}
                            >
                              {time}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {t("book.yourInfo")}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white/80 mb-2 flex items-center gap-2">
                          <FiUser />
                          {t("book.fullName")} *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none"
                          placeholder={t("contact.namePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2 flex items-center gap-2">
                          <FiMail />
                          {t("contact.email")} *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none"
                          placeholder={t("contact.emailPlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2 flex items-center gap-2">
                          <FiPhone />
                          {t("contact.phone")} *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none"
                          placeholder={t("contact.phonePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2 flex items-center gap-2">
                          <FiMessageSquare />
                          {t("book.additionalMessage")}
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[var(--brand-gold)] focus:outline-none resize-none"
                          placeholder={t("book.messagePlaceholder")}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-6 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all"
                    >
                      {t("book.back")}
                    </motion.button>
                  )}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={
                      (step === 1 && !formData.service) ||
                      (step === 2 && (!formData.date || !formData.time))
                    }
                    className="flex-1 px-6 py-4 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {step === 3 ? t("book.confirmBooking") : t("book.next")}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          ) : (
            /* Success Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-12 rounded-2xl text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                {t("book.bookingConfirmed")}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {t("book.bookingMessage")}
              </p>
              <div className="glass p-6 rounded-lg mb-8 text-left">
                <h3 className="text-white font-semibold mb-4">{t("book.bookingSummary")}:</h3>
                <div className="space-y-2 text-white/70">
                  <p><strong>{t("book.service")}:</strong> {t(`services.${formData.service}`) !== `services.${formData.service}` ? t(`services.${formData.service}`) : formData.service}</p>
                  <p><strong>{t("book.date")}:</strong> {formData.date}</p>
                  <p><strong>{t("book.time")}:</strong> {formData.time}</p>
                  <p><strong>{t("book.name")}:</strong> {formData.name}</p>
                  <p><strong>{t("book.email")}:</strong> {formData.email}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setStep(1);
                  setFormData({
                    service: "",
                    date: "",
                    time: "",
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                  });
                }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-accent)] text-white font-semibold"
              >
                {t("book.bookAnother")}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
