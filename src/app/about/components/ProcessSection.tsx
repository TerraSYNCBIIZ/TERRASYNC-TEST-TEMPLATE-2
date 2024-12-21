'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/app/components/shared/SectionHeading';

const process = [
  {
    name: 'Discovery',
    description: 'We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.',
    number: '01',
  },
  {
    name: 'Planning',
    description: 'Our team creates a detailed project roadmap, including timelines, milestones, and resource allocation.',
    number: '02',
  },
  {
    name: 'Design',
    description: 'We craft intuitive user interfaces and engaging user experiences that align with your brand identity.',
    number: '03',
  },
  {
    name: 'Development',
    description: 'Our developers bring the designs to life using cutting-edge technologies and best coding practices.',
    number: '04',
  },
  {
    name: 'Testing',
    description: 'Rigorous quality assurance ensures your solution works flawlessly across all devices and platforms.',
    number: '05',
  },
  {
    name: 'Launch',
    description: 'We handle the deployment process and provide comprehensive training and documentation.',
    number: '06',
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

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Process"
          subtitle="A systematic approach to delivering exceptional results. We follow a proven methodology that ensures project success and client satisfaction."
          centered
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {process.map((step) => (
              <motion.div
                key={step.name}
                variants={itemVariants}
                className="flex flex-col relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
                {/* Connector line for desktop */}
                {Number(step.number) !== process.length && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%+1rem)] w-8 border-t-2 border-dashed border-gray-200" />
                )}
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
} 