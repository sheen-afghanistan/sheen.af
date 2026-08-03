"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaHeartbeat, FaPhone, FaMapMarkerAlt, FaTint, FaCalendarAlt, FaCheckCircle, FaSpinner, FaArrowLeft } from 'react-icons/fa';

const EASE = [0.16, 1, 0.3, 1];

/* Shared field chrome for this standalone red-themed section. */
const FIELD =
  "block w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl py-3 px-4 text-sm leading-6 outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-slate-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/15";
const LABEL = "block text-sm font-medium text-slate-300 mb-2";

export default function BloodDonationPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    father_name: '',
    age: '',
    blood_group: '',
    last_donation_date: '',
    health_status: '',
    original_location: '',
    current_location: '',
    contact_number: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const donationHistories = ['هیچ‌وقت خون اهدا نکرده‌ام', 'کمتر از ۳ ماه پیش', 'بین ۳ تا ۶ ماه پیش', 'بیشتر از ۶ ماه پیش'];
  const healthStatuses = ['کاملاً سالم', 'دارای فشار خون', 'دارای حساسیت/آلرژی', 'مصرف داروی خاص', 'بیماری زمینه‌ای', 'سایر'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/blood-donors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setIsSubmitted(true);
        setMessage('ثبت نام شما با موفقیت انجام شد. از همکاری شما سپاسگزاریم!');
        setFormData({
          full_name: '',
          father_name: '',
          age: '',
          blood_group: '',
          last_donation_date: '',
          health_status: '',
          original_location: '',
          current_location: '',
          contact_number: ''
        });
      } else {
        setSuccess(false);
        setMessage(data.error || 'خطا در ثبت اطلاعات، لطفا دوباره تلاش کنید.');
      }
    } catch (error) {
      setSuccess(false);
      setMessage('خطا در ارتباط با سرور.');
    } finally {
      setLoading(false);

      // Clear non-submission messages after 5 seconds
      if (!isSubmitted) {
        setTimeout(() => setMessage(''), 5000);
      }
    }
  };

  const textInputs = [
    { name: 'full_name', label: 'نام کامل', placeholder: 'احمد', icon: FaUser, minLength: 3, title: 'نام کامل باید حداقل ۳ حرف باشد', span: 1 },
    { name: 'father_name', label: 'نام پدر', placeholder: 'محمود', icon: FaUser, minLength: 3, title: 'نام پدر باید حداقل ۳ حرف باشد', span: 1 },
  ];

  const selects = [
    { name: 'blood_group', label: 'گروه خون', icon: FaTint, iconClass: 'text-red-500', options: bloodGroups },
    { name: 'last_donation_date', label: 'تاریخ آخرین اهدای خون', icon: FaCalendarAlt, iconClass: 'text-slate-400', options: donationHistories },
    { name: 'health_status', label: 'وضعیت صحی', icon: FaHeartbeat, iconClass: 'text-slate-400', options: healthStatuses },
  ];

  const locations = [
    { name: 'original_location', label: 'موقعیت اصلی (ولایت/ولسوالی)', placeholder: 'لوگر - پل علم' },
    { name: 'current_location', label: 'موقعیت فعلی', placeholder: 'کابل - کارته نو' },
  ];

  return (
    <div
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-slate-950 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient light */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 start-1/4 w-[32rem] h-[32rem] rounded-full bg-red-600/20 blur-[110px]" />
        <div className="absolute bottom-0 end-0 w-[26rem] h-[26rem] rounded-full bg-rose-500/10 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-5">
            <div className="h-[4.5rem] w-[4.5rem] bg-gradient-to-br from-red-500 to-red-700 rounded-2xl grid place-items-center shadow-[0_16px_40px_-12px_rgba(220,38,38,0.7)] rotate-3">
              <FaHeartbeat className="text-white text-3xl -rotate-3" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            اهدای خون🩸کابل - لوگر
          </h1>
          <p className="text-base sm:text-lg text-red-200/75 max-w-xl mx-auto">
            بنیاد بخاطر خون دهندگان ولایت لوگر
            <br />
            با اهدای خون خود، زندگی دوباره ببخشید
          </p>

          <Link
            href="/blood-donation/donors"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-200 text-sm font-medium hover:border-red-500/50 hover:text-white transition-colors"
          >
            دیدن لست اهدا کنندگان
            <FaArrowLeft className="text-xs" />
          </Link>
        </motion.div>

        {/* Form panel */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          className="bg-slate-900/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
        >
          <div className="p-6 sm:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {textInputs.map(({ name, label, placeholder, icon: Icon, minLength, title }) => (
                    <div key={name}>
                      <label htmlFor={name} className={LABEL}>{label}</label>
                      <div className="relative">
                        <Icon
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-0 end-4 my-auto h-4 w-4 text-slate-500"
                        />
                        <input
                          type="text"
                          name={name}
                          id={name}
                          required
                          minLength={minLength}
                          title={title}
                          className={`${FIELD} pe-11`}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Age */}
                  <div>
                    <label htmlFor="age" className={LABEL}>سن</label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      required
                      min="18"
                      max="65"
                      title="سن اهدا کننده باید بین ۱۸ تا ۶۵ سال باشد"
                      className={FIELD}
                      placeholder="25"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>

                  {selects.map(({ name, label, icon: Icon, iconClass, options }) => (
                    <div key={name}>
                      <label htmlFor={name} className={LABEL}>{label}</label>
                      <div className="relative">
                        <Icon
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-y-0 end-4 my-auto h-4 w-4 ${iconClass}`}
                        />
                        <select
                          id={name}
                          name={name}
                          required
                          className={`${FIELD} pe-11 appearance-none cursor-pointer`}
                          value={formData[name]}
                          onChange={handleChange}
                        >
                          <option value="" disabled>انتخاب کنید</option>
                          {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  {locations.map(({ name, label, placeholder }) => (
                    <div key={name} className="sm:col-span-2">
                      <label htmlFor={name} className={LABEL}>{label}</label>
                      <div className="relative">
                        <FaMapMarkerAlt
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-0 end-4 my-auto h-4 w-4 text-slate-500"
                        />
                        <input
                          type="text"
                          name={name}
                          id={name}
                          required
                          minLength={2}
                          className={`${FIELD} pe-11`}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Contact */}
                  <div className="sm:col-span-2">
                    <label htmlFor="contact_number" className={LABEL}>شماره تماس و واتساپ</label>
                    <div className="relative">
                      <FaPhone
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 end-4 my-auto h-4 w-4 text-slate-500"
                      />
                      <input
                        type="tel"
                        name="contact_number"
                        id="contact_number"
                        required
                        pattern="^07[0-9]{8}$"
                        title="شماره تماس باید ۱۰ رقم باشد و با ۰۷ شروع شود (مثال: 0799123456)"
                        dir="ltr"
                        className={`${FIELD} pe-11 text-right`}
                        placeholder="07XX XXX XXX"
                        value={formData.contact_number}
                        onChange={handleChange}
                      />
                    </div>
                    <p className="mt-2 text-xs text-slate-400">شماره باید با ۰۷ شروع شده و ۱۰ رقم باشد.</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl text-base font-bold text-white transition-all duration-300 ${
                    loading
                      ? 'bg-red-800/60 cursor-not-allowed'
                      : 'bg-gradient-to-l from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_14px_36px_-14px_rgba(220,38,38,0.8)]'
                  }`}
                >
                  {loading ? <FaSpinner className="animate-spin h-5 w-5" /> : 'ثبت نام به عنوان اهدا کننده'}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="text-center py-8"
              >
                <div className="mx-auto grid place-items-center h-20 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
                  <FaCheckCircle className="h-11 w-11 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-4">تشکر از ثبت نام شما!</h2>
                <p className="text-base text-slate-300 mb-8 max-w-md mx-auto leading-8">
                  اطلاعات شما با موفقیت در سیستم ثبت شد. از اینکه برای اهدای خون و نجات جان انسان‌ها داوطلب شده‌اید، بی‌نهایت سپاسگزاریم.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
                  >
                    ثبت نام فرد دیگر
                  </button>
                  <Link
                    href="/blood-donation/donors"
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-l from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-colors"
                  >
                    دیدن لست اهدا کنندگان
                  </Link>
                </div>
              </motion.div>
            )}

            <AnimatePresence>
              {message && !isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  role="status"
                  className={`mt-6 p-4 rounded-xl text-sm font-medium border ${
                    success
                      ? 'bg-emerald-900/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-red-900/30 border-red-500/40 text-red-200'
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <p className="text-center mt-12 text-slate-400 text-sm">
          © {new Date().getFullYear()} بنیاد بخاطر خون دهندگان ولایت لوگر. تمامی حقوق محفوظ است.
        </p>
      </div>
    </div>
  );
}
