import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ContactOptions from './components/ContactOptions';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import FaqSection from './components/FaqSection';
import OfficeInfo from './components/OfficeInfo';

export const metadata: Metadata = {
  title: 'Contact Us | McGinnis Technology Group',
  description: 'Get in touch with us to discuss your project. We\'re here to help turn your vision into reality.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactOptions />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <LocationMap />
      </div>
      <OfficeInfo />
      <FaqSection />
    </main>
  );
} 