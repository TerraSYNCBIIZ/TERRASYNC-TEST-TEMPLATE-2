'use client';

import { TransparentPricingButton } from './PricingCalculator';
import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-30 blur-3xl rounded-full bg-gradient-to-r from-blue-100 via-blue-300 to-purple-200" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Pricing Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-blue-700 text-sm font-medium mb-6"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Transparent Pricing
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Find Your Perfect Website Package
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Use our interactive calculator to build your ideal website package. Get instant pricing with our transparent pricing model.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left"
          >
            {[
              { icon: '🚀', text: 'Instant Pricing' },
              { icon: '💎', text: 'Custom Features' },
              { icon: '🎯', text: 'Transparent Costs' },
              { icon: '🎁', text: 'Special Offers' },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-sm font-medium text-gray-800">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <TransparentPricingButton />
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No credit card required • Free consultation included
            </p>
          </motion.div>

          {/* Trust Indicators with Coming Soon Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-100 relative"
          >
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white backdrop-blur-[2px] flex items-center justify-center z-10">
              <div className="px-4 py-2 bg-gray-50/80 rounded-full border border-gray-200 backdrop-blur-sm">
                <span className="text-sm font-medium text-gray-600">Coming Soon</span>
              </div>
            </div>
            
            {/* Content (blurred by overlay) */}
            <p className="text-sm text-gray-500 mb-4">Trusted by businesses worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-30">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 