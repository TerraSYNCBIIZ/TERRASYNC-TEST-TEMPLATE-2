export interface BusinessInfoData {
  businessName: string;
  industry: string;
  businessSize: string;
  currentWebsite: string;
}

export interface ProjectDetailsData {
  projectGoals: string[];
  targetAudience: string;
  keyFeatures: string[];
  competitors: string;
}

export interface WebsiteTypeData {
  websiteType: string;
  otherDetails?: string;
}

export interface BudgetTimelineData {
  budget: string;
  timeline: string;
}

export interface ContactInfoData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyRole: string;
}

export interface ScheduleCallData {
  preferredDate: string;
  preferredTime: string;
  alternateDate: string;
  alternateTime: string;
  timezone: string;
  additionalNotes?: string;
}

export interface FormData {
  // Business Info
  businessName: string;
  industry: string;
  businessSize: string;
  currentWebsite: string;

  // Project Details
  projectType: string;
  features: string[];
  projectDescription?: string;

  // Website Type
  websiteType: string;
  websiteTypeDetails?: string;

  // Budget & Timeline
  budget: string;
  timeline: string;

  // Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;

  // Schedule Call
  preferredDate?: string;
  preferredTime?: string;
  timezone?: string;
  additionalNotes?: string;

  // Success tracking
  meetingId?: string;
  schedulingComplete?: boolean;
} 