'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { FormData } from '../ConsultationForm';
import VoiceInput from '../VoiceInput';

interface BusinessInfoStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

const industries = [
  'E-commerce',
  'Healthcare',
  'Education',
  'Technology',
  'Real Estate',
  'Restaurant/Food Service',
  'Professional Services',
  'Manufacturing',
  'Retail',
  'Entertainment',
  'Non-profit',
  'Other'
];

const businessSizes = [
  'Solo Entrepreneur',
  '2-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees'
];

export default function BusinessInfoStep({
  formData,
  updateFormData,
  onNext
}: BusinessInfoStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName) {
      newErrors.businessName = 'Business name is required';
    }
    if (!formData.industry) {
      newErrors.industry = 'Please select an industry';
    }
    if (!formData.businessSize) {
      newErrors.businessSize = 'Please select your business size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tell us about your business</h2>
          <p className="mt-2 text-gray-600">
            Help us understand your business better so we can create the perfect solution for you.
          </p>
        </div>

        <div className="space-y-6">
          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                id="businessName"
                value={formData.businessName}
                onChange={(e) => updateFormData({ businessName: e.target.value })}
                className={`block w-full rounded-md ${
                  errors.businessName
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-primary focus:ring-primary'
                } shadow-sm sm:text-sm`}
              />
              <VoiceInput
                onResult={(text) => updateFormData({ businessName: text })}
                className="ml-2"
              />
            </div>
            {errors.businessName && (
              <p className="mt-2 text-sm text-red-600">{errors.businessName}</p>
            )}
          </div>

          {/* Industry */}
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select
              id="industry"
              value={formData.industry}
              onChange={(e) => updateFormData({ industry: e.target.value })}
              className={`mt-1 block w-full rounded-md ${
                errors.industry
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary focus:ring-primary'
              } shadow-sm sm:text-sm`}
            >
              <option value="">Select an industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            {errors.industry && (
              <p className="mt-2 text-sm text-red-600">{errors.industry}</p>
            )}
          </div>

          {/* Business Size */}
          <div>
            <label htmlFor="businessSize" className="block text-sm font-medium text-gray-700">
              Business Size
            </label>
            <select
              id="businessSize"
              value={formData.businessSize}
              onChange={(e) => updateFormData({ businessSize: e.target.value })}
              className={`mt-1 block w-full rounded-md ${
                errors.businessSize
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary focus:ring-primary'
              } shadow-sm sm:text-sm`}
            >
              <option value="">Select business size</option>
              {businessSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {errors.businessSize && (
              <p className="mt-2 text-sm text-red-600">{errors.businessSize}</p>
            )}
          </div>

          {/* Current Website */}
          <div>
            <label htmlFor="currentWebsite" className="block text-sm font-medium text-gray-700">
              Current Website (if any)
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="url"
                id="currentWebsite"
                value={formData.currentWebsite}
                onChange={(e) => updateFormData({ currentWebsite: e.target.value })}
                placeholder="https://example.com"
                className="block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary shadow-sm sm:text-sm"
              />
              <VoiceInput
                onResult={(text) => updateFormData({ currentWebsite: text })}
                className="ml-2"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Next Step
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
} 