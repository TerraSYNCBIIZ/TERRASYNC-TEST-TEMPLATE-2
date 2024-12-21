'use client';

import { motion } from 'framer-motion';

interface ComingSoonOverlayProps {
  message?: string;
  subMessage?: string;
}

export default function ComingSoonOverlay({ 
  message = "Coming Soon", 
  subMessage = "We're working on something exciting!" 
}: ComingSoonOverlayProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-50 backdrop-blur-sm bg-white/60 flex items-center justify-center"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center px-4 py-8 rounded-2xl bg-white/80 shadow-lg max-w-md mx-4"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
          <svg 
            className="w-6 h-6 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" 
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {message}
        </h3>
        <p className="text-gray-600">
          {subMessage}
        </p>
      </motion.div>
    </motion.div>
  );
} 