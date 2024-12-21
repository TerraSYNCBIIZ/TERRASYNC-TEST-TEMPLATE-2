'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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

const successStories = [
  {
    title: 'Custom E-commerce Platform',
    category: 'Case Study',
    industry: 'Fashion Retailer',
    description: 'Developed a custom e-commerce platform that increased sales by 150% and improved customer satisfaction.',
    image: '/Images/success-stories/ecommerce.jpg',
    metrics: [
      { value: '150%', label: 'Sales Increase' },
      { value: '-35%', label: 'Cart Abandonment' },
      { value: '4.8/5', label: 'Customer Rating' }
    ]
  },
  {
    title: 'SaaS Analytics Dashboard',
    category: 'Case Study',
    industry: 'Tech Startup',
    description: 'Built a real-time analytics dashboard that helped the client make data-driven decisions and optimize operations.',
    image: '/Images/success-stories/dashboard.jpg',
    metrics: [
      { value: '-60%', label: 'Processing Time' },
      { value: '+85%', label: 'User Engagement' },
      { value: '-40%', label: 'Support Tickets' }
    ]
  },
  {
    title: 'Mobile Marketplace App',
    category: 'Case Study',
    industry: 'Service Provider',
    description: 'Created a marketplace app that connected service providers with customers, resulting in rapid business growth.',
    image: '/Images/success-stories/marketplace.jpg',
    metrics: [
      { value: '200%', label: 'User Growth' },
      { value: '+175%', label: 'Transaction Volume' },
      { value: '+125%', label: 'Provider Revenue' }
    ]
  }
];

export default function SuccessStories() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See how we&apos;ve helped businesses like yours achieve their goals through innovative web solutions.
          </p>
        </div>

        <div className="relative">
          <ComingSoonOverlay 
            message="Success Stories Coming Soon" 
            subMessage="We're preparing to showcase our client success stories and the impact of our solutions." 
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-3">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {story.category}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {story.industry}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {story.description}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-900/5 pt-6">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <p className="text-2xl font-semibold text-primary">
                          {metric.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 