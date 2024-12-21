import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import FeaturedPosts from './components/FeaturedPosts';
import CategoryFilter from './components/CategoryFilter';
import BlogGrid from './components/BlogGrid';
import NewsletterSection from './components/NewsletterSection';
import CtaSection from './components/CtaSection';

export const metadata: Metadata = {
  title: 'Blog | CodeSync Consulting',
  description: 'Stay updated with the latest in web development, tech trends, and industry insights. Expert articles and tutorials from our development team.',
};

export default function BlogPage() {
  return (
    <main>
      <HeroSection />
      <FeaturedPosts />
      <CategoryFilter />
      <BlogGrid />
      <NewsletterSection />
      <CtaSection />
    </main>
  );
} 