'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const featuredPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: AI and Machine Learning Integration',
    excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing web development and creating smarter, more personalized user experiences.',
    image: '/blog/ai-web-dev.jpg',
    category: 'Technology Trends',
    author: {
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      avatar: '/team/sarah.jpg',
    },
    date: 'Mar 16, 2024',
    readTime: '8 min read',
    slug: 'future-web-development-ai-ml',
  },
  {
    id: 2,
    title: 'Building Scalable Applications with Next.js 14',
    excerpt: 'A comprehensive guide to leveraging the latest features in Next.js 14 to build high-performance, scalable web applications.',
    image: '/blog/nextjs-guide.jpg',
    category: 'Development',
    author: {
      name: 'Michael Chen',
      role: 'Senior Developer',
      avatar: '/team/michael.jpg',
    },
    date: 'Mar 14, 2024',
    readTime: '12 min read',
    slug: 'building-scalable-apps-nextjs-14',
  },
  {
    id: 3,
    title: 'Mastering TypeScript: Best Practices and Advanced Patterns',
    excerpt: 'Deep dive into TypeScript best practices, design patterns, and advanced features to write more maintainable code.',
    image: '/blog/typescript-patterns.jpg',
    category: 'Development',
    author: {
      name: 'Emily Rodriguez',
      role: 'Tech Lead',
      avatar: '/team/emily.jpg',
    },
    date: 'Mar 12, 2024',
    readTime: '10 min read',
    slug: 'mastering-typescript-best-practices',
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

export default function FeaturedPosts() {
  return (
    <section id="featured-posts" className="py-24 sm:py-32 bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Articles
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Hand-picked articles from our expert team covering the latest trends, tutorials, and insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {featuredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
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
        </motion.div>
      </motion.div>
    </section>
  );
} 