import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import FilterSection from './components/FilterSection';
import FeaturedProjects from './components/FeaturedProjects';
import ProcessSection from './components/ProcessSection';
import CtaSection from './components/CtaSection';

export const metadata: Metadata = {
  title: 'Portfolio | McGinnis Technology Group',
  description: 'Explore our collection of successful web development projects and digital solutions.',
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