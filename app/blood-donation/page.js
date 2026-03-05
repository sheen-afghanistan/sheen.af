"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaHeartbeat, FaPhone, FaMapMarkerAlt, FaTint, FaCalendarAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';

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

  return (
    <div dir="rtl" className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
              <FaHeartbeat className="text-white text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            اهدای خون🩸کابل - لوگر
          </h1>
          <p className="text-lg text-red-200/80 max-w-xl mx-auto drop-shadow-sm font-medium">
            بنیاد بخاطر خون دهندگان ولایت لوگر <br />
            با اهدای خون خود، زندگی دوباره ببخشید
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50"
        >
          <div className="p-8 sm:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">

                  {/* Full Name */}
                  <div className="col-span-1">
                    <label htmlFor="full_name" className="block text-sm font-medium text-slate-300 mb-2">نام کامل</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaUser className="h-4 w-4 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        required
                        minLength={3}
                        title="نام کامل باید حداقل ۳ حرف باشد"
                        className="block w-full pr-10 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 transition-all duration-300 outline-none"
                        placeholder="احمد"
                        value={formData.full_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Father Name */}
                  <div className="col-span-1">
                    <label htmlFor="father_name" className="block text-sm font-medium text-slate-300 mb-2">نام پدر</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaUser className="h-4 w-4 text-slate-400 opacity-70" />
                      </div>
                      <input
                        type="text"
                        name="father_name"
                        id="father_name"
                        required
                        minLength={3}
                        title="نام پدر باید حداقل ۳ حرف باشد"
                        className="block w-full pr-10 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 transition-all duration-300 outline-none"
                        placeholder="محمود"
                        value={formData.father_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Age */}
                  <div className="col-span-1">
                    <label htmlFor="age" className="block text-sm font-medium text-slate-300 mb-2">سن</label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      required
                      min="18"
                      max="65"
                      title="سن اهدا کننده باید بین ۱۸ تا ۶۵ سال باشد"
                      className="block w-full bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 px-4 transition-all duration-300 outline-none"
                      placeholder="25"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Blood Group */}
                  <div className="col-span-1">
                    <label htmlFor="blood_group" className="block text-sm font-medium text-slate-300 mb-2">گروه خون</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaTint className="h-4 w-4 text-red-500" />
                      </div>
                      <select
                        id="blood_group"
                        name="blood_group"
                        required
                        className="block w-full pr-10 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 transition-all duration-300 outline-none appearance-none"
                        value={formData.blood_group}
                        onChange={handleChange}
                      >
                        <option value="" disabled className="text-slate-500">انتخاب کنید</option>
                        {bloodGroups.map((group) => (
                          <option key={group} value={group} className="bg-slate-800 text-white">{group}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Last Donation Date */}
                  <div className="col-span-1">
                    <label htmlFor="last_donation_date" className="block text-sm font-medium text-slate-300 mb-2">تاریخ آخرین اهدای خون</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="h-4 w-4 text-slate-400" />
                      </div>
                      <select
                        id="last_donation_date"
                        name="last_donation_date"
                        required
                        className="block w-full pr-10 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 transition-all duration-300 outline-none appearance-none"
                        value={formData.last_donation_date}
                        onChange={handleChange}
                      >
                        <option value="" disabled className="text-slate-500">انتخاب کنید</option>
                        {donationHistories.map((history) => (
                          <option key={history} value={history} className="bg-slate-800 text-white">{history}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Health Status */}
                  <div className="col-span-1">
                    <label htmlFor="health_status" className="block text-sm font-medium text-slate-300 mb-2">وضعیت صحی</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaHeartbeat className="h-4 w-4 text-slate-400" />
                      </div>
                      <select
                        id="health_status"
                        name="health_status"
                        required
                        className="block w-full pr-10 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 transition-all duration-300 outline-none appearance-none"
                        value={formData.health_status}
                        onChange={handleChange}
                      >
                        <option value="" disabled className="text-slate-500">انتخاب کنید</option>
                        {healthStatuses.map((status) => (
                          <option key={status} value={status} className="bg-slate-800 text-white">{status}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Original Location */}
                  <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="original_location" className="block text-sm font-medium text-slate-300 mb-2">موقعیت اصلی (ولایت/ولسوالی)</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaMapMarkerAlt className="h-4 w-4 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        name="original_location"
                        id="original_location"
                        required
                        minLength={2}
                        className="block w-full pr-10 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 transition-all duration-300 outline-none"
                        placeholder="لوگر - پل علم"
                        value={formData.original_location}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Current Location */}
                  <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="current_location" className="block text-sm font-medium text-slate-300 mb-2">موقعیت فعلی</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaMapMarkerAlt className="h-4 w-4 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        name="current_location"
                        id="current_location"
                        required
                        minLength={2}
                        className="block w-full pr-10 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 transition-all duration-300 outline-none"
                        placeholder="کابل - کارته نو"
                        value={formData.current_location}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Contact and WhatsApp */}
                  <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="contact_number" className="block text-sm font-medium text-slate-300 mb-2">شماره تماس و واتساپ</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaPhone className="h-4 w-4 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        name="contact_number"
                        id="contact_number"
                        required
                        pattern="^07[0-9]{8}$"
                        title="شماره تماس باید ۱۰ رقم باشد و با ۰۷ شروع شود (مثال: 0799123456)"
                        dir="ltr"
                        className="block w-full pr-10 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm py-3 text-right transition-all duration-300 outline-none"
                        placeholder="07XX XXX XXX"
                        value={formData.contact_number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white transition-all duration-300 ${loading ? 'bg-red-700/50 cursor-not-allowed' : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-red-600/30 hover:shadow-red-500/50'
                      }`}
                  >
                    {loading ? (
                      <FaSpinner className="animate-spin h-6 w-6" />
                    ) : (
                      'ثبت نام به عنوان اهدا کننده'
                    )}
                  </motion.button>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100/10 mb-6">
                  <FaCheckCircle className="h-16 w-16 text-green-400" />
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  تشکر از ثبت نام شما!
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
                  اطلاعات شما با موفقیت در سیستم ثبت شد. از اینکه برای اهدای خون و نجات جان انسان‌ها داوطلب شده‌اید، بی‌نهایت سپاسگزاریم.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-300"
                >
                  ثبت نام فرد دیگر
                </button>
              </motion.div>
            )}

            {/* Notification Message (Only show for errors now) */}
            <AnimatePresence>
              {message && !isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${success ? 'bg-green-900/40 border border-green-500/50 text-green-200' : 'bg-red-900/40 border border-red-500/50 text-red-200'
                    }`}
                >
                  <p className="text-sm font-medium">{message}</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-slate-400 text-sm"
        >
          <p>© {new Date().getFullYear()} بنیاد بخاطر خون دهندگان ولایت لوگر. تمامی حقوق محفوظ است.</p>
        </motion.div>
      </div>
    </div>
  );
}
