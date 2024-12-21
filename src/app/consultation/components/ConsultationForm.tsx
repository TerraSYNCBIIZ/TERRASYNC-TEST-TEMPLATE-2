'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import BusinessInfoStep from './steps/BusinessInfoStep';
import ProjectDetailsStep from './steps/ProjectDetailsStep';
import WebsiteTypeStep from './steps/WebsiteTypeStep';
import BudgetTimelineStep from './steps/BudgetTimelineStep';
import ContactInfoStep from './steps/ContactInfoStep';
import ScheduleCallStep from './steps/ScheduleCallStep';
import ProgressBar from './ProgressBar';
import { useLoading } from '@/app/components/providers/LoadingProvider';

export type FormData = {
  // Business Info
  businessName: string;
  industry: string;
  businessSize: string;
  currentWebsite: string;
  
  // Website Type
  websiteType: string;
  otherDetails?: string;
  
  // Project Details
  projectGoals: string[];
  targetAudience: string;
  keyFeatures: string[];
  competitors: string;
  
  // Budget & Timeline
  budget: string;
  timeline: string;
  
  // Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyRole: string;
  
  // Schedule Call
  preferredDate: string;
  preferredTime: string;
  alternateDate: string;
  alternateTime: string;
  timezone: string;
  additionalNotes?: string;
};

const steps = [
  'Business Information',
  'Project Details',
  'Website Type',
  'Budget & Timeline',
  'Contact Information',
  'Schedule Call'
];

const initialFormData: FormData = {
  // Business Info
  businessName: '',
  industry: '',
  businessSize: '',
  currentWebsite: '',
  
  // Website Type
  websiteType: '',
  otherDetails: '',
  
  // Project Details
  projectGoals: [],
  targetAudience: '',
  keyFeatures: [],
  competitors: '',
  
  // Budget & Timeline
  budget: '',
  timeline: '',
  
  // Contact Info
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyRole: '',
  
  // Schedule Call
  preferredDate: '',
  preferredTime: '',
  alternateDate: '',
  alternateTime: '',
  timezone: 'ET',
  additionalNotes: ''
};

export default function ConsultationForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { showLoading, hideLoading } = useLoading();

  const handleUpdateFormData = useCallback((newData: Partial<FormData>) => {
    console.log('Updating form data:', newData);
    setFormData(prevData => ({
      ...prevData,
      ...newData
    }));
  }, []);

  const handleNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const handleSubmit = async () => {
    setError(null);
    showLoading();
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Log the raw response for debugging
      const rawResponse = await response.text();
      console.log('Raw response:', rawResponse);

      // Try to parse the response as JSON
      let data;
      try {
        data = JSON.parse(rawResponse);
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit consultation form');
      }

      setIsSuccess(true);
      // Reset form
      setFormData(initialFormData);
      setCurrentStep(0);

    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit consultation form');
    } finally {
      hideLoading();
    }
  };

  const renderStep = () => {
    const commonProps = {
      formData,
      onNext: handleNext,
      onBack: handleBack,
      updateFormData: handleUpdateFormData,
    };

    switch (currentStep) {
      case 0:
        return (
          <BusinessInfoStep
            {...commonProps}
          />
        );
      case 1:
        return (
          <ProjectDetailsStep
            {...commonProps}
          />
        );
      case 2:
        return (
          <WebsiteTypeStep
            {...commonProps}
          />
        );
      case 3:
        return (
          <BudgetTimelineStep
            {...commonProps}
          />
        );
      case 4:
        return (
          <ContactInfoStep
            {...commonProps}
          />
        );
      case 5:
        return (
          <ScheduleCallStep
            formData={formData}
            onBack={handleBack}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Consultation Request Submitted!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for scheduling a consultation with us. We&apos;ll be in touch shortly to confirm your appointment.
          </p>
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressBar 
        steps={steps} 
        currentStep={currentStep}
        totalSteps={steps.length}
      />
      
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 