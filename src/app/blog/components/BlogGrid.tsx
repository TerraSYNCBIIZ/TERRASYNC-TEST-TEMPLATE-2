'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Web Performance: A Deep Dive',
    excerpt: 'Learn about the key metrics that affect web performance and how to optimize your applications for better user experience.',
    image: '/blog/web-performance.jpg',
    category: 'Development',
    tags: ['performance', 'optimization', 'web'],
    author: {
      name: 'David Kim',
      role: 'Performance Engineer',
      avatar: '/team/david.jpg',
    },
    date: 'Mar 10, 2024',
    readTime: '15 min read',
    slug: 'understanding-web-performance',
  },
  {
    id: 2,
    title: 'Securing Your Next.js Applications',
    excerpt: 'Best practices and strategies for implementing robust security measures in your Next.js applications.',
    image: '/blog/security.jpg',
    category: 'Security',
    tags: ['nextjs', 'security', 'web'],
    author: {
      name: 'Lisa Chen',
      role: 'Security Specialist',
      avatar: '/team/lisa.jpg',
    },
    date: 'Mar 8, 2024',
    readTime: '12 min read',
    slug: 'securing-nextjs-applications',
  },
  {
    id: 3,
    title: 'Modern State Management in React',
    excerpt: 'Exploring different state management solutions and when to use them in your React applications.',
    image: '/blog/state-management.jpg',
    category: 'Development',
    tags: ['react', 'state-management', 'web'],
    author: {
      name: 'Alex Thompson',
      role: 'Frontend Developer',
      avatar: '/team/alex.jpg',
    },
    date: 'Mar 6, 2024',
    readTime: '10 min read',
    slug: 'modern-state-management-react',
  },
  {
    id: 4,
    title: 'Building Accessible Web Applications',
    excerpt: 'A comprehensive guide to implementing accessibility features in your web applications.',
    image: '/blog/accessibility.jpg',
    category: 'Development',
    tags: ['accessibility', 'web', 'ui'],
    author: {
      name: 'Sarah Johnson',
      role: 'UI/UX Developer',
      avatar: '/team/sarah.jpg',
    },
    date: 'Mar 4, 2024',
    readTime: '8 min read',
    slug: 'building-accessible-web-applications',
  },
  {
    id: 5,
    title: 'Testing Strategies for Modern Web Apps',
    excerpt: 'Learn about different testing approaches and tools to ensure your web applications are reliable.',
    image: '/blog/testing.jpg',
    category: 'Testing',
    tags: ['testing', 'automation', 'web'],
    author: {
      name: 'Michael Chen',
      role: 'QA Engineer',
      avatar: '/team/michael.jpg',
    },
    date: 'Mar 2, 2024',
    readTime: '13 min read',
    slug: 'testing-strategies-modern-web-apps',
  },
  {
    id: 6,
    title: 'Optimizing Images for the Web',
    excerpt: 'Best practices for handling and optimizing images to improve website performance.',
    image: '/blog/image-optimization.jpg',
    category: 'Performance',
    tags: ['performance', 'images', 'web'],
    author: {
      name: 'Emily Rodriguez',
      role: 'Performance Engineer',
      avatar: '/team/emily.jpg',
    },
    date: 'Feb 28, 2024',
    readTime: '9 min read',
    slug: 'optimizing-images-web',
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

export default function BlogGrid() {
  return (
    <section className="py-24 sm:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-base text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-x-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-x-2 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <button className="btn-secondary">
            Load More Articles
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
} 