'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/app/components/shared/SectionHeading';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  results: {
    metric: string;
    value: string;
  }[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-platform',
    title: 'Custom E-commerce Platform',
    client: 'Fashion Retailer',
    description: 'A modern e-commerce platform with real-time inventory management and AI-powered recommendations.',
    image: '/content/original-866961d59384e30740532290e2a93e35.webp',
    results: [
      { metric: 'Feature', value: 'Real-time Inventory' },
      { metric: 'Feature', value: 'Smart Analytics' },
      { metric: 'Feature', value: 'AI Recommendations' },
    ],
    tags: ['E-commerce', 'UI/UX Design', 'Performance'],
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    client: 'Tech Startup',
    description: 'An intuitive dashboard for data-driven decisions and optimized operations.',
    image: '/content/original-c9fc189b21b4c0f58084b8e2b3f660c2.png',
    results: [
      { metric: 'Feature', value: 'Real-time Data' },
      { metric: 'Feature', value: 'Custom Reports' },
      { metric: 'Feature', value: 'Smart Insights' },
    ],
    tags: ['Custom Development', 'Analytics', 'UI/UX Design'],
  },
  {
    id: 'marketplace-app',
    title: 'Mobile Marketplace App',
    client: 'Service Provider',
    description: 'A marketplace app connecting service providers with customers, featuring real-time matching.',
    image: '/content/original-21cef1b4995464b9c3726cce3cf110f1.mp4',
    results: [
      { metric: 'Feature', value: 'Real-time Matching' },
      { metric: 'Feature', value: 'Smart Routing' },
      { metric: 'Feature', value: 'Secure Payments' },
    ],
    tags: ['Mobile App', 'UI/UX Design', 'Performance'],
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

export default function CaseStudies() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Success Stories"
          subtitle="See how we've helped businesses like yours achieve their goals through innovative web solutions."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.id}
              variants={itemVariants}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                  {study.image.endsWith('.mp4') ? (
                    <video
                      src={study.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2023" className="text-gray-500">
                    Case Study
                  </time>
                  <span className="text-gray-500">{study.client}</span>
                </div>
                <div className="mt-4 group relative">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/case-studies/${study.id}`}>
                      <span className="absolute inset-0" />
                      {study.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {study.description}
                  </p>
                </div>
                
                <div className="mt-8 border-t border-gray-900/5 pt-8">
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div key={result.metric} className="text-center">
                        <div className="text-2xl font-semibold tracking-tight text-primary">
                          {result.value}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 