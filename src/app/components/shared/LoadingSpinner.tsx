'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

export default function LoadingSpinner({ fullScreen = true }: LoadingSpinnerProps) {
  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50'
    : 'relative w-full h-full min-h-[100px]';

  return (
    <div className={`flex items-center justify-center ${containerClasses}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-12 h-12"
      >
        <Image
          src="/Images/thelogosmall.png"
          alt="Loading..."
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
} 