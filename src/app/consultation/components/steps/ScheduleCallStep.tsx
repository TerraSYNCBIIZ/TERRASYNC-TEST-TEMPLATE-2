'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export interface ScheduleCallData {
  preferredDate: string;
  preferredTime: string;
  alternateDate: string;
  alternateTime: string;
  timezone: string;
  additionalNotes?: string;
}

interface ScheduleCallStepProps {
  onSubmit: (data: ScheduleCallData) => void;
  onBack: () => void;
  initialData?: ScheduleCallData;
}

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM'
];

const timezones = [
  { value: 'ET', label: 'Eastern Time (ET)' },
  { value: 'CT', label: 'Central Time (CT)' },
  { value: 'MT', label: 'Mountain Time (MT)' },
  { value: 'PT', label: 'Pacific Time (PT)' }
];

export default function ScheduleCallStep({ onSubmit, onBack, initialData }: ScheduleCallStepProps) {
  const [formData, setFormData] = useState<ScheduleCallData>(initialData || {
    preferredDate: '',
    preferredTime: '',
    alternateDate: '',
    alternateTime: '',
    timezone: 'ET',
    additionalNotes: ''
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    if (!formData.preferredDate || !formData.preferredTime) {
      setError('Please select your preferred date and time');
      return;
    }

    if (!formData.alternateDate || !formData.alternateTime) {
      setError('Please select an alternate date and time');
      return;
    }

    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Schedule Your Consultation
        </h2>
        <p className="mt-2 text-gray-600">
          Choose your preferred and alternate time slots for our consultation call.
        </p>
      </div>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Preferred Time
          </h3>
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              min={minDate}
              value={formData.preferredDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              <option value="">Select a time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Alternate Time
          </h3>
          <div>
            <label htmlFor="alternateDate" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="alternateDate"
              name="alternateDate"
              min={minDate}
              value={formData.alternateDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="alternateTime" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <select
              id="alternateTime"
              name="alternateTime"
              value={formData.alternateTime}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              <option value="">Select a time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
          Your Timezone
        </label>
        <select
          id="timezone"
          name="timezone"
          value={formData.timezone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        >
          {timezones.map(tz => (
            <option key={tz.value} value={tz.value}>{tz.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
          Additional Notes (Optional)
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={4}
          value={formData.additionalNotes}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          placeholder="Any specific topics you'd like to discuss or questions you have..."
        />
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
          onClick={handleSubmit}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Schedule Consultation
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
} 