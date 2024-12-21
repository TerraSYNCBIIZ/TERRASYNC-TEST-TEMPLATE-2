'use client';

import { motion } from 'framer-motion';
import { FormData } from '../../types';
import { formStyles } from '../styles';
import { useState } from 'react';

interface BudgetTimelineData {
  budget: string;
  timeline: string;
}

interface BudgetTimelineStepProps {
  formData: FormData;
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const BUDGET_OPTIONS = [
  {
    id: 'free',
    label: 'Free (Limited Time)',
    description: 'Basic websites - Brochure & Simple E-commerce only',
    note: 'Special promotion for select website types',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'starter',
    label: '$100 - $5,000',
    description: 'Basic websites with standard features',
    note: 'Perfect for small businesses getting started',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 'professional',
    label: '$5,000 - $15,000',
    description: 'Professional websites with advanced features',
    note: 'Ideal for growing businesses',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'enterprise',
    label: '$15,000+',
    description: 'Complex platforms and enterprise solutions',
    note: 'For large-scale business needs',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const TIMELINE_OPTIONS = [
  {
    id: 'rush',
    label: 'Rush Order (1 week)',
    description: 'Expedited development for select website types',
    note: 'Available for basic websites only',
    badge: 'Premium Service',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'standard',
    label: '1 Month',
    description: 'Standard development timeline',
    note: 'Most common timeline for basic to medium projects',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'extended',
    label: '2-4 Months',
    description: 'Extended development for complex projects',
    note: 'Recommended for feature-rich websites',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'custom',
    label: 'Custom Timeline',
    description: 'Flexible timeline based on project scope',
    note: 'For enterprise and complex platforms',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

export default function BudgetTimelineStep({ formData, onNext, onBack, updateFormData }: BudgetTimelineStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof FormData, value: any) => {
    updateFormData({ [field]: value });
    setErrors({});
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Budget & Timeline
        </h2>
        <p className="mt-2 text-gray-600">
          Help us understand your investment range and desired timeline.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            What&apos;s your budget range?
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BUDGET_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => handleInputChange('budget', option.id)}
                className={`
                  relative flex flex-col items-start rounded-lg border-2 p-4 text-left 
                  hover:border-primary focus:outline-none
                  ${formData.budget === option.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200'
                  }
                `}
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {option.label}
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
          {errors.budget && (
            <p className="mt-2 text-sm text-red-600">{errors.budget}</p>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            What&apos;s your preferred timeline?
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TIMELINE_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => handleInputChange('timeline', option.id)}
                className={`
                  relative flex flex-col items-start rounded-lg border-2 p-4 text-left 
                  hover:border-primary focus:outline-none
                  ${formData.timeline === option.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200'
                  }
                `}
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {option.label}
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
          {errors.timeline && (
            <p className="mt-2 text-sm text-red-600">{errors.timeline}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className={`${formStyles.button.base} ${formStyles.button.secondary}`}
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className={`${formStyles.button.base} ${formStyles.button.primary}`}
        >
          Next Step
        </button>
      </div>
    </motion.div>
  );
} 