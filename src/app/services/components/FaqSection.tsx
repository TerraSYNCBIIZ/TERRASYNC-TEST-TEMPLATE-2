'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/app/components/shared/SectionHeading';

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all sizes, from startups to enterprise companies, across various industries. Our expertise spans e-commerce, SaaS, healthcare, finance, and more. We tailor our solutions to meet the specific needs and goals of each client.',
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer: 'Project timelines vary depending on the scope and complexity of the work. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We will provide a detailed timeline during our initial consultation based on your specific requirements.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We can tailor a support plan that meets your specific needs and budget.',
  },
  {
    question: 'How do you handle project communication and updates?',
    answer: 'We maintain transparent communication throughout the project using tools like Slack, Jira, and regular video calls. You will have a dedicated project manager and access to our project management system to track progress, provide feedback, and stay updated on milestones.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various cloud platforms. We stay current with industry best practices and choose the most appropriate technology stack based on your project requirements.',
  },
  {
    question: 'How do you ensure the security of web applications?',
    answer: 'Security is a top priority in all our projects. We implement industry-standard security practices, including encrypted data transmission, secure authentication, regular security audits, and compliance with data protection regulations. We also provide security updates and monitoring as part of our maintenance services.',
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and process."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl divide-y divide-gray-900/10"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="py-6"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className={`h-6 w-6 transform text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 