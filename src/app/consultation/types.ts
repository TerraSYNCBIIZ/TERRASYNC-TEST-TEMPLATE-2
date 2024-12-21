export interface ProjectDetailsData {
  projectGoals: string[];
  targetAudience: string;
  keyFeatures: string[];
  competitors: string;
}

export interface FormData {
  businessInfo: BusinessInfoData;
  projectDetails: ProjectDetailsData;
  contactInfo: ContactInfoData;
  scheduleCall: ScheduleCallData;
} 