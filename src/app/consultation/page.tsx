'use client';

import { useState } from 'react';
import { FormData } from './types';
import ConsultationForm from './components/ConsultationForm';
import BusinessInfoStep from './components/steps/BusinessInfoStep';
import ProjectDetailsStep from './components/steps/ProjectDetailsStep';
import WebsiteTypeStep from './components/steps/WebsiteTypeStep';
import BudgetTimelineStep from './components/steps/BudgetTimelineStep';
import ContactInfoStep from './components/steps/ContactInfoStep';
import ScheduleCallStep from './components/steps/ScheduleCallStep';

export default function ConsultationPage() {
  const [formData, setFormData] = useState<FormData>({
    // Business Info
    businessName: '',
    industry: '',
    businessSize: '',
    currentWebsite: '',
    
    // Website Type
    websiteType: '',
    otherDetails: '',
    
    // Project Details
    projectGoals: [],
    targetAudience: '',
    keyFeatures: [],
    competitors: '',
    
    // Budget & Timeline
    budget: '',
    timeline: '',
    
    // Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyRole: '',
    
    // Schedule Call
    preferredDate: '',
    preferredTime: '',
    alternateDate: '',
    alternateTime: '',
    timezone: 'ET',
    additionalNotes: ''
  });

  return (
    <main className="py-24 sm:py-32">
      <ConsultationForm />
    </main>
  );
} 