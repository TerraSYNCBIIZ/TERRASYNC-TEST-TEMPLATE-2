import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import FilterSection from './components/FilterSection';
import FeaturedProjects from './components/FeaturedProjects';
import ProcessSection from './components/ProcessSection';
import CtaSection from './components/CtaSection';

export const metadata: Metadata = {
  title: 'Portfolio | CodeSync Consulting',
  description: 'Explore our diverse portfolio of web development projects. From e-commerce to enterprise solutions, see how we help businesses succeed online.',
};

export default function PortfolioPage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <FilterSection />
      <ProjectsGrid />
      <ProcessSection />
      <CtaSection />
    </main>
  );
} 