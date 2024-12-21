'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function PromotionalPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');
    if (!hasShownPopup) {
      setIsOpen(true);
    }
  }, []);

  if (pathname === '/consultation') {
    return null;
  }

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasShownPopup', 'true');
  };

  const handleConsultation = () => {
    handleClose();
    router.push('/consultation');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-[90%] max-w-lg mx-auto bg-white rounded-xl shadow-2xl p-6"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                  Limited Time Offer
                </span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">
                Exclusive Launch Deal! 🚀
              </h2>
              
              <p className="text-xl text-gray-600 mb-6">
                Get Your Website Built Completely FREE!
              </p>
              
              <p className="text-gray-600 mb-8">
                As part of our launch celebration, we're offering complimentary website development for select customers. Don't miss this opportunity!
              </p>

              <button
                onClick={handleConsultation}
                className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Your Free Consultation Now
              </button>
              
              <p className="mt-4 text-sm text-gray-500">
                *Limited spots available. First come, first served.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 