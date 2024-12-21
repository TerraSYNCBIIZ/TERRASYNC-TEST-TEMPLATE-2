export interface FormData {
  // Business Info
  businessName: string;
  industry: string;
  businessSize: string;
  currentWebsite: string;
  
  // Project Details
  projectType: string;
  features: string[];
  projectDescription: string;
  
  // Website Type
  websiteType: string;
  websiteTypeDetails: string;
  
  // Budget & Timeline
  budget: string;
  timeline: string;
  
  // Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  companyRole: string;
  
  // Schedule Call
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  additionalNotes: string;
  
  // Success tracking
  meetingId?: string;
  schedulingComplete?: boolean;
} 