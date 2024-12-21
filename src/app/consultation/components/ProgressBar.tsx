'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export default function ProgressBar({ currentStep, totalSteps, steps }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      {/* Progress bar */}
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <motion.div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Step indicators */}
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex flex-col items-center relative"
              style={{ width: `${100 / steps.length}%` }}
            >
              {/* Step dot */}
              <div
                className={`w-3 h-3 rounded-full mb-2 ${
                  index <= currentStep ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
              
              {/* Step label */}
              <span
                className={`text-xs sm:text-sm font-medium text-center px-1 ${
                  index <= currentStep ? 'text-primary' : 'text-gray-500'
                }`}
                style={{
                  maxWidth: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 