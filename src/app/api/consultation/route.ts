import { NextResponse } from 'next/server';
import type { FormData } from '@/app/consultation/types';

export async function POST(request: Request) {
  try {
    // Log the raw request body for debugging
    const rawBody = await request.text();
    console.log('Raw request body:', rawBody);

    // Parse the JSON manually to handle parsing errors
    let formData: FormData;
    try {
      formData = JSON.parse(rawBody);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON format in request body' },
        { status: 400 }
      );
    }

    // Log the parsed data
    console.log('Parsed form data:', formData);

    // Validate all required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'preferredDate',
      'preferredTime',
      'timezone'
    ] as const;

    const missingFields = requiredFields.filter(
      field => !formData[field as keyof FormData]
    );
    
    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          missingFields 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation emails
    // 3. Set up calendar invites
    // For now, we'll just log and return success

    console.log('Processing consultation request for:', formData.email);

    // Send success response
    return NextResponse.json({
      message: 'Consultation request received successfully',
      data: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        scheduledDate: formData.preferredDate,
        scheduledTime: formData.preferredTime,
        timezone: formData.timezone
      }
    });

  } catch (error) {
    // Log the full error
    console.error('Error processing consultation request:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { 
        error: 'Failed to process consultation request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 