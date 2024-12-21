'use client';

import { motion } from 'framer-motion';
import { FormData } from '../ConsultationForm';

interface ProjectDetailsStepProps {
  formData: FormData;
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const projectGoalOptions = [
  'Increase Online Sales',
  'Improve User Experience',
  'Enhance Brand Image',
  'Expand Market Reach',
  'Streamline Operations',
  'Mobile App Development',
  'Custom Software Solution',
  'Website Redesign'
];

const featureOptions = [
  'User Authentication',
  'Payment Processing',
  'Content Management',
  'Analytics Dashboard',
  'API Integration',
  'Search Functionality',
  'Real-time Updates',
  'Mobile Responsiveness'
];

export default function ProjectDetailsStep({
  formData,
  onNext,
  onBack,
  updateFormData
}: ProjectDetailsStepProps) {
  const handleGoalToggle = (goal: string) => {
    const newGoals = formData.projectGoals.includes(goal)
      ? formData.projectGoals.filter(g => g !== goal)
      : [...formData.projectGoals, goal];
    updateFormData({ projectGoals: newGoals });
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = formData.keyFeatures.includes(feature)
      ? formData.keyFeatures.filter(f => f !== feature)
      : [...formData.keyFeatures, feature];
    updateFormData({ keyFeatures: newFeatures });
  };

  const handleNext = () => {
    if (formData.projectGoals.length === 0) {
      // Show error or alert
      return;
    }
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Project Details
        </h2>
        <p className="mt-2 text-gray-600">
          Help us understand your project goals and requirements.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What are your project goals? (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projectGoalOptions.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => handleGoalToggle(goal)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg border ${
                  formData.projectGoals.includes(goal)
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                <span className="text-sm">{goal}</span>
                {formData.projectGoals.includes(goal) && (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">
            Who is your target audience?
          </label>
          <textarea
            id="targetAudience"
            rows={3}
            value={formData.targetAudience}
            onChange={(e) => updateFormData({ targetAudience: e.target.value })}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            placeholder="Describe your ideal users or customers..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What key features do you need? (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featureOptions.map((feature) => (
              <button
                key={feature}
                type="button"
                onClick={() => handleFeatureToggle(feature)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg border ${
                  formData.keyFeatures.includes(feature)
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                <span className="text-sm">{feature}</span>
                {formData.keyFeatures.includes(feature) && (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="competitors" className="block text-sm font-medium text-gray-700">
            Who are your main competitors?
          </label>
          <textarea
            id="competitors"
            rows={3}
            value={formData.competitors}
            onChange={(e) => updateFormData({ competitors: e.target.value })}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            placeholder="List your main competitors and any specific features you'd like to highlight..."
          />
        </div>
      </div>

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
          Next Step
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
} 