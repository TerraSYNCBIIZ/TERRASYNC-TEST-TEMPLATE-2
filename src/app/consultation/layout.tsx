import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Consultation | McGinnis Technology Group',
  description: 'Schedule a free consultation with our web development experts. We\'ll help identify your needs and create a custom solution for your business.',
  openGraph: {
    title: 'Free Consultation | McGinnis Technology Group',
    description: 'Schedule a free consultation with our web development experts. We\'ll help identify your needs and create a custom solution for your business.',
    type: 'website',
  },
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 