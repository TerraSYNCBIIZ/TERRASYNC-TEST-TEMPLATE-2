import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import ServiceDetails from './components/ServiceDetails';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import SuccessStories from './components/SuccessStories';

export const metadata: Metadata = {
  title: 'Our Services | McGinnis Technology Group',
  description: 'Explore our comprehensive web development and digital transformation services.',
};

export default function ServicesPage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <ServiceDetails />
      <SuccessStories />
      <FaqSection />
      <CtaSection />
    </main>
  );
} 