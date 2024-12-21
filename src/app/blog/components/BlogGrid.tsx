'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ComingSoonOverlay from '@/app/components/shared/ComingSoonOverlay';

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

// Placeholder blog posts with realistic tech content
const placeholderPosts = [
  {
    title: 'Understanding Web Performance: A Deep Dive',
    category: 'Development',
    tags: ['performance', 'optimization', 'web'],
    excerpt: 'Learn about the key metrics that affect web performance and how to optimize your applications for better user experience.',
    author: {
      name: 'David Kim',
      role: 'Performance Engineer',
      image: '/team/placeholder.jpg'
    },
    date: 'Mar 10, 2024',
    readTime: '15 min read'
  },
  {
    title: 'Securing Your Next.js Applications',
    category: 'Security',
    tags: ['nextjs', 'security', 'web'],
    excerpt: 'Best practices and strategies for implementing robust security measures in your Next.js applications.',
    author: {
      name: 'Lisa Chen',
      role: 'Security Specialist',
      image: '/team/placeholder.jpg'
    },
    date: 'Mar 8, 2024',
    readTime: '12 min read'
  },
  {
    title: 'Modern State Management in React',
    category: 'Development',
    tags: ['react', 'state-management', 'web'],
    excerpt: 'Exploring different state management solutions and when to use them in your React applications.',
    author: {
      name: 'Alex Thompson',
      role: 'Frontend Developer',
      image: '/team/placeholder.jpg'
    },
    date: 'Mar 6, 2024',
    readTime: '10 min read'
  },
  {
    title: 'Building Accessible Web Applications',
    category: 'Development',
    tags: ['accessibility', 'web', 'ui'],
    excerpt: 'A comprehensive guide to making your web applications accessible to all users.',
    author: {
      name: 'Sarah Johnson',
      role: 'UI/UX Developer',
      image: '/team/placeholder.jpg'
    },
    date: 'Mar 4, 2024',
    readTime: '8 min read'
  },
  {
    title: 'Testing Strategies for Modern Web Apps',
    category: 'Testing',
    tags: ['testing', 'automation', 'quality'],
    excerpt: 'Learn about effective testing strategies to ensure the quality of your web applications.',
    author: {
      name: 'Mike Brown',
      role: 'QA Engineer',
      image: '/team/placeholder.jpg'
    },
    date: 'Mar 2, 2024',
    readTime: '14 min read'
  },
  {
    title: 'Optimizing Images for the Web',
    category: 'Performance',
    tags: ['images', 'optimization', 'web'],
    excerpt: 'Best practices for optimizing images to improve web performance and user experience.',
    author: {
      name: 'Emily Davis',
      role: 'Performance Engineer',
      image: '/team/placeholder.jpg'
    },
    date: 'Feb 28, 2024',
    readTime: '11 min read'
  }
];

export default function BlogGrid() {
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
            message="Blog Posts Coming Soon" 
            subMessage="Our team is working on creating valuable content to share our expertise and insights." 
          />
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {placeholderPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-3">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {post.category}
                    </span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 border-t border-gray-900/5 bg-gray-50 px-6 py-4">
                  <div className="flex items-center gap-x-3">
                    <span className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.author.role}
                    </span>
                  </div>
                  <div className="flex-1" />
                  <div className="flex items-center gap-x-2 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 