"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaHeartbeat, FaPhone, FaMapMarkerAlt, FaTint, FaSearch, FaArrowRight, FaSpinner } from 'react-icons/fa';
import Link from 'next/link';

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

  return (
    <div dir="rtl" className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
              لست اهدا کنندگان خون🩸
            </h1>
            <p className="text-red-200/70 font-medium">
              جستجوی اهدا کنندگان داوطلب در کابل و لوگر
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              href="/blood-donation" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95"
            >
              ثبت نام جدید <FaArrowRight className="text-sm rotate-180" />
            </Link>
          </motion.div>
        </div>

        {/* Filters Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 mb-8 flex flex-col md:flex-row gap-4"
        >
          <div className="flex-1 relative">
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="جستجو بر اساس نام، مکان یا شماره..."
              className="w-full bg-slate-900/50 border border-slate-700 text-white pr-12 pl-4 py-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button 
              onClick={() => setFilterBloodGroup('')}
              className={`px-4 py-2 rounded-lg font-bold transition-all whitespace-nowrap ${!filterBloodGroup ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
            >
              همه
            </button>
            {bloodGroups.map(group => (
              <button 
                key={group}
                onClick={() => setFilterBloodGroup(group)}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${filterBloodGroup === group ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
              >
                {group}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Donors Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <FaSpinner className="text-red-500 text-5xl animate-spin mb-4" />
            <p className="text-slate-400 animate-pulse">در حال دریافت لست اهدا کنندگان...</p>
          </div>
        ) : filteredDonors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredDonors.map((donor, index) => (
                <motion.div
                  key={donor.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-800/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/50 hover:border-red-500/30 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-slate-700 flex items-center justify-center text-red-500 border border-slate-600">
                        <FaUser size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{donor.full_name}</h3>
                        <p className="text-sm text-slate-400">فرزند: {donor.father_name}</p>
                      </div>
                    </div>
                    <div className="bg-red-900/30 text-red-400 px-4 py-2 rounded-xl font-black text-xl border border-red-500/20">
                      {donor.blood_group}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-300">
                      <FaMapMarkerAlt className="text-red-500" />
                      <span>{donor.current_location}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-300">
                      <FaPhone className="text-green-500" />
                      <a href={`tel:${donor.contact_number}`} className="hover:text-white transition-colors ltr">{donor.contact_number}</a>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <FaHeartbeat className="text-slate-500" />
                      <span className="text-xs">آخرین اهدا: {donor.last_donation_date}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-500">
                    <span>ثبت در: {new Date(donor.created_at).toLocaleDateString('fa-AF')}</span>
                    <span className="bg-slate-700/50 px-2 py-1 rounded-md">سن: {donor.age} سال</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-slate-800/50 text-center py-20 rounded-3xl border border-dashed border-slate-700">
            <FaTint className="text-slate-700 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-400">هیچ اهدا کننده‌ای با این مشخصات یافت نشد.</h3>
            <button 
              onClick={() => {setSearchTerm(''); setFilterBloodGroup('');}}
              className="mt-4 text-red-400 hover:text-red-300 font-medium"
            >
              پاک کردن فیلترها
            </button>
          </div>
        )}

        {/* Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-3xl text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-4">چرا خون اهدا کنیم؟</h2>
              <ul className="space-y-2 opacity-90">
                <li>• با اهدای یک واحد خون، می‌توانید جان ۳ نفر را نجات دهید.</li>
                <li>• اهدای خون باعث تصفیه بدن و صحت‌مندی اهدا کننده می‌شود.</li>
                <li>• این یک وظیفه انسانی و اخلاقی در قبال هموطنان ماست.</li>
              </ul>
           </div>
           <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4">شرایط عمومی اهدا</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• سن بین ۱۸ تا ۶۵ سال</li>
                <li>• وزن حداقل ۵۰ کیلوگرم</li>
                <li>• نداشتن بیماری‌های واگیردار یا مزمن خاص</li>
                <li>• گذشت حداقل ۳ ماه از آخرین اهدای خون</li>
              </ul>
           </div>
        </div>

        {/* Footer info */}
        <footer className="text-center mt-20 pb-10 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} بنیاد بخاطر خون دهندگان ولایت لوگر. تمامی حقوق محفوظ است.</p>
        </footer>
      </div>
    </div>
  );
}
