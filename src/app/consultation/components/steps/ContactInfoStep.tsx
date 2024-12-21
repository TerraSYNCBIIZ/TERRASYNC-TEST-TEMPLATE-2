'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { FormData } from '../../types';

interface ContactInfoStepProps {
  formData: FormData;
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

export default function ContactInfoStep({
  formData,
  onNext,
  onBack,
  updateFormData
}: ContactInfoStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [localData, setLocalData] = useState({
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    email: formData.email || '',
    phone: formData.phone || '',
    companyRole: formData.companyRole || '',
    preferredContactMethod: formData.preferredContactMethod || '',
    timezone: formData.timezone || ''
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!localData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!localData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!localData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!localData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!localData.preferredContactMethod) {
      newErrors.preferredContactMethod = 'Please select a preferred contact method';
    }
    if (!localData.timezone) {
      newErrors.timezone = 'Please select your timezone';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      updateFormData(localData);
      onNext();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setLocalData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const timezones = [
    { value: 'ET', label: 'Eastern Time (ET)' },
    { value: 'CT', label: 'Central Time (CT)' },
    { value: 'MT', label: 'Mountain Time (MT)' },
    { value: 'PT', label: 'Pacific Time (PT)' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'both', label: 'Both Email and Phone' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Contact Information
        </h2>
        <p className="mt-2 text-gray-600">
          Please provide your contact details so we can get in touch with you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            value={localData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              errors.firstName ? 'border-red-300' : 'border-gray-300'
            } focus:border-primary focus:ring-primary sm:text-sm`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            value={localData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              errors.lastName ? 'border-red-300' : 'border-gray-300'
            } focus:border-primary focus:ring-primary sm:text-sm`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={localData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            } focus:border-primary focus:ring-primary sm:text-sm`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            value={localData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              errors.phone ? 'border-red-300' : 'border-gray-300'
            } focus:border-primary focus:ring-primary sm:text-sm`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role (Optional)
          </label>
          <input
            type="text"
            value={localData.companyRole}
            onChange={(e) => handleInputChange('companyRole', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Contact Method
          </label>
          <select
            value={localData.preferredContactMethod}
            onChange={(e) => handleInputChange('preferredContactMethod', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              errors.preferredContactMethod ? 'border-red-300' : 'border-gray-300'
            } focus:border-primary focus:ring-primary sm:text-sm`}
          >
            <option value="">Select contact method</option>
            {contactMethods.map(method => (
              <option key={method.value} value={method.value}>
                {method.label}
              </option>
            ))}
          </select>
          {errors.preferredContactMethod && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredContactMethod}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Timezone
          </label>
          <select
            value={localData.timezone}
            onChange={(e) => handleInputChange('timezone', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              errors.timezone ? 'border-red-300' : 'border-gray-300'
            } focus:border-primary focus:ring-primary sm:text-sm`}
          >
            <option value="">Select timezone</option>
            {timezones.map(tz => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
          {errors.timezone && (
            <p className="mt-1 text-sm text-red-600">{errors.timezone}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Next Step
        </button>
      </div>
    </motion.div>
  );
} 