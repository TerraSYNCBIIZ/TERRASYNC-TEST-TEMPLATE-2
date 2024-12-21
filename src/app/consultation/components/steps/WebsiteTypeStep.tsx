'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface WebsiteTypeData {
  websiteType: string;
  otherDetails?: string;
}

interface WebsiteTypeStepProps {
  onNext: (data: WebsiteTypeData) => void;
  onBack: () => void;
  initialData?: WebsiteTypeData;
}

const websiteTypes = [
  {
    id: 'business',
    title: 'Business Website',
    description: 'Professional website to showcase your business and services',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Online store with product catalog and secure checkout',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    id: 'platform',
    title: 'Web Application',
    description: 'Custom platform with user accounts and advanced features',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    id: 'other',
    title: 'Other',
    description: 'Tell us about your unique project requirements',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
];

export default function WebsiteTypeStep({ onNext, onBack, initialData }: WebsiteTypeStepProps) {
  const [selectedType, setSelectedType] = useState<string>(initialData?.websiteType || '');
  const [otherDetails, setOtherDetails] = useState<string>(initialData?.otherDetails || '');
  const [error, setError] = useState<string>('');

  const handleNext = () => {
    if (!selectedType) {
      setError('Please select a website type');
      return;
    }

    if (selectedType === 'other' && !otherDetails) {
      setError('Please provide details about your project');
      return;
    }

    onNext({
      websiteType: selectedType,
      ...(selectedType === 'other' && { otherDetails }),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          What type of website do you need?
        </h2>
        <p className="mt-2 text-gray-600">
          Choose the option that best describes your project.
        </p>
      </div>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {websiteTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => {
              setSelectedType(type.id);
              setError('');
            }}
            className={`relative flex flex-col items-start rounded-lg border-2 p-4 text-left hover:border-primary focus:outline-none ${
              selectedType === type.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200'
            }`}
          >
            <div className={`rounded-lg p-2 ${
              selectedType === type.id
                ? 'bg-primary/10 text-primary'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {type.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {type.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {type.description}
            </p>
          </button>
        ))}
      </div>

      {selectedType === 'other' && (
        <div>
          <label htmlFor="otherDetails" className="block text-sm font-medium text-gray-700">
            Project Details
          </label>
          <textarea
            id="otherDetails"
            name="otherDetails"
            rows={4}
            value={otherDetails}
            onChange={(e) => {
              setOtherDetails(e.target.value);
              setError('');
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            placeholder="Please describe your project requirements..."
          />
        </div>
      )}

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