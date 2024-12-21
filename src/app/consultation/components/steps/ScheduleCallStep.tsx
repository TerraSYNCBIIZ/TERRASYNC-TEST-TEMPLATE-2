'use client';

import { motion } from 'framer-motion';
import { FormData } from '../../types';
import { formStyles } from '../styles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ScheduleCallStepProps {
  formData: FormData;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

// This will be replaced with actual API integration
const mockScheduleCall = async (data: any) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, meetingId: 'mock-meeting-' + Math.random() };
};

export default function ScheduleCallStep({ formData, onBack, updateFormData }: ScheduleCallStepProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError('');

      // This is a placeholder for the calendar API integration
      const result = await mockScheduleCall({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        websiteType: formData.websiteType,
        budget: formData.budget
      });

      if (result.success) {
        // Store the meeting ID and mark as complete
        updateFormData({
          meetingId: result.meetingId,
          schedulingComplete: true
        });
        
        // Use router.replace instead of push to prevent back navigation
        router.replace('/consultation/success');
      }
    } catch (err) {
      setError('Failed to submit consultation request. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className={formStyles.header.wrapper}>
        <h2 className={formStyles.header.title}>
          Complete Your Consultation Request
        </h2>
        <p className={formStyles.header.description}>
          Submit your consultation request and we'll be in touch to schedule a call.
        </p>
      </div>

      {/* Placeholder for Calendar Integration */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Calendar Integration Coming Soon</h3>
          <p className="mt-1 text-sm text-gray-500">
            We're working on integrating with popular calendar services for easy scheduling.
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Submit your consultation request and we'll contact you to schedule a time.
          </p>
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
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
          disabled={loading}
          className={`${formStyles.button.base} ${formStyles.button.primary} ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Submit Consultation Request'}
        </button>
      </div>
    </motion.div>
  );
} 