'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory and AI recommendations.',
    image: '/portfolio/project1.jpg',
    category: 'ecommerce',
    technologies: ['nextjs', 'typescript', 'aws'],
    link: '#',
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform for managing patient records and appointments.',
    image: '/portfolio/project2.jpg',
    category: 'enterprise',
    technologies: ['react', 'node', 'typescript'],
    link: '#',
  },
  {
    id: 3,
    title: 'Educational Mobile App',
    description: 'Interactive learning platform with progress tracking and personalized content.',
    image: '/portfolio/project3.jpg',
    category: 'mobile',
    technologies: ['react', 'typescript', 'aws'],
    link: '#',
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours.',
    image: '/portfolio/project4.jpg',
    category: 'web',
    technologies: ['nextjs', 'python', 'aws'],
    link: '#',
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics and management platform for social media accounts.',
    image: '/portfolio/project5.jpg',
    category: 'enterprise',
    technologies: ['react', 'node', 'python'],
    link: '#',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts and nutrition with AI coaching.',
    image: '/portfolio/project6.jpg',
    category: 'mobile',
    technologies: ['react', 'typescript', 'python'],
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

export default function ProjectsGrid() {
  return (
    <section className="py-24 sm:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 hover:ring-primary/50 transition-all duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-200 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors duration-200"
                >
                  View Project
                  <svg
                    className="ml-1 h-4 w-4"
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
        </div>
      </motion.div>
    </section>
  );
} 