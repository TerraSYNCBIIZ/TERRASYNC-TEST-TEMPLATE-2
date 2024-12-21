import { NextResponse } from 'next/server';
import type { FormData } from '@/app/consultation/types';

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    // Create email content
    const emailContent = {
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Consultation Request',
      html: `
        <h2>New Consultation Request</h2>
        <h3>Contact Information</h3>
        <p>Name: ${formData.firstName} ${formData.lastName}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone: ${formData.phone}</p>
        <p>Preferred Contact: ${formData.preferredContactMethod}</p>

        <h3>Business Information</h3>
        <p>Business Name: ${formData.businessName}</p>
        <p>Industry: ${formData.industry}</p>
        <p>Business Size: ${formData.businessSize}</p>
        <p>Current Website: ${formData.currentWebsite || 'N/A'}</p>

        <h3>Project Details</h3>
        <p>Website Type: ${formData.websiteType}</p>
        <p>Features: ${formData.features.join(', ')}</p>
        <p>Budget: ${formData.budget}</p>
        <p>Timeline: ${formData.timeline}</p>

        <h3>Schedule Details</h3>
        <p>Preferred Date: ${formData.preferredDate || 'Not specified'}</p>
        <p>Preferred Time: ${formData.preferredTime || 'Not specified'}</p>
        <p>Timezone: ${formData.timezone || 'Not specified'}</p>
        <p>Additional Notes: ${formData.additionalNotes || 'None'}</p>
      `
    };

    // Calendar event details (if needed)
    const calendarEvent = {
      summary: 'Website Consultation Call',
      description: `Consultation call with ${formData.businessName}`,
      attendees: [
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          scheduledDate: formData.preferredDate || 'TBD',
          scheduledTime: formData.preferredTime || 'TBD',
          timezone: formData.timezone || 'UTC'
        }
      ]
    };

    // TODO: Add actual email sending and calendar integration
    console.log('Email Content:', emailContent);
    console.log('Calendar Event:', calendarEvent);

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Consultation submission error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to process consultation request' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 