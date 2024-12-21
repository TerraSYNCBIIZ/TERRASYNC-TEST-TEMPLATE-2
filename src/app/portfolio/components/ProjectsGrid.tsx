'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ComingSoonOverlay from '@/app/components/shared/ComingSoonOverlay';

const projects = [
  {
    title: 'Modern E-commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory and AI recommendations.',
    image: '/Images/projects/ecommerce.jpg',
    tags: ['nextjs', 'typescript', 'aws'],
    link: '#'
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform for managing patient records and appointments.',
    image: '/Images/projects/healthcare.jpg',
    tags: ['react', 'node', 'typescript'],
    link: '#'
  },
  {
    title: 'Educational Mobile App',
    description: 'Interactive learning platform with progress tracking and personalized content.',
    image: '/Images/projects/education.jpg',
    tags: ['react', 'typescript', 'aws'],
    link: '#'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours.',
    image: '/Images/projects/realestate.jpg',
    tags: ['nextjs', 'python', 'aws'],
    link: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics and management platform for social media accounts.',
    image: '/Images/projects/social.jpg',
    tags: ['react', 'node', 'python'],
    link: '#'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts and nutrition with AI coaching.',
    image: '/Images/projects/fitness.jpg',
    tags: ['react', 'typescript', 'python'],
    link: '#'
  }
];

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

export default function ProjectsGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="relative">
          <ComingSoonOverlay 
            message="Project Gallery Coming Soon" 
            subMessage="Our comprehensive portfolio is under construction. Check back soon to explore our full range of projects!" 
          />
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[16/9] bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]">
                  <div className="relative h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0" />
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-100">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="mt-4 inline-flex items-center text-sm font-medium text-white"
                  >
                    View Project
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 