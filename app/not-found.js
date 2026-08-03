"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const EASE = [0.16, 1, 0.3, 1];

export default function NotFound() {
  return (
    <div className="page flex items-center justify-center px-5 py-32">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative z-10 text-center max-w-xl"
      >
        <span className="eyebrow mb-6">Error 404</span>

        <h1 className="numeric font-display text-[clamp(6rem,22vw,13rem)] font-extrabold leading-[0.85] t-jade">
          404
        </h1>

        <h2 className="display-md mt-6">Page Not Found</h2>
        <p className="lede mt-4">
          The page you&apos;re looking for doesn&apos;t exist. It may have moved or been removed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <span className="btn btn-primary btn-lg btn-block sm:!w-auto">
              <FiHome />
              Go Home
            </span>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-secondary btn-lg btn-block sm:!w-auto"
          >
            <FiArrowLeft className="flip-rtl" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
