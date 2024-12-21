'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from './components/ProgressBar';
import BusinessInfoStep from './components/BusinessInfoStep';
import ProjectDetailsStep from './components/steps/ProjectDetailsStep';
import ContactInfoStep from './components/ContactInfoStep';
import ScheduleCallStep from './components/ScheduleCallStep';
import { BusinessInfoData } from './components/BusinessInfoStep';
import { ProjectDetailsData } from './components/ProjectDetailsStep';
import { ContactInfoData } from './components/ContactInfoStep';
import { ScheduleCallData } from './components/ScheduleCallStep';

const STEPS = [
  'Business Info',
  'Project Details',
  'Contact Info',
  'Schedule Call'
];

export default function ConsultationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessInfo: {} as BusinessInfoData,
    projectDetails: {
      projectGoals: [],
      targetAudience: '',
      keyFeatures: [],
      competitors: ''
    } as ProjectDetailsData,
    contactInfo: {} as ContactInfoData,
    scheduleCall: {} as ScheduleCallData
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBusinessInfoNext = (data: BusinessInfoData) => {
    setFormData(prev => ({
      ...prev,
      businessInfo: data
    }));
    setCurrentStep(1);
  };

  const handleProjectDetailsNext = (data: ProjectDetailsData) => {
    setFormData(prev => ({
      ...prev,
      projectDetails: data
    }));
    setCurrentStep(2);
  };

  const handleContactInfoNext = (data: ContactInfoData) => {
    setFormData(prev => ({
      ...prev,
      contactInfo: data
    }));
    setCurrentStep(3);
  };

  const handleProjectDetailsBack = () => {
    setCurrentStep(0);
  };

  const handleContactInfoBack = () => {
    setCurrentStep(1);
  };

  const handleScheduleCallBack = () => {
    setCurrentStep(2);
  };

  const handleSubmit = async (data: ScheduleCallData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const finalFormData = {
        ...formData,
        scheduleCall: data
      };

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalFormData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to schedule consultation');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to submit consultation form:', error);
      setError(error instanceof Error ? error.message : 'Failed to schedule consultation');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg
                className="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Consultation Scheduled!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for scheduling a consultation with us. We've sent a confirmation email with all the details.
              We look forward to speaking with you!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Return Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>

      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free Consultation
            </h1>
            <p className="text-lg text-gray-600">
              Let's discuss your project and find the perfect solution for your business.
            </p>
          </div>

          {/* Progress bar */}
          <ProgressBar
            currentStep={currentStep}
            totalSteps={STEPS.length}
            steps={STEPS}
          />

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
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

          {/* Form steps */}
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <BusinessInfoStep
                key="business-info"
                onNext={handleBusinessInfoNext}
                initialData={formData.businessInfo}
              />
            )}
            {currentStep === 1 && (
              <ProjectDetailsStep
                key="project-details"
                formData={formData.projectDetails}
                onNext={handleProjectDetailsNext}
                onBack={handleProjectDetailsBack}
                updateFormData={(data) => {
                  setFormData(prev => ({
                    ...prev,
                    projectDetails: {
                      ...prev.projectDetails,
                      ...data
                    }
                  }));
                }}
              />
            )}
            {currentStep === 2 && (
              <ContactInfoStep
                key="contact-info"
                onNext={handleContactInfoNext}
                onBack={handleContactInfoBack}
                initialData={formData.contactInfo}
              />
            )}
            {currentStep === 3 && (
              <ScheduleCallStep
                key="schedule-call"
                onSubmit={handleSubmit}
                onBack={handleScheduleCallBack}
                initialData={formData.scheduleCall}
              />
            )}
          </AnimatePresence>

          {/* Loading overlay */}
          {isSubmitting && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
                <p className="mt-4 text-gray-900 font-medium">Scheduling your consultation...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 