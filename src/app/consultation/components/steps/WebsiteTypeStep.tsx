'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { formStyles } from '../styles';
import { FormData } from '../../types';

const WEBSITE_TYPES = [
  {
    id: 'brochure',
    label: 'Brochure / Informational',
    price: '$',
    description: 'Showcase your business information and services',
    features: [
      'Company info',
      'Service details',
      'Team profiles',
      'Contact forms',
      'Location info'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    id: 'ecommerce',
    label: 'E-commerce Store',
    price: '$',
    description: 'Sell products or services online',
    features: [
      'Product catalog',
      'Shopping cart',
      'Secure checkout',
      'Inventory management',
      'Order tracking'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'service_business',
    label: 'Service Business',
    price: '$$',
    description: 'Professional service business platform',
    features: [
      'Service catalog',
      'Booking system',
      'Client portal',
      'Quote generator',
      'Portfolio showcase',
      'Testimonials'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    id: 'restaurant',
    label: 'Restaurant Website',
    price: '$$',
    description: 'Complete restaurant management and ordering system',
    features: [
      'Online ordering',
      'Menu management',
      'Table reservations',
      'Delivery integration',
      'Customer reviews',
      'Location maps'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    id: 'landing_funnel',
    label: 'Landing Page / Funnel',
    price: '$$',
    description: 'Focused on converting visitors into leads or customers',
    features: [
      'Lead capture',
      'Call-to-action focused',
      'Sales funnel',
      'A/B testing',
      'Analytics tracking'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    id: 'marketplace',
    label: 'Marketplace Platform',
    price: '$$',
    description: 'Connect buyers and sellers or service providers',
    features: [
      'Vendor management',
      'Product listings',
      'Order management',
      'Commission system',
      'Messaging system'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'all_in_one',
    label: 'All-in-One Business Platform',
    price: '$$$',
    description: 'Complete business solution with multiple integrated features',
    features: [
      'Landing pages',
      'E-commerce store',
      'Member portal',
      'Blog platform',
      'Appointment booking',
      'Customer dashboard'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
      </svg>
    )
  },
  {
    id: 'saas_platform',
    label: 'SaaS Platform',
    price: '$$$',
    description: 'Software-as-a-Service application platform',
    features: [
      'User dashboard',
      'Subscription billing',
      'API access',
      'Documentation',
      'Support system',
      'Usage analytics'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

interface WebsiteTypeStepProps {
  formData: FormData;
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

export default function WebsiteTypeStep({ formData, onNext, onBack, updateFormData }: WebsiteTypeStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedType, setSelectedType] = useState<string>(formData.websiteType || '');

  const handleWebsiteTypeSelect = (typeId: string) => {
    console.log('Selected website type:', typeId);
    setSelectedType(typeId);
    setErrors({});
  };

  const handleSubmit = () => {
    console.log('Submitting with type:', selectedType);
    if (!selectedType) {
      setErrors({ websiteType: 'Please select a website type' });
      return;
    }
    
    const updatedData = { 
      websiteType: selectedType,
      websiteTypeDetails: formData.websiteTypeDetails 
    };
    console.log('Updating form data:', updatedData);
    updateFormData(updatedData);
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={formStyles.section}
    >
      <div className={formStyles.header.wrapper}>
        <h2 className={formStyles.header.title}>
          Website Type
        </h2>
        <p className={formStyles.header.description}>
          Select the primary purpose and structure of your website
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <label className={formStyles.field.label}>
            Primary Website Type
          </label>
          <div className={formStyles.grid.cols['2']}>
            {WEBSITE_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => handleWebsiteTypeSelect(type.id)}
                className={`
                  relative group
                  ${formStyles.card.base}
                  ${selectedType === type.id
                    ? formStyles.card.selected
                    : formStyles.card.unselected}
                `}
              >
                <div className="absolute -top-2.5 -right-2.5">
                  <span className={`
                    inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold
                    ${type.price === '$' ? 'bg-gray-100 text-gray-600' : ''}
                    ${type.price === '$$' ? 'bg-amber-100 text-amber-800' : ''}
                    ${type.price === '$$$' ? 'bg-violet-100 text-violet-800' : ''}
                    shadow-sm
                  `}>
                    {type.price}
                  </span>
                </div>
                <div className="relative flex items-start">
                  <div className={`${formStyles.card.icon.base} ${
                    selectedType === type.id
                      ? formStyles.card.icon.selected
                      : formStyles.card.icon.unselected
                  }`}>
                    {type.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{type.label}</span>
                    <span className="mt-1 text-xs text-gray-500">{type.description}</span>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {type.features.map(feature => (
                        <span 
                          key={feature}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          {errors.websiteType && (
            <p className={formStyles.field.error}>{errors.websiteType}</p>
          )}
        </div>

        <div className={formStyles.field.wrapper}>
          <label className={formStyles.field.label}>
            Additional Requirements
          </label>
          <textarea
            value={formData.websiteTypeDetails || ''}
            onChange={(e) => updateFormData({ websiteTypeDetails: e.target.value })}
            className={formStyles.field.textarea}
            placeholder="Describe any specific requirements or combinations of the above types..."
            rows={4}
          />
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