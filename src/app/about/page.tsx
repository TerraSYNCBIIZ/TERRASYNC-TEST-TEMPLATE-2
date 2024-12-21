import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import ProcessSection from './components/ProcessSection';
import CtaSection from './components/CtaSection';

export const metadata: Metadata = {
  title: 'About Us | CodeSync Consulting',
  description: 'Learn about our mission, values, and the talented team behind CodeSync Consulting. We are passionate about delivering exceptional web solutions.',
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <ProcessSection />
      <CtaSection />
    </main>
  );
} 