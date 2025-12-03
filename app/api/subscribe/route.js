import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';
import { sendWelcomeEmail, sendAdminNotification } from '@/lib/nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email: email.toLowerCase() });
    
    if (existingSubscriber) {
      return NextResponse.json(
        { success: false, message: 'This email is already subscribed!' },
        { status: 409 }
      );
    }

    // Get IP address and user agent
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Create new subscriber
    const subscriber = await Subscriber.create({
      email: email.toLowerCase(),
      ipAddress,
      userAgent
    });

    // Send welcome email to subscriber (don't wait for it)
    sendWelcomeEmail(email).catch(err => 
      console.error('Failed to send welcome email:', err)
    );

    // Send notification to admin (don't wait for it)
    sendAdminNotification(email).catch(err => 
      console.error('Failed to send admin notification:', err)
    );

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing! Check your email for confirmation.',
        data: {
          email: subscriber.email,
          subscribedAt: subscriber.subscribedAt
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve subscriber count
export async function GET() {
  try {
    await connectDB();
    const count = await Subscriber.countDocuments();
    
    return NextResponse.json(
      { 
        success: true, 
        count 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching subscriber count:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
