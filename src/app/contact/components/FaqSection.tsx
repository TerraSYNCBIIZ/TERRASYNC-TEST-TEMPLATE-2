'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 1,
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary depending on scope and complexity. A typical web development project takes 8-12 weeks from kickoff to launch. We\'ll provide a detailed timeline during our initial consultation based on your specific requirements.',
  },
  {
    id: 2,
    question: 'How do you handle project communication?',
    answer: 'We use a combination of regular video calls, email updates, and project management tools. You\'ll have a dedicated project manager and access to our project portal where you can track progress, view documents, and communicate with the team.',
  },
  {
    id: 3,
    question: 'What is your payment structure?',
    answer: 'We typically work with a 40% upfront deposit, followed by milestone payments. The exact structure depends on project size and duration. We accept various payment methods including bank transfer, credit card, and wire transfer.',
  },
  {
    id: 4,
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer various maintenance and support packages to ensure your project continues to run smoothly after launch. This includes regular updates, security monitoring, performance optimization, and technical support.',
  },
  {
    id: 5,
    question: 'Can you work with our existing tech stack?',
    answer: 'We have experience working with a wide range of technologies and can adapt to your existing stack. During our initial consultation, we\'ll review your current setup and recommend the best approach for your project.',
  },
  {
    id: 6,
    question: 'What makes your development process unique?',
    answer: 'Our development process combines agile methodologies with a strong focus on user experience and performance. We emphasize transparent communication, regular testing, and continuous feedback to ensure the final product exceeds expectations.',
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
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Here&apos;s what you need to know. Can&apos;t find your answer? Contact us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mx-auto mt-16 max-w-3xl divide-y divide-gray-900/10"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="py-6"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className={`h-6 w-6 transform transition-transform duration-200 ${
                      openId === faq.id ? 'rotate-180' : ''
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
                {openId === faq.id && (
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

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-base leading-7 text-gray-600">
            Still have questions?{' '}
            <a href="#contact-form" className="font-semibold text-primary hover:text-primary/80">
              Contact our team
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
} 