'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ComingSoonOverlay from '@/app/components/shared/ComingSoonOverlay';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function FeaturedPosts() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Articles
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay updated with our latest insights and industry trends
          </p>
        </motion.div>

        <div className="relative mt-16">
          <ComingSoonOverlay 
            message="Featured Articles Coming Soon" 
            subMessage="Our team is preparing insightful content to help you stay ahead in the digital world." 
          />
          
          <motion.div variants={itemVariants} className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Article placeholders */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <div className="h-48 w-full bg-gray-100" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-x-4">
                      <div className="h-2 w-20 bg-gray-200 rounded" />
                      <div className="h-2 w-16 bg-gray-200 rounded" />
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="h-4 w-3/4 bg-gray-200 rounded" />
                      <div className="h-4 bg-gray-200 rounded" />
                      <div className="h-4 w-5/6 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 