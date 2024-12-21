'use client';

import { useState } from 'react';
import { FormData } from './types';
import ConsultationForm from './components/ConsultationForm';
import BackgroundPattern from './components/BackgroundPattern';

export default function ConsultationPage() {
  const [formData, setFormData] = useState<FormData>({
    // Business Info
    businessName: '',
    industry: '',
    businessSize: '',
    currentWebsite: '',
    
    // Website Type
    websiteType: '',
    websiteTypeDetails: '',
    
    // Project Details
    projectType: '',
    features: [],
    projectDescription: '',
    
    // Budget & Timeline
    budget: '',
    timeline: '',
    
    // Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContactMethod: '',
    companyRole: '',
    
    // Schedule Call
    preferredDate: '',
    preferredTime: '',
    timezone: '',
    additionalNotes: ''
  });

  return (
    <main className="relative min-h-screen py-24 sm:py-32 overflow-hidden">
      <BackgroundPattern />
      
      <div className="relative z-10">
        <ConsultationForm />
      </div>
    </main>
  );
} 