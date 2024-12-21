'use client';

import { motion } from 'framer-motion';
import { FormData } from '../../types';
import { formStyles } from '../styles';
import { useState } from 'react';
import { PROJECT_TYPES } from '../../constants.tsx';

interface ProjectDetailsStepProps {
  formData: FormData;
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const PROJECT_FEATURES = [
  // Standard Features
  {
    id: 'responsive_design',
    label: 'Responsive Design',
    description: 'Mobile-friendly design that works on all devices',
    tier: 'standard',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 'basic_cms',
    label: 'Basic Content Management',
    description: 'Simple content updates and basic page management',
    tier: 'standard',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z M12 18v.01" />
      </svg>
    )
  },
  {
    id: 'basic_seo',
    label: 'Basic SEO',
    description: 'Essential SEO setup and optimization',
    tier: 'standard',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 'contact_forms',
    label: 'Contact Forms',
    description: 'Standard contact and inquiry forms',
    tier: 'standard',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z M9 17h6m-3-3v6" />
      </svg>
    )
  },
  {
    id: 'ssl_security',
    label: 'SSL Security',
    description: 'Secure HTTPS encryption for your website',
    tier: 'standard',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: 'mobile_navigation',
    label: 'Mobile Navigation',
    description: 'Mobile-friendly menu and navigation system',
    tier: 'standard',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )
  },
  {
    id: 'social_media',
    label: 'Social Media Links',
    description: 'Integration with your social media profiles',
    tier: 'standard',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },

  // Premium Features
  {
    id: 'advanced_seo',
    label: 'Advanced SEO',
    description: 'Advanced search engine optimization and analytics',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'custom_design',
    label: 'Custom Design',
    description: 'Unique, branded design tailored to your business',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    id: 'advanced_cms',
    label: 'Advanced CMS',
    description: 'Advanced content management with multiple user roles',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 'multilingual',
    label: 'Multi-language Support',
    description: 'Support for multiple languages',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    )
  },
  {
    id: 'user_auth',
    label: 'User Authentication',
    description: 'Secure user accounts and roles',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'advanced_forms',
    label: 'Advanced Forms',
    description: 'Complex form building and management system',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    id: 'email_marketing',
    label: 'Email Marketing',
    description: 'Newsletter and email campaign integration',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'blog_management',
    label: 'Blog Management',
    description: 'Advanced blogging and content publishing system',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    id: 'media_library',
    label: 'Media Library',
    description: 'Advanced media management and organization',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'search_functionality',
    label: 'Search Functionality',
    description: 'Advanced site-wide search capabilities',
    tier: 'premium',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },

  // Elite Features
  {
    id: 'ai_optimization',
    label: 'AI Optimization',
    description: 'Advanced optimization for AI engines like ChatGPT & Gemini',
    tier: 'elite',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: 'ai_integration',
    label: 'AI Integration',
    description: 'Custom AI model integration and development',
    tier: 'elite',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'custom_automations',
    label: 'Custom Automations',
    description: 'Advanced automated workflows and processes',
    tier: 'elite',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'custom_api',
    label: 'Custom API Development',
    description: 'Custom API development and complex integrations',
    tier: 'elite',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: 'advanced_analytics',
    label: 'Advanced Analytics',
    description: 'Custom dashboards and advanced reporting',
    tier: 'elite',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function ProjectDetailsStep({ formData, onNext, onBack, updateFormData }: ProjectDetailsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Group features by tier
  const groupedFeatures = {
    standard: PROJECT_FEATURES.filter(f => f.tier === 'standard'),
    premium: PROJECT_FEATURES.filter(f => f.tier === 'premium'),
    elite: PROJECT_FEATURES.filter(f => f.tier === 'elite')
  };

  const handleFeatureToggle = (featureId: string) => {
    const currentFeatures = formData.features || [];
    const newFeatures = currentFeatures.includes(featureId)
      ? currentFeatures.filter(id => id !== featureId)
      : [...currentFeatures, featureId];
    
    updateFormData({ features: newFeatures });
    setErrors({});
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
    setErrors({});
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.features || formData.features.length === 0) {
      newErrors.features = 'Please select at least one feature';
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
      className={formStyles.section}
    >
      <div className={formStyles.header.wrapper}>
        <h2 className={formStyles.header.title}>
          Key Features & Requirements
        </h2>
        <p className={formStyles.header.description}>
          Select the features and functionality you need for your website
        </p>
      </div>

      <div className="space-y-12">
        {/* Standard Features */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard Features</h3>
            <p className="text-sm text-gray-600">
              Essential features included in every website
            </p>
          </div>
          <div className={formStyles.grid.cols['3']}>
            {groupedFeatures.standard.map((feature) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => handleFeatureToggle(feature.id)}
                className={`
                  relative group
                  ${formStyles.card.base}
                  ${formData.features?.includes(feature.id)
                    ? formStyles.card.selected
                    : formStyles.card.unselected}
                `}
              >
                <div className={`
                  ${formStyles.card.icon.base}
                  ${formData.features?.includes(feature.id)
                    ? 'text-primary'
                    : formStyles.card.icon.unselected}
                `}>
                  {feature.icon}
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-sm font-medium text-gray-900">
                    {feature.label}
                  </span>
                  <span className="mt-1 text-xs text-gray-500">
                    {feature.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Premium Features */}
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Premium Features</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                Premium Package
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Advanced features for growing businesses
            </p>
          </div>
          <div className={formStyles.grid.cols['3']}>
            {groupedFeatures.premium.map((feature) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => handleFeatureToggle(feature.id)}
                className={`
                  relative group
                  ${formStyles.card.base}
                  ${formData.features?.includes(feature.id)
                    ? formStyles.card.selected
                    : formStyles.card.unselected}
                  bg-gradient-to-b from-white to-amber-50/30
                  hover:shadow-lg hover:scale-[1.02]
                  border border-amber-200/60
                `}
              >
                {/* Premium badge */}
                <div className="absolute -top-2 -right-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/90 to-orange-500/90 shadow-sm">
                    <svg 
                      className="w-3.5 h-3.5 text-amber-100" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                    <span className="text-[10px] font-semibold text-white uppercase tracking-wider">Premium</span>
                  </div>
                </div>
                <div className="relative flex items-start pt-2">
                  <div className={formStyles.card.icon.base}>
                    {feature.icon}
                  </div>
                  <div className="flex flex-col ml-3">
                    <span className="text-sm font-medium text-gray-900">
                      {feature.label}
                    </span>
                    <span className="mt-1 text-xs text-gray-500">
                      {feature.description}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Elite Features */}
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Elite Features</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm">
                Elite Package
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Advanced features for businesses that need premium functionality
            </p>
          </div>
          <div className={formStyles.grid.cols['3']}>
            {groupedFeatures.elite.map((feature) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => handleFeatureToggle(feature.id)}
                className={`
                  relative group
                  ${formStyles.card.base}
                  ${formData.features?.includes(feature.id)
                    ? formStyles.card.selected
                    : formStyles.card.unselected}
                  bg-gradient-to-b from-white to-violet-50/30
                  hover:shadow-lg hover:scale-[1.02]
                  border border-violet-200/60
                `}
              >
                {/* Elite badge */}
                <div className="absolute -top-2 -right-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600/90 to-indigo-600/90 shadow-sm">
                    <svg 
                      className="w-3.5 h-3.5 text-violet-100" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 12.5L12 22L22 12.5L12 2ZM12 18.85L4.15 12.5L12 6.15L19.85 12.5L12 18.85Z"/>
                    </svg>
                    <span className="text-[10px] font-semibold text-white uppercase tracking-wider">Elite</span>
                  </div>
                </div>
                <div className="relative flex items-start pt-2">
                  <div className={formStyles.card.icon.base}>
                    {feature.icon}
                  </div>
                  <div className="flex flex-col ml-3">
                    <span className="text-sm font-medium text-gray-900">
                      {feature.label}
                    </span>
                    <span className="mt-1 text-xs text-gray-500">
                      {feature.description}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {errors.features && (
          <p className="mt-2 text-sm text-red-600">{errors.features}</p>
        )}
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