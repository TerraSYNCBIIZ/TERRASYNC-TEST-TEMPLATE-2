'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.preferredContact) {
      newErrors.preferredContact = 'Please select a preferred contact method';
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

  const handleInputChange = (field: keyof ContactInfoData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
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
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </label>
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </label>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </label>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </label>
        </div>

        {/* Company (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company (Optional)
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Role (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role (Optional)
            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Contact Method
            <select
              value={formData.preferredContact}
              onChange={(e) => handleInputChange('preferredContact', e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.preferredContact ? 'border-red-500' : 'border-gray-300'
              } focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50`}
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

        {/* Timezone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Timezone
            <select
              value={formData.timezone}
              onChange={(e) => handleInputChange('timezone', e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.timezone ? 'border-red-500' : 'border-gray-300'
              } focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50`}
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

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex items-center px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          Next Step
        </button>
      </div>
    </motion.form>
  );
} 