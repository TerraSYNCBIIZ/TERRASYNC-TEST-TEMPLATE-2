'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={40}
            height={40}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
      </svg>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link
              href="/platform"
              className="inline-flex space-x-6"
            >
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                What's New
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v1.0</span>
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
          <motion.h1
            variants={itemVariants}
            className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Web Solutions That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Drive Growth
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We&apos;re here to help you succeed with McGinnis Technology Group.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-x-6"
          >
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get Started
            </Link>
            <Link
              href="#services-overview"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
          <div className="max-w-lg flex-none sm:max-w-xl lg:max-w-[28rem]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative isolate overflow-hidden bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 rounded-2xl hover:ring-primary/20 transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 via-gray-900/5 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Background pattern */}
              <div className="absolute -inset-px bg-grid-slate-100/[0.04] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
              
              <div className="p-3 sm:p-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500">
                  {/* Video container with gradient border */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <video
                    key="hero-video"
                    src="/content/original-05eac2cd1f195b0d8efeb3ab21b57654.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="h-full w-full object-cover shadow-lg rounded-lg transform transition-all duration-500"
                    style={{
                      filter: 'contrast(1.05) brightness(1.02)',
                      WebkitFilter: 'contrast(1.05) brightness(1.02)'
                    }}
                    onError={(e) => {
                      console.error('Video failed to load:', e);
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 