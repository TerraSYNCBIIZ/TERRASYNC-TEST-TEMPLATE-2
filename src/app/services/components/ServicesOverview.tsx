'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/app/components/shared/SectionHeading';

const services = [
  {
    name: 'Custom Web Development',
    description: 'Tailored web solutions built with cutting-edge technologies to meet your unique business needs.',
    features: [
      'Full-stack development',
      'Progressive Web Apps (PWA)',
      'API development & integration',
      'Database design & optimization',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    href: '#custom-development',
  },
  {
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed to enhance user experience and drive engagement.',
    features: [
      'User interface design',
      'User experience optimization',
      'Wireframing & prototyping',
      'Design system creation',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    href: '#ui-ux-design',
  },
  {
    name: 'E-Commerce Solutions',
    description: 'Scalable online stores that provide seamless shopping experiences and boost conversions.',
    features: [
      'Custom e-commerce development',
      'Shopping cart integration',
      'Payment gateway setup',
      'Inventory management systems',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    href: '#ecommerce',
  },
  {
    name: 'Performance Optimization',
    description: 'Speed up your website and improve user experience with our expert optimization services.',
    features: [
      'Speed optimization',
      'SEO improvements',
      'Core Web Vitals optimization',
      'Mobile performance tuning',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    href: '#optimization',
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

export default function ServicesOverview() {
  return (
    <section id="services-overview" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive web solutions tailored to your business needs. We combine technical expertise with creative innovation to deliver exceptional results."
          centered
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-24">
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="relative flex flex-col"
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-8 ring-1 ring-gray-200 hover:ring-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={service.href}
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 