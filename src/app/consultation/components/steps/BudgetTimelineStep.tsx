'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface BudgetTimelineData {
  budget: string;
  timeline: string;
}

interface BudgetTimelineStepProps {
  onNext: (data: BudgetTimelineData) => void;
  onBack: () => void;
  initialData?: BudgetTimelineData;
}

const budgetRanges = [
  { id: 'small', label: '$5,000 - $10,000', description: 'Basic website with essential features' },
  { id: 'medium', label: '$10,000 - $25,000', description: 'Advanced functionality and custom design' },
  { id: 'large', label: '$25,000 - $50,000', description: 'Complex platform with extensive features' },
  { id: 'enterprise', label: '$50,000+', description: 'Enterprise-level solutions' },
];

const timelineOptions = [
  { id: 'urgent', label: 'ASAP (1-2 months)', description: 'Expedited development process' },
  { id: 'standard', label: '2-4 months', description: 'Standard development timeline' },
  { id: 'flexible', label: '4-6 months', description: 'Flexible, phased approach' },
  { id: 'planning', label: 'Still in planning', description: 'Timeline to be determined' },
];

export default function BudgetTimelineStep({ onNext, onBack, initialData }: BudgetTimelineStepProps) {
  const [budget, setBudget] = useState<string>(initialData?.budget || '');
  const [timeline, setTimeline] = useState<string>(initialData?.timeline || '');
  const [error, setError] = useState<string>('');

  const handleNext = () => {
    if (!budget || !timeline) {
      setError('Please select both budget and timeline');
      return;
    }

    onNext({ budget, timeline });
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

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          What&apos;s your budget range?
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {budgetRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => {
                setBudget(range.id);
                setError('');
              }}
              className={`relative flex flex-col items-start rounded-lg border-2 p-4 text-left hover:border-primary focus:outline-none ${
                budget === range.id
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200'
              }`}
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {range.label}
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                {range.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          What&apos;s your preferred timeline?
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {timelineOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                setTimeline(option.id);
                setError('');
              }}
              className={`relative flex flex-col items-start rounded-lg border-2 p-4 text-left hover:border-primary focus:outline-none ${
                timeline === option.id
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200'
              }`}
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
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Next
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
} 