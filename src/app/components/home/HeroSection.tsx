'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { label: 'Project Timeline', value: 'Days Not Months' },
  { label: 'Development Process', value: 'Agile & Fast' },
  { label: 'Support Response', value: '24/7' },
];

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="flex items-center gap-x-1">
                  <span className="font-semibold text-primary">Fast Delivery</span>
                  <span className="hidden md:inline"> · </span>
                  <span>From concept to launch in days, not months</span>
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Elevating Your Digital Vision with{' '}
              <span className="text-gradient">Custom Web Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From startups to enterprises, we craft websites that drive results. Our team of experts
              combines creativity with technical excellence to deliver exceptional digital experiences in record time.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/consultation"
              className="btn-primary"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-100"
          >
            <dl className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="mx-auto flex flex-col gap-y-2 text-center">
                  <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/team/Teamimage.jpg"
              alt="Our team collaborating"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <p className="text-lg font-semibold">Meet Our Team</p>
              <p className="text-sm">Passionate experts dedicated to your success</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background gradient (bottom) */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
} 