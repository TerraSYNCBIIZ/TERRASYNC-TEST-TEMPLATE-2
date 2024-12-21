'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ScheduleCallStepProps {
  onSubmit: (data: ScheduleCallData) => void;
  onBack: () => void;
  initialData?: ScheduleCallData;
}

export interface ScheduleCallData {
  selectedDate: string;
  selectedTime: string;
  additionalNotes: string;
}

// Simulated available time slots (in reality, these would come from your calendar API)
const AVAILABLE_TIMES = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM'
];

export default function ScheduleCallStep({ onSubmit, onBack, initialData }: ScheduleCallStepProps) {
  const [formData, setFormData] = useState<ScheduleCallData>(initialData || {
    selectedDate: '',
    selectedTime: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<Partial<ScheduleCallData>>({});

  // Get the next 14 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })
        });
      }
    }
    
    return dates;
  };

  const validateForm = () => {
    const newErrors: Partial<ScheduleCallData> = {};
    
    if (!formData.selectedDate) {
      newErrors.selectedDate = 'Please select a date';
    }
    if (!formData.selectedTime) {
      newErrors.selectedTime = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Here you would integrate with your calendar API
        // For example:
        // await scheduleCall({
        //   date: formData.selectedDate,
        //   time: formData.selectedTime,
        //   notes: formData.additionalNotes
        // });
        
        onSubmit(formData);
      } catch (error) {
        console.error('Failed to schedule call:', error);
        // Handle error appropriately
      }
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
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select a Date
          <select
            value={formData.selectedDate}
            onChange={(e) => setFormData(prev => ({ ...prev, selectedDate: e.target.value }))}
            className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${
              errors.selectedDate ? 'border-red-300' : ''
            }`}
          >
            <option value="">Choose a date</option>
            {getAvailableDates().map(date => (
              <option key={date.value} value={date.value}>
                {date.label}
              </option>
            ))}
          </select>
          {errors.selectedDate && (
            <p className="mt-1 text-sm text-red-600">{errors.selectedDate}</p>
          )}
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select a Time
          <div className="mt-2 grid grid-cols-3 gap-3">
            {AVAILABLE_TIMES.map(time => (
              <button
                key={time}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, selectedTime: time }))}
                className={`relative px-4 py-2 text-sm font-medium rounded-md ${
                  formData.selectedTime === time
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
              >
                {time}
              </button>
            ))}
          </div>
          {errors.selectedTime && (
            <p className="mt-1 text-sm text-red-600">{errors.selectedTime}</p>
          )}
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Additional Notes (Optional)
          <textarea
            value={formData.additionalNotes}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Any specific topics you'd like to discuss?"
          />
        </label>
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
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Schedule Consultation
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </motion.form>
  );
} 