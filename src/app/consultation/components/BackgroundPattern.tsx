'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-gray-50/60" />
      
      <motion.div 
        className="absolute inset-0 flex items-center justify-center translate-y-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
      >
        <div className="relative w-[225vw] h-[225vh]">
          <Image
            src="/Images/Logosmall.png"
            alt="Logo"
            fill
            className="object-contain"
            style={{
              filter: 'grayscale(0.3) brightness(1.2)'
            }}
            sizes="225vw"
            priority
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 mix-blend-overlay" />
    </div>
  );
} 