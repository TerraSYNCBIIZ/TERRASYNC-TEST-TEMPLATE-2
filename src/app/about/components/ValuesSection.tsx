'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/app/components/shared/SectionHeading';

const values = [
  {
    name: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    name: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to client communication.',
  },
  {
    name: 'Collaboration',
    description: 'We believe in working closely with our clients to ensure their vision becomes reality.',
  },
  {
    name: 'Integrity',
    description: 'We operate with complete transparency and honesty in all our business dealings.',
  },
  {
    name: 'Adaptability',
    description: 'We stay agile and responsive to changing technologies and client needs.',
  },
  {
    name: 'Impact',
    description: 'We measure our success by the tangible results we deliver for our clients.',
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

export default function ValuesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 flex flex-col justify-center">
            <div className="lg:max-w-lg">
              <SectionHeading
                title="Our Core Values"
                subtitle="The principles that guide us in delivering exceptional results and maintaining long-lasting relationships with our clients at McGinnis Technology Group."
              />
              
              <motion.dl
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
              >
                {values.map((value) => (
                  <motion.div
                    key={value.name}
                    variants={itemVariants}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      {value.name}
                    </dt>{' '}
                    <dd className="inline">{value.description}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full"
              >
                <Image
                  src="/about/corevalues.jpg"
                  alt="Building Trust Through Values"
                  width={1920}
                  height={1080}
                  className="w-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl" />
              </motion.div>
            </div>
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-sm text-center"
              >
                <p className="text-xl font-semibold text-gray-900">Building Trust Through Values</p>
                <p className="mt-2 text-sm text-gray-600">Our values are the foundation of every project we undertake and every relationship we build.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 