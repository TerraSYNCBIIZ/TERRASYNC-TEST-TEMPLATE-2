'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MicrophoneIcon } from '@heroicons/react/24/outline';
import VoiceInput from './VoiceInput';

interface BusinessInfoStepProps {
  onNext: (data: BusinessInfoData) => void;
  initialData?: BusinessInfoData;
}

export interface BusinessInfoData {
  businessName: string;
  industry: string;
  businessSize: string;
  currentWebsite: string;
}

const INDUSTRY_OPTIONS = [
  'E-commerce',
  'Healthcare',
  'Technology',
  'Education',
  'Real Estate',
  'Restaurant',
  'Professional Services',
  'Manufacturing',
  'Retail',
  'Non-profit',
  'Entertainment',
  'Other'
];

const BUSINESS_SIZE_OPTIONS = [
  'Solo Entrepreneur',
  'Small (2-10)',
  'Medium (11-50)',
  'Large (51-200)',
  'Enterprise (201+)'
];

export default function BusinessInfoStep({ onNext, initialData }: BusinessInfoStepProps) {
  const [formData, setFormData] = useState<BusinessInfoData>(initialData || {
    businessName: '',
    industry: '',
    businessSize: '',
    currentWebsite: ''
  });

  const [errors, setErrors] = useState<Partial<BusinessInfoData>>({});

  const validateForm = () => {
    const newErrors: Partial<BusinessInfoData> = {};
    
    if (!formData?.businessName?.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    if (!formData?.industry) {
      newErrors.industry = 'Please select your industry';
    }
    if (!formData?.businessSize) {
      newErrors.businessSize = 'Please select your business size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  const handleVoiceInput = (field: keyof BusinessInfoData) => (text: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: text
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8">
        {/* Business Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Name
          </label>
          <div className="relative rounded-lg shadow-sm">
            <input
              type="text"
              value={formData.businessName || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
              className={`block w-full px-4 py-3 rounded-lg bg-white focus:ring-2 focus:ring-offset-2 ${
                errors.businessName
                  ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-primary focus:border-primary'
              }`}
              placeholder="Enter your business name"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <VoiceInput
                onResult={handleVoiceInput('businessName')}
                className="text-gray-400 hover:text-gray-600"
              />
            </div>
          </div>
          {errors.businessName && (
            <p className="mt-2 text-sm text-red-600">{errors.businessName}</p>
          )}
        </div>

        {/* Industry Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <div className="flex flex-wrap gap-2">
            {INDUSTRY_OPTIONS.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, industry }))}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  formData.industry === industry
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
          {errors.industry && (
            <p className="mt-2 text-sm text-red-600">{errors.industry}</p>
          )}
        </div>

        {/* Business Size Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Size
          </label>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_SIZE_OPTIONS.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, businessSize: size }))}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  formData.businessSize === size
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          {errors.businessSize && (
            <p className="mt-2 text-sm text-red-600">{errors.businessSize}</p>
          )}
        </div>

        {/* Current Website Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Website (if any)
          </label>
          <div className="relative rounded-lg shadow-sm">
            <input
              type="url"
              value={formData.currentWebsite || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, currentWebsite: e.target.value }))}
              placeholder="https://example.com"
              className="block w-full px-4 py-3 rounded-lg bg-white border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:border-primary"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <VoiceInput
                onResult={handleVoiceInput('currentWebsite')}
                className="text-gray-400 hover:text-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
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
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.form>
  );
} 