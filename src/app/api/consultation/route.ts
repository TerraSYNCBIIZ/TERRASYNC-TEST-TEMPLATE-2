import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Log the consultation request for now
    console.log('Consultation request received:', data);

    // Here you would typically:
    // 1. Save the consultation data to your database
    // 2. Integrate with a calendar API
    // 3. Send confirmation emails (will implement later with Resend)
    
    return NextResponse.json({ 
      message: 'Consultation scheduled successfully',
      data: data 
    });
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json(
      { message: 'Failed to schedule consultation' },
      { status: 500 }
    );
  }
} 