'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Feature {
  name: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    name: 'Interactive Website Visualization',
    description: 'Explore different layouts, styles, and features in real-time. See how your website could look before making any commitments.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Seamless Project Kickoff',
    description: 'Start your project with clarity and confidence. Our platform helps translate your vision into clear requirements for our development team.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    name: 'Guided Decision Making',
    description: 'Make informed decisions about your website\'s features and functionality with our interactive exploration tools.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

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

export default function PlatformPage() {
  return (
    <main>
      <div className="relative isolate overflow-hidden">
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
          className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Coming Soon
            </span>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Visualize Your Perfect Website
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re excited to show you what&apos;s possible with our platform.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants} 
            className="mx-auto mt-16 max-w-7xl px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">The McGinnis Technology Group Advantage</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From Vision to Reality
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our platform bridges the gap between your vision and implementation, ensuring perfect alignment 
                with your business goals. Whether you&apos;re exploring ideas or ready to start development, 
                we&apos;re here to bring your vision to life.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    variants={itemVariants}
                    className="flex flex-col"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10">
                        <div className="text-primary">{feature.icon}</div>
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto mt-16 max-w-2xl text-center"
          >
            <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Ready to start planning your perfect website?{' '}
              <Link href="/contact" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Schedule a Demo <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 