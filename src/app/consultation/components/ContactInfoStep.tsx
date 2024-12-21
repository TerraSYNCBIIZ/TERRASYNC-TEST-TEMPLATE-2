'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import VoiceInput from './VoiceInput';

interface ContactInfoStepProps {
  onNext: (data: ContactInfoData) => void;
  onBack: () => void;
  initialData?: ContactInfoData;
}

export interface ContactInfoData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  preferredContact: string;
  timezone: string;
}

const PREFERRED_CONTACT_OPTIONS = [
  'Email',
  'Phone',
  'Either'
];

const TIMEZONE_OPTIONS = [
  'Eastern Time (ET)',
  'Central Time (CT)',
  'Mountain Time (MT)',
  'Pacific Time (PT)',
  'Alaska Time (AKT)',
  'Hawaii-Aleutian Time (HAT)'
];

export default function ContactInfoStep({ onNext, onBack, initialData }: ContactInfoStepProps) {
  const [formData, setFormData] = useState<ContactInfoData>(initialData || {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    preferredContact: '',
    timezone: ''
  });

  const [errors, setErrors] = useState<Partial<ContactInfoData>>({});

  const validateForm = () => {
    const newErrors: Partial<ContactInfoData> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.preferredContact) {
      newErrors.preferredContact = 'Please select your preferred contact method';
    }
    if (!formData.timezone) {
      newErrors.timezone = 'Please select your timezone';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  const handleVoiceInput = (field: keyof ContactInfoData) => (text: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: text
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                  errors.firstName
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:ring-primary focus:border-primary'
                }`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <VoiceInput
                  onResult={handleVoiceInput('firstName')}
                  className="mr-2"
                />
              </div>
            </div>
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                  errors.lastName
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:ring-primary focus:border-primary'
                }`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <VoiceInput
                  onResult={handleVoiceInput('lastName')}
                  className="mr-2"
                />
              </div>
            </div>
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                  errors.email
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:ring-primary focus:border-primary'
                }`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <VoiceInput
                  onResult={handleVoiceInput('email')}
                  className="mr-2"
                />
              </div>
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                  errors.phone
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:ring-primary focus:border-primary'
                }`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <VoiceInput
                  onResult={handleVoiceInput('phone')}
                  className="mr-2"
                />
              </div>
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company (Optional)
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="block w-full pr-10 focus:outline-none sm:text-sm rounded-md border-gray-300 focus:ring-primary focus:border-primary"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <VoiceInput
                  onResult={handleVoiceInput('company')}
                  className="mr-2"
                />
              </div>
            </div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role (Optional)
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="block w-full pr-10 focus:outline-none sm:text-sm rounded-md border-gray-300 focus:ring-primary focus:border-primary"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <VoiceInput
                  onResult={handleVoiceInput('role')}
                  className="mr-2"
                />
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Contact Method
            <select
              value={formData.preferredContact}
              onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
              className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${
                errors.preferredContact ? 'border-red-300' : ''
              }`}
            >
              <option value="">Select contact method</option>
              {PREFERRED_CONTACT_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.preferredContact && (
              <p className="mt-1 text-sm text-red-600">{errors.preferredContact}</p>
            )}
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Timezone
            <select
              value={formData.timezone}
              onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
              className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${
                errors.timezone ? 'border-red-300' : ''
              }`}
            >
              <option value="">Select timezone</option>
              {TIMEZONE_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.timezone && (
              <p className="mt-1 text-sm text-red-600">{errors.timezone}</p>
            )}
          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <svg
            className="mr-2 -ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Next Step
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </motion.form>
  );
} 