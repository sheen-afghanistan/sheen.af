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
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden py-20 relative">
      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
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
                Free Consultation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                {t("book.title") || "Book a Consultation"}
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t("book.subtitle") || "Schedule a free consultation with our experts to discuss your project."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center relative z-10">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center flex-1 last:flex-none">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 border-2 ${step >= s
                          ? "bg-brand-primary border-brand-primary text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                          : "bg-[#020617] border-white/10 text-gray-500"
                          }`}
                      >
                        {s}
                      </div>
                      {step === s && (
                        <div className="absolute -inset-2 rounded-full border border-brand-primary/30 animate-ping"></div>
                      )}
                    </div>
                    {s < 3 && (
                      <div
                        className={`flex-1 h-1 mx-4 transition-all duration-500 rounded-full ${step > s ? "bg-brand-primary" : "bg-white/10"
                          }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm font-medium tracking-wider uppercase">
                <span className={step >= 1 ? "text-brand-primary" : "text-gray-600"}>{t("book.step1") || "Service"}</span>
                <span className={step >= 2 ? "text-brand-primary" : "text-gray-600"}>{t("book.step2") || "Date & Time"}</span>
                <span className={step >= 3 ? "text-brand-primary" : "text-gray-600"}>{t("book.step3") || "Details"}</span>
              </div>
            </div>

            {step !== 4 ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
              >
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service Selection */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-8">
                        {t("book.selectService") || "What can we help you with?"}
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services.map((serviceKey) => (
                          <motion.button
                            key={serviceKey}
                            type="button"
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleChange("service", serviceKey)}
                            className={`p-6 rounded-2xl text-left transition-all border ${formData.service === serviceKey
                              ? "bg-brand-primary/20 border-brand-primary text-white shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                              : "bg-white/5 border-white/5 text-gray-400 hover:border-white/20"
                              }`}
                          >
                            <span className="text-lg font-semibold block mb-1">
                              {t(`services.${serviceKey}`) !== `services.${serviceKey}` ? t(`services.${serviceKey}`) : serviceKey}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-8">
                        {t("book.chooseDateTime") || "When works for you?"}
                      </h2>
                      <div className="space-y-8">
                        <div>
                          <label className="block text-brand-primary text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                            <FiCalendar />
                            {t("book.selectDate") || "Select Date"}
                          </label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleChange("date", e.target.value)}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder-gray-500"
                          />
                        </div>
                        <div>
                          <label className="block text-brand-primary text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                            <FiClock />
                            {t("book.selectTime") || "Select Time"}
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                            {timeSlots.map((time) => (
                              <motion.button
                                key={time}
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleChange("time", time)}
                                className={`p-3 rounded-lg text-sm font-medium transition-all border ${formData.time === time
                                  ? "bg-brand-primary text-black border-brand-primary font-bold shadow-lg shadow-brand-primary/20"
                                  : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/20"
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
                      <h2 className="text-3xl font-bold text-white mb-8">
                        {t("book.yourInfo") || "Your Contact Details"}
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                            <FiUser /> {t("book.fullName") || "Full Name"} *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-gray-600"
                            placeholder={t("contact.namePlaceholder") || "John Doe"}
                          />
                        </div>
                        <div>
                          <label className="block text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                            <FiMail /> {t("contact.email") || "Email"} *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-gray-600"
                            placeholder={t("contact.emailPlaceholder") || "john@example.com"}
                          />
                        </div>
                        <div>
                          <label className="block text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                            <FiPhone /> {t("contact.phone") || "Phone"} *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            required
                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-gray-600"
                            placeholder={t("contact.phonePlaceholder") || "+1 234 567 890"}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                            <FiMessageSquare /> {t("book.additionalMessage") || "Additional Message"}
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            rows={4}
                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none resize-none placeholder:text-gray-600"
                            placeholder={t("book.messagePlaceholder") || "Tell us a bit more about your project..."}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 mt-10 pt-6 border-t border-white/5">
                    {step > 1 && (
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep(step - 1)}
                        className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all"
                      >
                        {t("book.back") || "Back"}
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
                      className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {step === 3 ? (t("book.confirmBooking") || "Confirm Booking") : (t("book.next") || "Next Step")}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 rounded-3xl text-center border border-white/5 shadow-2xl"
              >
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiClock className="text-4xl text-brand-primary" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  {t("book.bookingConfirmed") || "Booking Confirmed!"}
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
                  {t("book.bookingMessage") || "We've received your booking request. One of our team members will contact you shortly to confirm the appointment."}
                </p>

                <div className="bg-white/5 p-8 rounded-2xl mb-10 text-left border border-white/5 inline-block w-full max-w-lg">
                  <h3 className="text-brand-primary font-bold mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-2">{t("book.bookingSummary") || "Booking Summary"}</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t("book.service") || "Service"}:</span>
                      <span className="font-semibold text-white">{t(`services.${formData.service}`) !== `services.${formData.service}` ? t(`services.${formData.service}`) : formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t("book.date") || "Date"}:</span>
                      <span className="font-semibold text-white">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t("book.time") || "Time"}:</span>
                      <span className="font-semibold text-white">{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t("book.name") || "Name"}:</span>
                      <span className="font-semibold text-white">{formData.name}</span>
                    </div>
                  </div>
                </div>

                <div>
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
                    className="px-10 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold shadow-lg shadow-brand-primary/20"
                  >
                    {t("book.bookAnother") || "Book Another"}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
