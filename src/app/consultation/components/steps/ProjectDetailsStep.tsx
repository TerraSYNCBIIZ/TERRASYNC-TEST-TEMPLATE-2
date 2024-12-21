'use client';

import { useState, useEffect } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import VoiceInput from '../../components/VoiceInput';
import type { FormData } from '../ConsultationForm';

interface ProjectDetailsStepProps {
  formData: FormData;
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

type ProjectDetailsData = Pick<FormData, 'projectGoals' | 'targetAudience' | 'keyFeatures' | 'competitors'>;

const defaultFormData: ProjectDetailsData = {
  projectGoals: [],
  targetAudience: '',
  keyFeatures: [],
  competitors: ''
};

export default function ProjectDetailsStep({
  formData = defaultFormData,
  onNext,
  onBack,
  updateFormData,
}: ProjectDetailsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isImproving, setIsImproving] = useState<Record<string, boolean>>({});
  const [localFormData, setLocalFormData] = useState<ProjectDetailsData>({
    projectGoals: formData?.projectGoals || [],
    targetAudience: formData?.targetAudience || '',
    keyFeatures: formData?.keyFeatures || [],
    competitors: formData?.competitors || ''
  });

  useEffect(() => {
    if (formData) {
      setLocalFormData({
        projectGoals: formData.projectGoals || [],
        targetAudience: formData.targetAudience || '',
        keyFeatures: formData.keyFeatures || [],
        competitors: formData.competitors || ''
      });
    }
  }, [formData]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!localFormData.projectGoals?.length) {
      newErrors.projectGoals = 'Please describe your project goals';
    }
    if (!localFormData.targetAudience?.trim()) {
      newErrors.targetAudience = 'Please describe your target audience';
    }
    if (!localFormData.keyFeatures?.length) {
      newErrors.keyFeatures = 'Please list your desired key features';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      try {
        updateFormData({
          projectGoals: localFormData.projectGoals,
          targetAudience: localFormData.targetAudience,
          keyFeatures: localFormData.keyFeatures,
          competitors: localFormData.competitors
        });
        onNext();
      } catch (error) {
        console.error('Error updating form data:', error);
      }
    }
  };

  const handleImproveText = async (field: keyof ProjectDetailsData) => {
    setIsImproving({ ...isImproving, [field]: true });
    try {
      const response = await fetch('/api/improve-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: field === 'projectGoals' || field === 'keyFeatures' 
            ? localFormData[field].join('\n') 
            : localFormData[field],
          field,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to improve text');
      
      const data = await response.json();
      const improvedText = data.improvedText;

      const newData = { ...localFormData };
      if (field === 'projectGoals' || field === 'keyFeatures') {
        newData[field] = improvedText.split('\n').filter(Boolean);
      } else {
        newData[field] = improvedText;
      }
      setLocalFormData(newData);
      updateFormData({
        [field]: newData[field]
      });
    } catch (error) {
      console.error('Error improving text:', error);
    } finally {
      setIsImproving({ ...isImproving, [field]: false });
    }
  };

  const handleInputChange = (field: keyof ProjectDetailsData, value: string) => {
    try {
      const newData = { ...localFormData };
      if (field === 'projectGoals' || field === 'keyFeatures') {
        newData[field] = value.split('\n').filter(Boolean);
      } else {
        newData[field] = value;
      }
      setLocalFormData(newData);
      if (errors[field]) {
        setErrors({ ...errors, [field]: '' });
      }
    } catch (error) {
      console.error('Error updating form data:', error);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Goals
          </label>
          <div className="relative">
            <textarea
              value={localFormData.projectGoals.join('\n')}
              onChange={(e) => handleInputChange('projectGoals', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 ${
                errors.projectGoals ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={4}
              placeholder="Describe what you want to achieve with this project..."
            />
            <div className="absolute right-2 top-2 flex gap-2">
              <VoiceInput
                onResult={(text: string) => {
                  handleInputChange('projectGoals', text);
                }}
                className="bg-white"
              />
              <button
                type="button"
                onClick={() => handleImproveText('projectGoals')}
                className="p-2 rounded-full hover:bg-gray-100 transition-all group relative"
                disabled={isImproving.projectGoals || !localFormData.projectGoals.length}
              >
                <SparklesIcon className={`h-5 w-5 ${isImproving.projectGoals ? 'animate-pulse text-primary' : 'text-gray-500'}`} />
                <span className="sr-only">Improve with AI</span>
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Improve with AI
                </span>
              </button>
            </div>
            {errors.projectGoals && (
              <p className="mt-1 text-sm text-red-500">{errors.projectGoals}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Audience
          </label>
          <div className="relative">
            <textarea
              value={localFormData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 ${
                errors.targetAudience ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={4}
              placeholder="Describe your ideal users or customers..."
            />
            <div className="absolute right-2 top-2 flex gap-2">
              <VoiceInput
                onResult={(text: string) => {
                  handleInputChange('targetAudience', text);
                }}
                className="bg-white"
              />
              <button
                type="button"
                onClick={() => handleImproveText('targetAudience')}
                className="p-2 rounded-full hover:bg-gray-100 transition-all group relative"
                disabled={isImproving.targetAudience || !localFormData.targetAudience.trim()}
              >
                <SparklesIcon className={`h-5 w-5 ${isImproving.targetAudience ? 'animate-pulse text-primary' : 'text-gray-500'}`} />
                <span className="sr-only">Improve with AI</span>
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Improve with AI
                </span>
              </button>
            </div>
            {errors.targetAudience && (
              <p className="mt-1 text-sm text-red-500">{errors.targetAudience}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Key Features
          </label>
          <div className="relative">
            <textarea
              value={localFormData.keyFeatures.join('\n')}
              onChange={(e) => handleInputChange('keyFeatures', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 ${
                errors.keyFeatures ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={4}
              placeholder="List the main features or functionality you want..."
            />
            <div className="absolute right-2 top-2 flex gap-2">
              <VoiceInput
                onResult={(text: string) => {
                  handleInputChange('keyFeatures', text);
                }}
                className="bg-white"
              />
              <button
                type="button"
                onClick={() => handleImproveText('keyFeatures')}
                className="p-2 rounded-full hover:bg-gray-100 transition-all group relative"
                disabled={isImproving.keyFeatures || !localFormData.keyFeatures.length}
              >
                <SparklesIcon className={`h-5 w-5 ${isImproving.keyFeatures ? 'animate-pulse text-primary' : 'text-gray-500'}`} />
                <span className="sr-only">Improve with AI</span>
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Improve with AI
                </span>
              </button>
            </div>
            {errors.keyFeatures && (
              <p className="mt-1 text-sm text-red-500">{errors.keyFeatures}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Competitors or Reference Sites
          </label>
          <div className="relative">
            <textarea
              value={localFormData.competitors}
              onChange={(e) => handleInputChange('competitors', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20"
              rows={4}
              placeholder="Share any websites you like or competitors you want to reference..."
            />
            <div className="absolute right-2 top-2 flex gap-2">
              <VoiceInput
                onResult={(text: string) => {
                  handleInputChange('competitors', text);
                }}
                className="bg-white"
              />
              <button
                type="button"
                onClick={() => handleImproveText('competitors')}
                className="p-2 rounded-full hover:bg-gray-100 transition-all group relative"
                disabled={isImproving.competitors || !localFormData.competitors.trim()}
              >
                <SparklesIcon className={`h-5 w-5 ${isImproving.competitors ? 'animate-pulse text-primary' : 'text-gray-500'}`} />
                <span className="sr-only">Improve with AI</span>
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Improve with AI
                </span>
              </button>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Our AI will analyze their features.
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex items-center px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          Next Step
        </button>
      </div>
    </div>
  );
} 