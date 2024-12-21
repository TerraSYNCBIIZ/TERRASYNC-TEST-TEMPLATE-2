'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type WebsiteType = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  isCustomPricing: boolean;
};

type Feature = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'design' | 'functionality' | 'marketing';
  isCustomPricing?: boolean;
};

type Package = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  includedFeatures: string[];
  tier: 'basic' | 'premium' | 'elite';
  websiteType: string;
};

export function TransparentPricingButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        See Our Transparent Pricing
      </button>
      <PricingCalculator isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

interface PricingCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingCalculator({ isOpen, onClose }: PricingCalculatorProps) {
  const websiteTypes: WebsiteType[] = [
    {
      id: 'landing',
      name: 'Landing Page',
      description: 'Single page website to showcase your business',
      basePrice: 0,
      isCustomPricing: false,
    },
    {
      id: 'business',
      name: 'Business Website',
      description: 'Professional multi-page business website',
      basePrice: 1500,
      isCustomPricing: false,
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Store',
      description: 'Full-featured online store',
      basePrice: 2500,
      isCustomPricing: false,
    },
    {
      id: 'webapp',
      name: 'Web Application',
      description: 'Custom web application with advanced functionality',
      basePrice: 5000,
      isCustomPricing: false,
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',
      description: 'Large-scale enterprise web platform',
      basePrice: 0,
      isCustomPricing: true,
    },
  ];

  const prebuiltPackages: Package[] = [
    {
      id: 'starter',
      name: 'Starter Package',
      description: 'Perfect for small businesses just getting started',
      basePrice: 0,
      tier: 'basic',
      websiteType: 'landing',
      includedFeatures: [
        'responsive-design',
        'basic-seo',
        'basic-support',
        'social'
      ],
    },
    {
      id: 'professional',
      name: 'Professional Package',
      description: 'Ideal for growing businesses',
      basePrice: 2500,
      tier: 'premium',
      websiteType: 'business',
      includedFeatures: [
        'custom-design',
        'responsive-design',
        'cms',
        'advanced-seo',
        'analytics',
        'blog',
        'social',
        'newsletter'
      ],
    },
    {
      id: 'ecommerce-pro',
      name: 'E-commerce Pro',
      description: 'Complete online store solution',
      basePrice: 4000,
      tier: 'premium',
      websiteType: 'ecommerce',
      includedFeatures: [
        'custom-design',
        'responsive-design',
        'cms',
        'payments',
        'inventory',
        'advanced-seo',
        'analytics',
        'product-management'
      ],
    },
    {
      id: 'enterprise-suite',
      name: 'Enterprise Suite',
      description: 'Full-featured enterprise solution',
      basePrice: 10000,
      tier: 'elite',
      websiteType: 'enterprise',
      includedFeatures: [
        'custom-design',
        'responsive-design',
        'cms',
        'auth',
        'advanced-security',
        'api-integration',
        'premium-support',
        'advanced-seo'
      ],
    },
  ];

  const features: Feature[] = [
    // Design Features
    {
      id: 'custom-design',
      name: 'Custom Design',
      description: 'Unique, branded design tailored to your business',
      price: 1000,
      category: 'design',
    },
    {
      id: 'responsive-design',
      name: 'Responsive Design',
      description: 'Optimized for all devices and screen sizes',
      price: 500,
      category: 'design',
    },
    {
      id: 'animations',
      name: 'Advanced Animations',
      description: 'Smooth animations and transitions',
      price: 800,
      category: 'design',
    },
    {
      id: 'dark-mode',
      name: 'Dark Mode',
      description: 'Toggle between light and dark themes',
      price: 300,
      category: 'design',
    },
    // Functionality Features
    {
      id: 'cms',
      name: 'Content Management',
      description: 'Easy-to-use content management system',
      price: 800,
      category: 'functionality',
    },
    {
      id: 'auth',
      name: 'User Authentication',
      description: 'Secure login and user management',
      price: 1000,
      category: 'functionality',
    },
    {
      id: 'payments',
      name: 'Payment Processing',
      description: 'Secure payment gateway integration',
      price: 1200,
      category: 'functionality',
    },
    {
      id: 'blog',
      name: 'Blog System',
      description: 'Full-featured blogging platform',
      price: 600,
      category: 'functionality',
    },
    {
      id: 'inventory',
      name: 'Inventory Management',
      description: 'Track and manage product inventory',
      price: 1000,
      category: 'functionality',
    },
    {
      id: 'product-management',
      name: 'Product Management',
      description: 'Advanced product catalog management',
      price: 800,
      category: 'functionality',
    },
    {
      id: 'advanced-security',
      name: 'Advanced Security',
      description: 'Enhanced security features and monitoring',
      price: 1500,
      category: 'functionality',
      isCustomPricing: true,
    },
    {
      id: 'api-integration',
      name: 'API Integration',
      description: 'Connect with third-party services',
      price: 1200,
      category: 'functionality',
    },
    // Marketing Features
    {
      id: 'basic-seo',
      name: 'Basic SEO',
      description: 'Essential search engine optimization',
      price: 300,
      category: 'marketing',
    },
    {
      id: 'advanced-seo',
      name: 'Advanced SEO',
      description: 'Comprehensive search engine optimization',
      price: 800,
      category: 'marketing',
    },
    {
      id: 'analytics',
      name: 'Analytics Integration',
      description: 'Track website performance and user behavior',
      price: 400,
      category: 'marketing',
    },
    {
      id: 'social',
      name: 'Social Media Integration',
      description: 'Connect with your social media platforms',
      price: 300,
      category: 'marketing',
    },
    {
      id: 'newsletter',
      name: 'Newsletter System',
      description: 'Email newsletter and subscriber management',
      price: 500,
      category: 'marketing',
    },
    // Support Features
    {
      id: 'basic-support',
      name: 'Basic Support',
      description: 'Email support during business hours',
      price: 0,
      category: 'functionality',
    },
    {
      id: 'premium-support',
      name: 'Premium Support',
      description: '24/7 priority support',
      price: 1000,
      category: 'functionality',
      isCustomPricing: true,
    },
  ];

  const [selectedType, setSelectedType] = useState<string>('landing');
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState(5);

  const selectPackage = (packageId: string) => {
    const pkg = prebuiltPackages.find(p => p.id === packageId)!;
    setSelectedType(pkg.websiteType);
    setSelectedFeatures(new Set(pkg.includedFeatures));
    setSelectedPackage(packageId);
  };

  const toggleFeature = (featureId: string) => {
    const newSelected = new Set(selectedFeatures);
    if (newSelected.has(featureId)) {
      newSelected.delete(featureId);
    } else {
      newSelected.add(featureId);
    }
    setSelectedFeatures(newSelected);
  };

  const calculateTotal = () => {
    const selectedWebsite = websiteTypes.find(t => t.id === selectedType)!;
    const basePrice = selectedWebsite.basePrice;
    
    const featuresPrice = Array.from(selectedFeatures).reduce((sum, featureId) => {
      const feature = features.find(f => f.id === featureId)!;
      return sum + feature.price;
    }, 0);

    const pagesPrice = Math.max(0, pageCount - 5) * 100; // First 5 pages free
    return basePrice + featuresPrice + pagesPrice;
  };

  const hasCustomPricing = () => {
    const selectedWebsite = websiteTypes.find(t => t.id === selectedType)!;
    if (selectedWebsite.isCustomPricing) return true;
    
    return Array.from(selectedFeatures).some(featureId => {
      const feature = features.find(f => f.id === featureId)!;
      return feature.isCustomPricing;
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[999]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          <div className="relative w-full h-full md:w-auto md:h-auto p-4 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full max-w-4xl max-h-[90vh] overflow-hidden z-[1000]"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-8 py-6 border-b border-gray-100 flex justify-between items-center z-10">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#37c594] to-blue-500 text-transparent bg-clip-text">
                    Website Price Calculator
                  </h2>
                  <p className="text-sm font-medium mt-1 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      🎉 Launch Special
                    </span>
                    <span className="text-gray-600">
                      Basic Website Package FREE!
                    </span>
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div 
                className="overflow-y-auto max-h-[calc(90vh-5rem)] px-8 [&::-webkit-scrollbar]:w-2 
                  [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-lg
                  [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-lg
                  [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white
                  hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 pb-8"
              >
                <div className="p-8">
                  {/* Prebuilt Packages */}
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">Popular Packages</h3>
                      <span className="px-3 py-1 bg-green-50 text-green-600 text-sm font-medium rounded-full">
                        Recommended
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {prebuiltPackages.map((pkg) => (
                        <motion.div
                          key={pkg.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                            selectedPackage === pkg.id
                              ? 'border-blue-500 bg-gradient-to-b from-blue-50 to-white'
                              : 'border-gray-100 hover:border-blue-200 hover:shadow-lg'
                          }`}
                          onClick={() => selectPackage(pkg.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-xl font-bold text-gray-800">{pkg.name}</h4>
                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                  pkg.tier === 'basic' ? 'bg-gray-100 text-gray-600' :
                                  pkg.tier === 'premium' ? 'bg-blue-100 text-blue-600' :
                                  'bg-purple-100 text-purple-600'
                                }`}>
                                  {pkg.tier.charAt(0).toUpperCase() + pkg.tier.slice(1)}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-4">{pkg.description}</p>
                              <div className="space-y-3">
                                <p className="text-sm font-medium text-gray-800">Includes:</p>
                                <ul className="space-y-2">
                                  {pkg.includedFeatures.slice(0, 3).map((featureId) => {
                                    const feature = features.find(f => f.id === featureId)!;
                                    return (
                                      <li key={featureId} className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm">{feature.name}</span>
                                      </li>
                                    );
                                  })}
                                  {pkg.includedFeatures.length > 3 && (
                                    <li className="text-sm text-blue-600 font-medium hover:text-blue-700">
                                      +{pkg.includedFeatures.length - 3} more features
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                            <div className="text-right">
                              {pkg.basePrice === 0 ? (
                                <div className="flex flex-col items-end">
                                  <span className="text-2xl font-bold text-green-600">FREE!</span>
                                  <span className="text-sm text-gray-500">Limited time</span>
                                </div>
                              ) : (
                                <div className="flex flex-col items-end">
                                  <span className="text-2xl font-bold text-gray-800">
                                    ${pkg.basePrice.toLocaleString()}
                                  </span>
                                  <span className="text-sm text-gray-500">Starting from</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Website Type Selection */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Website Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {websiteTypes.map((type) => (
                        <motion.div
                          key={type.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                            selectedType === type.id
                              ? 'border-blue-500 bg-gradient-to-b from-blue-50 to-white'
                              : 'border-gray-100 hover:border-blue-200 hover:shadow-lg'
                          }`}
                          onClick={() => setSelectedType(type.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-xl font-bold text-gray-800 mb-2">{type.name}</h4>
                              <p className="text-gray-600">{type.description}</p>
                            </div>
                            <div className="text-right">
                              {type.basePrice === 0 && !type.isCustomPricing ? (
                                <div className="flex flex-col items-end">
                                  <span className="text-2xl font-bold text-green-600">FREE!</span>
                                  <span className="text-sm text-gray-500">Limited time</span>
                                </div>
                              ) : type.isCustomPricing ? (
                                <div className="flex flex-col items-end">
                                  <span className="text-xl font-bold text-blue-600">Custom</span>
                                  <span className="text-sm text-gray-500">Contact us</span>
                                </div>
                              ) : (
                                <div className="flex flex-col items-end">
                                  <span className="text-2xl font-bold text-gray-800">
                                    ${type.basePrice.toLocaleString()}
                                  </span>
                                  <span className="text-sm text-gray-500">Starting from</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Pages Slider */}
                  <div className="mb-12 bg-gray-50 p-6 rounded-2xl">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Number of Pages
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-800">{pageCount}</span>
                        {pageCount <= 5 && (
                          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                            Free!
                          </span>
                        )}
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={pageCount}
                      onChange={(e) => setPageCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>1 page</span>
                      <span>20 pages</span>
                    </div>
                    {pageCount > 5 && (
                      <p className="text-sm text-gray-600 mt-4 bg-blue-50 p-3 rounded-lg">
                        <span className="font-medium">Pro tip:</span> First 5 pages are free! Additional pages are ${100} each.
                      </p>
                    )}
                  </div>

                  {/* Features Selection */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Features</h3>
                    {(['design', 'functionality', 'marketing'] as const).map((category) => (
                      <div key={category} className="mb-8 last:mb-0">
                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            category === 'design' ? 'bg-purple-500' :
                            category === 'functionality' ? 'bg-blue-500' :
                            'bg-green-500'
                          }`} />
                          {category.charAt(0).toUpperCase() + category.slice(1)} Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {features
                            .filter((f) => f.category === category)
                            .map((feature) => (
                              <motion.div
                                key={feature.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                                  selectedFeatures.has(feature.id)
                                    ? 'border-blue-500 bg-gradient-to-b from-blue-50 to-white'
                                    : 'border-gray-100 hover:border-blue-200 hover:shadow-lg'
                                }`}
                                onClick={() => toggleFeature(feature.id)}
                              >
                                <div className="flex items-start">
                                  <div className="flex-grow">
                                    <h3 className="font-bold text-gray-800 mb-1">{feature.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                      {feature.description}
                                    </p>
                                    <p className="text-sm font-medium text-blue-600">
                                      +${feature.price.toLocaleString()}
                                    </p>
                                  </div>
                                  <div
                                    className={`w-6 h-6 rounded-full border-2 ml-2 flex items-center justify-center transition-colors ${
                                      selectedFeatures.has(feature.id)
                                        ? 'border-blue-500 bg-blue-500'
                                        : 'border-gray-300'
                                    }`}
                                  >
                                    {selectedFeatures.has(feature.id) && (
                                      <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total Price Display */}
                  <motion.div
                    layout
                    className="text-center p-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-8"
                  >
                    <p className="text-lg text-blue-100 mb-3">Estimated Price</p>
                    <motion.div
                      key={calculateTotal()}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="mb-4"
                    >
                      {hasCustomPricing() ? (
                        <div className="space-y-2">
                          <span className="text-4xl font-bold text-white">Custom Pricing</span>
                          <p className="text-blue-100">Contact us for a detailed quote</p>
                        </div>
                      ) : (
                        <>
                          <span className="text-5xl font-bold text-white">
                            ${calculateTotal().toLocaleString()}
                          </span>
                          {selectedType === 'landing' && calculateTotal() === 0 && (
                            <div className="mt-3 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                              <span className="text-lg text-white font-medium">
                                🎉 Launch Special - FREE!
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </motion.div>
                    <div className="text-sm space-y-2 text-blue-100">
                      <p>*Final price may vary based on specific requirements</p>
                      {hasCustomPricing() && (
                        <button
                          onClick={onClose}
                          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors mt-4"
                        >
                          Get Custom Quote
                        </button>
                      )}
                    </div>
                  </motion.div>

                  {/* Call to Action Button */}
                  <div className="text-center">
                    <button
                      onClick={() => {
                        onClose();
                        window.location.href = '/contact';
                      }}
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#37c594] to-blue-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span className="mr-2">Get Started Today</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#37c594] to-blue-500 opacity-30 blur-lg group-hover:opacity-40 transition-all duration-300" />
                    </button>
                    <p className="mt-4 text-sm text-gray-600">
                      No commitment required • Free consultation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
} 