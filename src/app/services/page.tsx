import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import ServiceDetails from './components/ServiceDetails';
import CaseStudies from './components/CaseStudies';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';

export const metadata: Metadata = {
  title: 'Services | McGinnis Technology Group',
  description: 'Discover our comprehensive web development and digital transformation services.',
};

export default function ServicesPage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <ServiceDetails />
      <CaseStudies />
      <FaqSection />
      <CtaSection />
    </main>
  );
} 