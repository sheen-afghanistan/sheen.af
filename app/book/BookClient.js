"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FiCalendar, FiClock, FiUser, FiMail, FiPhone, FiMessageSquare,
  FiCheck, FiArrowLeft, FiArrowRight,
} from "react-icons/fi";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1];

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
    "other",
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

  const serviceLabel = (key) => {
    const label = t(`services.${key}`);
    return label !== `services.${key}` ? label : key;
  };

  const steps = [t("book.step1"), t("book.step2"), t("book.step3")];

  const contactFields = [
    { key: "name", type: "text", icon: FiUser, label: `${t("book.fullName")}`, placeholder: t("contact.namePlaceholder"), required: true },
    { key: "email", type: "email", icon: FiMail, label: `${t("contact.email")}`, placeholder: t("contact.emailPlaceholder"), required: true },
    { key: "phone", type: "tel", icon: FiPhone, label: `${t("contact.phone")}`, placeholder: t("contact.phonePlaceholder"), required: true },
  ];

  return (
    <div className="page">

      <PageHero
        eyebrow={t("nav.book")}
        title={t("book.title")}
        subtitle={t("book.subtitle")}
      />

      <section className="section-tight pb-24 relative">
        <div className="shell-narrow">
          {/* ------------------------------------------------------ Stepper */}
          {step !== 4 && (
            <ol className="flex items-start mb-12">
              {steps.map((label, index) => {
                const s = index + 1;
                const done = step > s;
                const current = step === s;
                return (
                  <li
                    key={s}
                    className={`flex items-start ${s < 3 ? "flex-1" : ""}`}
                  >
                    <div className="flex flex-col items-center gap-2.5 w-max">
                      <span
                        aria-current={current ? "step" : undefined}
                        className={`w-10 h-10 grid place-items-center rounded-full font-mono text-fluid-sm font-semibold transition-all duration-500 ${
 done
 ? "bg-[var(--jade)] text-[var(--ink)]"
 : current
 ? "bg-[var(--jade-deep)] text-white shadow-none"
 : "border border-[var(--rule)] bg-[var(--paper-alt)] t-soft"
 }`}
                      >
                        {done ? <FiCheck /> : String(s).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-fluid-xs text-center transition-colors ${
 current ? "" : "t-soft"
 }`}
                      >
                        {label}
                      </span>
                    </div>

                    {s < 3 && (
                      <span
                        aria-hidden="true"
                        className={`flex-1 h-px mt-5 mx-3 transition-colors duration-500 ${
 step > s ? "bg-[var(--jade)]" : "bg-[var(--paper-alt)]"
 }`}
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          )}

          {/* Deliberately not AnimatePresence mode="wait": gating the next step
              on an exit animation stalls the wizard whenever rAF is throttled
              (a backgrounded tab). A keyed enter animation is equivalent
              visually and always advances. */}
          <>
            {step !== 4 ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="card card-pad !p-7 sm:!p-9"
              >
                <form onSubmit={handleSubmit}>
                  {/* ---------------------------------------- Step 1: service */}
                  {step === 1 && (
                    <fieldset>
                      <legend className="display-sm mb-7">
                        {t("book.selectService")}
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {services.map((serviceKey) => {
                          const selected = formData.service === serviceKey;
                          return (
                            <button
                              key={serviceKey}
                              type="button"
                              aria-pressed={selected}
                              onClick={() => handleChange("service", serviceKey)}
                              className={`flex items-center justify-between gap-3 p-4 rounded-[var(--r-md)] border text-start text-fluid-sm transition-all duration-300 ${
 selected
 ? "border-[var(--jade)] bg-[var(--jade-wash)] "
 : "border-[var(--rule)] bg-[var(--paper-alt)] t-muted hover:bg-[var(--paper-alt)] "
 }`}
                            >
                              {serviceLabel(serviceKey)}
                              <span
                                className={`w-4 h-4 shrink-0 rounded-full border grid place-items-center transition-colors ${
 selected
 ? "border-[var(--jade-deep)] bg-[var(--jade-deep)]"
 : "border-[var(--rule)]"
 }`}
                              >
                                {selected && <FiCheck className="text-[0.55rem] text-[var(--ink)]" />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  )}

                  {/* ------------------------------------- Step 2: date & time */}
                  {step === 2 && (
                    <div>
                      <h2 className="display-sm mb-7">{t("book.chooseDateTime")}</h2>

                      <div className="space-y-7">
                        <div>
                          <label htmlFor="booking-date" className="field-label">
                            <FiCalendar className="text-[var(--jade-deep)]" />
                            {t("book.selectDate")}
                          </label>
                          <input
                            id="booking-date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleChange("date", e.target.value)}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="field"
                          />
                        </div>

                        <fieldset>
                          <legend className="field-label">
                            <FiClock className="text-[var(--jade-deep)]" />
                            {t("book.selectTime")}
                          </legend>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                aria-pressed={formData.time === time}
                                onClick={() => handleChange("time", time)}
                                className={`py-2.5 px-2 rounded-[var(--r-sm)] border data transition-all duration-300 ${
 formData.time === time
 ? "border-transparent bg-[var(--jade-deep)] text-white font-semibold"
 : "border-[var(--rule)] bg-[var(--paper-alt)] t-muted hover:bg-[var(--paper-alt)] "
 }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  )}

                  {/* ---------------------------------------- Step 3: details */}
                  {step === 3 && (
                    <div>
                      <h2 className="display-sm mb-7">{t("book.yourInfo")}</h2>

                      <div className="space-y-5">
                        {contactFields.map(({ key, type, icon: Icon, label, placeholder, required }) => (
                          <div key={key}>
                            <label htmlFor={`booking-${key}`} className="field-label">
                              <Icon className="text-[var(--jade-deep)]" />
                              {label}
                              {required && <span className="text-[var(--jade-deep)]">*</span>}
                            </label>
                            <input
                              id={`booking-${key}`}
                              type={type}
                              value={formData[key]}
                              onChange={(e) => handleChange(key, e.target.value)}
                              required={required}
                              className="field"
                              placeholder={placeholder}
                            />
                          </div>
                        ))}

                        <div>
                          <label htmlFor="booking-message" className="field-label">
                            <FiMessageSquare className="text-[var(--jade-deep)]" />
                            {t("book.additionalMessage")}
                          </label>
                          <textarea
                            id="booking-message"
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            rows={4}
                            className="field field-textarea"
                            placeholder={t("book.messagePlaceholder")}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* -------------------------------------------- Navigation */}
                  <div className="flex gap-3 mt-9">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="btn btn-secondary flex-1"
                      >
                        <FiArrowLeft className="flip-rtl" />
                        {t("book.back")}
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={
                        (step === 1 && !formData.service) ||
                        (step === 2 && (!formData.date || !formData.time))
                      }
                      className="btn btn-primary flex-1"
                    >
                      {step === 3 ? t("book.confirmBooking") : t("book.next")}
                      <FiArrowRight className="flip-rtl" />
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              /* ----------------------------------------------- Success state */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="card card-marked card-pad !p-9 sm:!p-12 text-center items-center"
              >
                <motion.span
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.12, duration: 0.5, ease: EASE }}
                  className="w-16 h-16 grid place-items-center rounded-full bg-[var(--jade-deep)] text-white text-2xl mb-7"
                >
                  <FiCheck />
                </motion.span>

                <h2 className="display-md">{t("book.bookingConfirmed")}</h2>
                <p className="lede mt-4 max-w-lg">{t("book.bookingMessage")}</p>

                <dl className="w-full mt-9 text-start rounded-[var(--r-lg)] border border-[var(--rule)] bg-[var(--paper-alt)] divide-y divide-[var(--rule)]">
                  {[
                    [t("book.service"), serviceLabel(formData.service)],
                    [t("book.date"), formData.date],
                    [t("book.time"), formData.time],
                    [t("book.name"), formData.name],
                    [t("book.email"), formData.email],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                      <dt className="data uppercase tracking-[0.14em] t-soft">
                        {label}
                      </dt>
                      <dd className="text-fluid-sm text-end">{value}</dd>
                    </div>
                  ))}
                </dl>

                <button
                  type="button"
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
                  className="btn btn-secondary mt-9"
                >
                  {t("book.bookAnother")}
                </button>
              </motion.div>
            )}
          </>
        </div>
      </section>
    </div>
  );
}
