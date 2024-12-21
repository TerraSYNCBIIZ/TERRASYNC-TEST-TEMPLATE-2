import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import FeaturedPosts from './components/FeaturedPosts';
import CategoryFilter from './components/CategoryFilter';
import BlogGrid from './components/BlogGrid';
import NewsletterSection from './components/NewsletterSection';
import CtaSection from './components/CtaSection';

export const metadata: Metadata = {
  title: 'Blog | McGinnis Technology Group',
  description: 'Stay up to date with the latest insights and trends in web development, design, and digital transformation.',
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