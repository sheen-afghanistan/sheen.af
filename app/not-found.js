"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-dark/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 rounded-3xl border border-white/5 shadow-2xl shadow-brand-primary/10"
        >
          <motion.div
            className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent mb-4 leading-none"
            animate={{ scale: [1, 1.05, 1], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            404
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-md mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all flex items-center justify-center gap-2"
              >
                <FiHome />
                Go Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
