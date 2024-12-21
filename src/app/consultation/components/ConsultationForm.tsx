'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BusinessInfoStep from './steps/BusinessInfoStep';
import ProjectDetailsStep from './steps/ProjectDetailsStep';
import WebsiteTypeStep from './steps/WebsiteTypeStep';
import BudgetTimelineStep from './steps/BudgetTimelineStep';
import ContactInfoStep from './steps/ContactInfoStep';
import ScheduleCallStep from './steps/ScheduleCallStep';
import ProgressBar from './ProgressBar';

export type FormData = {
  // Business Information
  businessName: string;
  industry: string;
  businessSize: string;
  currentWebsite: string;
  
  // Project Details
  projectGoals: string[];
  targetAudience: string;
  keyFeatures: string[];
  competitors: string;
  
  // Website Type
  websiteType: string;
  ecommerceFeatures?: string[];
  serviceFeatures?: string[];
  contentFeatures?: string[];
  
  // Budget & Timeline
  budget: string;
  timeline: string;
  priority: string[];
  
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  
  // Additional Information
  additionalNotes: string;
  attachments: File[];
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
  projectGoals: [],
  targetAudience: '',
  keyFeatures: [],
  competitors: '',
  // ... other form fields with their initial values
};

export default function ConsultationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation form');
      }

      // Handle success (e.g., show success message, redirect, etc.)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message)
    } finally {
      setIsSubmitting(false);
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

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressBar 
        steps={steps} 
        currentStep={currentStep}
        totalSteps={steps.length}
      />
      
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-10">
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