'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    <section id="featured-projects" className="py-24 sm:py-32 bg-gray-50">
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

        <div className="mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredProjects[currentProject].image}
                    alt={featuredProjects[currentProject].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {featuredProjects[currentProject].title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    {featuredProjects[currentProject].description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProjects[currentProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href={featuredProjects[currentProject].link}
                      className="btn-primary"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
} 