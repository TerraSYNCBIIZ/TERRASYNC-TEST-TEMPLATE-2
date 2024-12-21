'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/app/components/shared/SectionHeading';

interface Service {
  id: string;
  name: string;
  problem: string;
  solution: string;
  benefits: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 'custom-development',
    name: 'Custom Web Development',
    problem: 'Off-the-shelf solutions often fail to meet unique business requirements, leading to inefficiencies and missed opportunities.',
    solution: 'We create custom web applications tailored to your specific needs, using modern technologies and best practices.',
    benefits: [
      'Streamlined business processes',
      'Improved operational efficiency',
      'Better user engagement',
      'Scalable architecture',
    ],
    image: '/content/original-9031d1e0bec45cfc9cfd82eb46f04959.png',
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    problem: 'Poor user experience and confusing interfaces lead to high bounce rates and lost conversions.',
    solution: 'Our design team creates intuitive, user-friendly interfaces that enhance engagement and drive conversions.',
    benefits: [
      'Increased user satisfaction',
      'Higher conversion rates',
      'Reduced bounce rates',
      'Stronger brand identity',
    ],
    image: '/content/original-94d4ece85ca4e8fefc5c6179b6ef2e9d.mp4',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Solutions',
    problem: 'Complex checkout processes and poor shopping experiences result in abandoned carts and lost sales.',
    solution: 'We build seamless e-commerce platforms that make online shopping easy and enjoyable for your customers.',
    benefits: [
      'Higher conversion rates',
      'Increased average order value',
      'Improved customer retention',
      'Streamlined operations',
    ],
    image: '/content/original-a9b2ba7dd22f93fd7b34f5152f0d745c.mp4',
  },
  {
    id: 'optimization',
    name: 'Performance Optimization',
    problem: 'Slow-loading websites frustrate users and hurt search engine rankings, impacting your bottom line.',
    solution: 'We optimize your website\'s performance to deliver lightning-fast experiences across all devices.',
    benefits: [
      'Faster page load times',
      'Improved SEO rankings',
      'Better user experience',
      'Increased engagement',
    ],
    image: '/content/original-b510fa45a1f3578d6fefa09af87fe0fa.mp4',
  },
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

export default function ServiceDetails() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="How We Help"
          subtitle="Learn how our services solve real business challenges and deliver measurable results."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                id={service.id}
                className={`flex flex-col gap-12 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="relative flex-1">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    {service.image.endsWith('.mp4') ? (
                      <video
                        src={service.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {service.name}
                  </h3>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary">The Challenge</h4>
                      <p className="mt-2 text-gray-600">{service.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Our Solution</h4>
                      <p className="mt-2 text-gray-600">{service.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Key Benefits</h4>
                      <ul className="mt-2 space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-x-3 text-gray-600">
                            <svg className="h-5 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 