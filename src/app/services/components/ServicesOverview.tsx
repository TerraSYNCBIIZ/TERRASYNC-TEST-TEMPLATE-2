'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/app/components/shared/SectionHeading';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
    gradient: 'from-blue-500/20 to-cyan-500/20',
    pattern: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
    gradient: 'from-purple-500/20 to-pink-500/20',
    pattern: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a21caf' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
    gradient: 'from-emerald-500/20 to-green-500/20',
    pattern: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
    gradient: 'from-amber-500/20 to-orange-500/20',
    pattern: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services-overview" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[800px] h-full">
          <div className="absolute top-1/2 -translate-y-1/2 aspect-square w-full rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl opacity-20" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive web solutions tailored to your business needs. We combine technical expertise with creative innovation to deliver exceptional results."
          centered
        />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative flex flex-col"
              >
                <div 
                  className="relative h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl overflow-hidden group"
                  style={{ backgroundImage: service.pattern }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="flex items-center gap-x-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <motion.div 
                          className="text-primary"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-semibold leading-8 text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </h3>
                    </div>

                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="mt-8 space-y-4 text-sm leading-6 text-gray-600"
                    >
                      {service.features.map((feature) => (
                        <motion.li 
                          key={feature} 
                          variants={featureVariants}
                          className="flex gap-x-3 items-center"
                        >
                          <div className="flex-shrink-0 w-5 h-5">
                            <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="mt-8">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors duration-300"
                      >
                        Learn more 
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
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