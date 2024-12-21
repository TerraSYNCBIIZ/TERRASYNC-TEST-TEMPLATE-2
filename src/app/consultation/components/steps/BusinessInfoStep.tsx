'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { FormData } from '@/app/consultation/types';

interface BusinessInfoStepProps {
  formData: FormData;
  onNext: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const businessSizes = [
  { 
    id: 'startup', 
    label: 'Startup', 
    description: '1-10 employees',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    id: 'small', 
    label: 'Small Business', 
    description: '11-50 employees',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    id: 'medium', 
    label: 'Medium Business', 
    description: '51-200 employees',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    id: 'large', 
    label: 'Large Business', 
    description: '201+ employees',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

const industries = [
  { 
    id: 'technology',
    label: 'Technology',
    icon: '💻'
  },
  { 
    id: 'healthcare',
    label: 'Healthcare',
    icon: '🏥'
  },
  { 
    id: 'finance',
    label: 'Finance',
    icon: '💰'
  },
  { 
    id: 'education',
    label: 'Education',
    icon: '🎓'
  },
  { 
    id: 'retail',
    label: 'Retail',
    icon: '🛍️'
  },
  { 
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: '🏭'
  },
  { 
    id: 'real-estate',
    label: 'Real Estate',
    icon: '🏢'
  },
  { 
    id: 'professional-services',
    label: 'Professional Services',
    icon: '👔'
  },
  { 
    id: 'hospitality',
    label: 'Hospitality',
    icon: '🏨'
  },
  { 
    id: 'entertainment',
    label: 'Entertainment',
    icon: '🎬'
  },
  { 
    id: 'non-profit',
    label: 'Non-Profit',
    icon: '🤝'
  },
  { 
    id: 'other',
    label: 'Other',
    icon: '✨'
  }
];

export default function BusinessInfoStep({
  formData,
  onNext,
  updateFormData
}: BusinessInfoStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    if (!formData.industry) {
      newErrors.industry = 'Please select an industry';
    }
    if (!formData.businessSize) {
      newErrors.businessSize = 'Please select a business size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Tell us about your business
        </h2>
        <p className="mt-2 text-gray-600">
          Help us understand your business better so we can create the perfect solution for you.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            placeholder="Enter your business name"
            className={`block w-full rounded-lg shadow-sm ${
              errors.businessName ? 'border-red-300' : 'border-gray-300'
            } focus:border-primary focus:ring-primary sm:text-sm transition-colors`}
          />
          {errors.businessName && (
            <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Industry
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {industries.map(industry => (
              <button
                key={industry.id}
                type="button"
                onClick={() => handleInputChange('industry', industry.id)}
                className={`flex items-center space-x-2 p-3 rounded-lg border transition-all ${
                  formData.industry === industry.id
                    ? 'border-primary bg-primary/5 text-primary ring-2 ring-primary/20'
                    : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{industry.icon}</span>
                <span className="text-sm font-medium">{industry.label}</span>
              </button>
            ))}
          </div>
          {errors.industry && (
            <p className="mt-2 text-sm text-red-600">{errors.industry}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Business Size
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {businessSizes.map((size) => (
              <button
                key={size.id}
                type="button"
                onClick={() => handleInputChange('businessSize', size.id)}
                className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all ${
                  formData.businessSize === size.id
                    ? 'border-primary bg-primary/5 text-primary ring-2 ring-primary/20'
                    : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                }`}
              >
                <div className={`${
                  formData.businessSize === size.id ? 'text-primary' : 'text-gray-400'
                } transition-colors`}>
                  {size.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{size.label}</span>
                  <span className="mt-1 text-xs text-gray-500">{size.description}</span>
                </div>
              </button>
            ))}
          </div>
          {errors.businessSize && (
            <p className="mt-2 text-sm text-red-600">{errors.businessSize}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Website (if any)
          </label>
          <input
            type="url"
            value={formData.currentWebsite}
            onChange={(e) => handleInputChange('currentWebsite', e.target.value)}
            placeholder="https://example.com"
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors"
          />
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          Next Step
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
} 