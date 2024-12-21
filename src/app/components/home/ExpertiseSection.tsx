'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '../shared/SectionHeading';

const services = [
  {
    name: 'Custom Web Development',
    description: 'Tailored web solutions built with cutting-edge technologies to meet your unique business needs.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    href: '/services#custom-web-development',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed to enhance user experience and drive engagement.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    href: '/services#ui-ux-design',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    name: 'E-Commerce Solutions',
    description: 'Scalable online stores that provide seamless shopping experiences and boost conversions.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    href: '/services#e-commerce-solutions',
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    name: 'Performance Optimization',
    description: 'Speed up your website and improve user experience with our expert optimization services.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    href: '/services#performance-optimization',
    gradient: 'from-orange-500 to-amber-400',
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

export default function ExpertiseSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Expertise"
          subtitle="We specialize in delivering comprehensive web solutions that help businesses thrive in the digital age."
          centered
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="relative group"
              >
                <Link href={service.href} className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:ring-primary/50 transition-all duration-300 h-full transform hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="text-primary">{service.icon}</div>
                      </div>
                      
                      <dt className="mt-6 text-xl font-semibold leading-7 text-gray-900">
                        {service.name}
                      </dt>
                      
                      <dd className="mt-4 flex flex-auto flex-col">
                        <p className="flex-auto text-base leading-7 text-gray-600">
                          {service.description}
                        </p>
                        <p className="mt-6 flex items-center gap-x-2 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors duration-300">
                          Learn more
                          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </p>
                      </dd>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
} 