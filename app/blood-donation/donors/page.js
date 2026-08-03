"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaHeartbeat, FaPhone, FaMapMarkerAlt, FaTint, FaSearch, FaArrowRight, FaSpinner } from 'react-icons/fa';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1];

export default function DonorsListPage() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBloodGroup, setFilterBloodGroup] = useState('');

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await fetch('/api/blood-donors');
      const data = await response.json();
      if (response.ok) {
        setDonors(data);
      }
    } catch (error) {
      console.error('Error fetching donors:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredDonors = donors.filter(donor => {
    const matchesSearch =
      donor.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.current_location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.contact_number?.includes(searchTerm);

    const matchesBlood = filterBloodGroup ? donor.blood_group === filterBloodGroup : true;

    return matchesSearch && matchesBlood;
  });

  const filterButton = (active) =>
    `px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-300 ${
      active
        ? 'bg-gradient-to-l from-red-600 to-red-700 text-white shadow-[0_8px_22px_-10px_rgba(220,38,38,0.9)]'
        : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white'
    }`;

  return (
    <div
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-slate-950 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 start-1/3 w-[32rem] h-[32rem] rounded-full bg-red-600/18 blur-[110px]" />
        <div className="absolute bottom-0 end-0 w-[26rem] h-[26rem] rounded-full bg-rose-500/10 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              لست اهدا کنندگان خون🩸
            </h1>
            <p className="text-red-200/70">
              جستجوی اهدا کنندگان داوطلب در کابل و لوگر
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            <Link
              href="/blood-donation"
              className="inline-flex items-center gap-2 bg-gradient-to-l from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-[0_14px_34px_-14px_rgba(220,38,38,0.9)] active:scale-95"
            >
              ثبت نام جدید
              <FaArrowRight className="text-xs rotate-180" />
            </Link>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-slate-800 mb-8 flex flex-col lg:flex-row gap-4"
        >
          <div className="flex-1 relative">
            <FaSearch aria-hidden="true" className="absolute end-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="search"
              aria-label="جستجوی اهدا کننده"
              placeholder="جستجو بر اساس نام، مکان یا شماره..."
              className="w-full bg-slate-950/60 border border-slate-800 text-white pe-12 ps-4 py-3 rounded-xl text-sm outline-none transition-all placeholder:text-slate-500 hover:border-slate-700 focus:border-red-500 focus:ring-4 focus:ring-red-500/15"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
            <button
              type="button"
              onClick={() => setFilterBloodGroup('')}
              aria-pressed={!filterBloodGroup}
              className={filterButton(!filterBloodGroup)}
            >
              همه
            </button>
            {bloodGroups.map(group => (
              <button
                key={group}
                type="button"
                onClick={() => setFilterBloodGroup(group)}
                aria-pressed={filterBloodGroup === group}
                className={filterButton(filterBloodGroup === group)}
              >
                {group}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        {!loading && (
          <p className="text-sm text-slate-400 mb-5">
            {filteredDonors.length} اهدا کننده یافت شد
          </p>
        )}

        {/* Donors */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <FaSpinner className="text-red-500 text-4xl animate-spin mb-4" />
            <p className="text-slate-400">در حال دریافت لست اهدا کنندگان...</p>
          </div>
        ) : filteredDonors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredDonors.map((donor, index) => (
                <motion.article
                  key={donor.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.4, ease: EASE }}
                  className="group relative overflow-hidden bg-slate-900/70 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 hover:border-red-500/40 transition-colors duration-300"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 start-0 w-1 bg-gradient-to-b from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="flex justify-between items-start gap-3 mb-5">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="h-12 w-12 shrink-0 grid place-items-center rounded-xl bg-slate-800 border border-slate-700 text-red-500">
                        <FaUser size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-lg font-bold text-white truncate">{donor.full_name}</span>
                        <span className="block text-xs text-slate-400 truncate">فرزند: {donor.father_name}</span>
                      </span>
                    </div>

                    <span className="shrink-0 grid place-items-center min-w-[3.25rem] px-3 py-2 rounded-xl bg-red-950/50 border border-red-500/25 text-red-400 font-black text-lg">
                      {donor.blood_group}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-slate-300">
                      <FaMapMarkerAlt className="text-red-500 shrink-0" />
                      <span className="truncate">{donor.current_location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaPhone className="text-emerald-500 shrink-0" />
                      <a
                        href={`tel:${donor.contact_number}`}
                        dir="ltr"
                        className="hover:text-white transition-colors"
                      >
                        {donor.contact_number}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-slate-400">
                      <FaHeartbeat className="text-slate-500 shrink-0" />
                      <span className="text-xs">آخرین اهدا: {donor.last_donation_date}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
                    <span>ثبت در: {new Date(donor.created_at).toLocaleDateString('fa-AF')}</span>
                    <span className="px-2 py-1 rounded-md bg-slate-800/70">سن: {donor.age} سال</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-slate-900/40 text-center py-20 rounded-2xl border border-dashed border-slate-800">
            <FaTint className="text-slate-700 text-5xl mx-auto mb-4" />
            <h2 className="text-lg font-bold text-slate-400">هیچ اهدا کننده‌ای با این مشخصات یافت نشد.</h2>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setFilterBloodGroup(''); }}
              className="mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              پاک کردن فیلترها
            </button>
          </div>
        )}

        {/* Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden bg-gradient-to-bl from-red-600 to-red-800 p-8 rounded-2xl text-white shadow-[0_24px_60px_-28px_rgba(220,38,38,0.9)]">
            <h2 className="text-2xl font-bold mb-4">چرا خون اهدا کنیم؟</h2>
            <ul className="space-y-2.5 text-white/90 leading-8">
              <li>• با اهدای یک واحد خون، می‌توانید جان ۳ نفر را نجات دهید.</li>
              <li>• اهدای خون باعث تصفیه بدن و صحت‌مندی اهدا کننده می‌شود.</li>
              <li>• این یک وظیفه انسانی و اخلاقی در قبال هموطنان ماست.</li>
            </ul>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">شرایط عمومی اهدا</h2>
            <ul className="space-y-2.5 text-slate-300 leading-8">
              <li>• سن بین ۱۸ تا ۶۵ سال</li>
              <li>• وزن حداقل ۵۰ کیلوگرم</li>
              <li>• نداشتن بیماری‌های واگیردار یا مزمن خاص</li>
              <li>• گذشت حداقل ۳ ماه از آخرین اهدای خون</li>
            </ul>
          </div>
        </div>

        <footer className="text-center mt-20 pb-10 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} بنیاد بخاطر خون دهندگان ولایت لوگر. تمامی حقوق محفوظ است.</p>
        </footer>
      </div>
    </div>
  );
}
