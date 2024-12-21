'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ComingSoonOverlay from '@/app/components/shared/ComingSoonOverlay';

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management and AI-powered recommendations.',
    image: '/portfolio/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    link: '#',
  },
  {
    id: 2,
    title: 'Healthcare Dashboard',
    description: 'An intuitive dashboard for healthcare professionals to manage patient data and appointments.',
    image: '/portfolio/healthcare.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    link: '#',
  },
  {
    id: 3,
    title: 'Educational Platform',
    description: 'A comprehensive learning management system with interactive content and progress tracking.',
    image: '/portfolio/education.jpg',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'WebRTC'],
    link: '#',
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

export default function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover some of our most impactful work and see how we help businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <ComingSoonOverlay 
            message="Featured Projects Coming Soon" 
            subMessage="We're preparing to showcase our best work. Stay tuned!" 
          />
          
          <motion.div variants={itemVariants} className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Project placeholders that will be visible behind the overlay */}
            <div className="bg-gray-50 rounded-2xl p-6 h-[400px] flex items-center justify-center">
              <Image
                src="/Images/project-placeholder-1.jpg"
                alt="Project placeholder"
                width={400}
                height={300}
                className="rounded-xl"
              />
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 h-[400px] flex items-center justify-center">
              <Image
                src="/Images/project-placeholder-2.jpg"
                alt="Project placeholder"
                width={400}
                height={300}
                className="rounded-xl"
              />
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 h-[400px] flex items-center justify-center">
              <Image
                src="/Images/project-placeholder-3.jpg"
                alt="Project placeholder"
                width={400}
                height={300}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 