'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'enterprise', name: 'Enterprise Solutions' },
];

const technologies = [
  { id: 'react', name: 'React' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'node', name: 'Node.js' },
  { id: 'python', name: 'Python' },
  { id: 'aws', name: 'AWS' },
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

export default function FilterSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const toggleTechnology = (techId: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(techId)
        ? prev.filter((id) => id !== techId)
        : [...prev, techId]
    );
  };

  return (
    <section className="py-12 border-b border-gray-200">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-8">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Technologies</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => toggleTechnology(tech.id)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                    selectedTechnologies.includes(tech.id)
                      ? 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tech.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 