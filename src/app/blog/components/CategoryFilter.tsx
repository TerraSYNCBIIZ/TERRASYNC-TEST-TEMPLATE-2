'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'development', name: 'Development' },
  { id: 'technology', name: 'Technology' },
  { id: 'tutorials', name: 'Tutorials' },
  { id: 'insights', name: 'Insights' },
  { id: 'case-studies', name: 'Case Studies' },
];

const tags = [
  { id: 'nextjs', name: 'Next.js' },
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'performance', name: 'Performance' },
  { id: 'security', name: 'Security' },
  { id: 'design', name: 'Design' },
  { id: 'testing', name: 'Testing' },
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

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  return (
    <section id="categories" className="py-12 border-b border-gray-200">
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
            <h3 className="text-base font-semibold text-gray-900">Categories</h3>
            <div className="mt-4 flex flex-wrap gap-3">
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

          {/* Tags */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Popular Topics</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                    selectedTags.includes(tag.id)
                      ? 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters */}
          {selectedTags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-x-3"
            >
              <span className="text-sm text-gray-500">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tagId) => {
                  const tag = tags.find((t) => t.id === tagId);
                  return (
                    <button
                      key={tagId}
                      onClick={() => toggleTag(tagId)}
                      className="inline-flex items-center gap-x-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                    >
                      {tag?.name}
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </button>
                  );
                })}
                {selectedTags.length > 1 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
} 