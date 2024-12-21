'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const highlights = [
  {
    icon: (
      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Rapid Project Delivery',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    text: 'Quality Focused Development',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    text: 'Dedicated Support Team',
  },
];

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Crafting Digital Excellence Since{' '}
                <span className="text-primary">2024</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We&apos;re not just another web development company. We&apos;re your strategic partner in digital transformation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      {highlight.icon}
                    </div>
                    <span className="font-semibold">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:mt-0 mt-8"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src="/Images/collaboration.jpg"
                    alt="Team collaboration at McGinnis Technology Group"
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    priority
                    loading="eager"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 