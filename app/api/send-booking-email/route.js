import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { service, date, time, name, email, phone, message } = await request.json();

    // Validate required fields
    if (!service || !date || !time || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || 'Sheen Digital Agency'}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL || 'sheen.af.co@gmail.com',
      subject: `New Service Booking: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: white;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #30ac8a 0%, #1a7d66 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .content {
              padding: 30px;
            }
            .booking-details {
              background: #f0f9f7;
              padding: 20px;
              border-radius: 10px;
              margin: 20px 0;
            }
            .field {
              margin-bottom: 15px;
              padding: 15px;
              background: white;
              border-radius: 5px;
              border-left: 4px solid #30ac8a;
            }
            .label {
              font-weight: bold;
              color: #30ac8a;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              font-size: 16px;
            }
            .footer {
              background: #f9f9f9;
              padding: 20px;
              text-align: center;
              color: #666;
              font-size: 14px;
            }
            .urgent {
              background: #fff3cd;
              border: 2px solid #ffd700;
              padding: 15px;
              border-radius: 5px;
              margin-bottom: 20px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Service Booking</h1>
            </div>
            <div class="content">
              <div class="urgent">
                <strong>⏰ Action Required:</strong> A new service has been booked!
              </div>
              
              <div class="booking-details">
                <h2 style="color: #30ac8a; margin-top: 0;">Booking Details</h2>
                
                <div class="field">
                  <div class="label">Service:</div>
                  <div class="value">${service}</div>
                </div>
                
                <div class="field">
                  <div class="label">Date & Time:</div>
                  <div class="value"><strong>${date}</strong> at <strong>${time}</strong></div>
                </div>
                
                <div class="field">
                  <div class="label">Client Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                
                ${message ? `
                <div class="field">
                  <div class="label">Additional Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                ` : ''}
              </div>

              <p style="margin-top: 20px; padding: 15px; background: #e8f5f1; border-radius: 5px;">
                <strong>Next Steps:</strong><br>
                • Contact the client to confirm the booking<br>
                • Add this appointment to your calendar<br>
                • Prepare any necessary materials for the service
              </p>
            </div>
            <div class="footer">
              <p>This booking was made through the Sheen Digital Agency website</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || 'Sheen Digital Agency'}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: `Booking Confirmation - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: white;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #30ac8a 0%, #1a7d66 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .content {
              padding: 30px;
            }
            .booking-summary {
              background: #f0f9f7;
              padding: 25px;
              border-radius: 10px;
              margin: 20px 0;
              border: 2px solid #30ac8a;
            }
            .summary-item {
              display: flex;
              justify-content: space-between;
              padding: 10px 0;
              border-bottom: 1px solid #d0e9e1;
            }
            .summary-item:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              color: #666;
            }
            .value {
              color: #30ac8a;
              font-weight: 600;
            }
            .footer {
              background: #f9f9f9;
              padding: 20px;
              text-align: center;
              color: #666;
              font-size: 14px;
            }
            .cta-button {
              display: inline-block;
              padding: 12px 30px;
              background: linear-gradient(135deg, #30ac8a 0%, #1a7d66 100%);
              color: white;
              text-decoration: none;
              border-radius: 25px;
              margin-top: 20px;
            }
            .checkmark {
              width: 60px;
              height: 60px;
              margin: 0 auto 20px;
              background: #30ac8a;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 30px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="checkmark">✓</div>
              <h1>Booking Confirmed!</h1>
            </div>
            <div class="content">
              <p>Dear <strong>${name}</strong>,</p>
              <p>Thank you for booking a service with <strong>Sheen Digital Agency</strong>! We're excited to work with you.</p>
              
              <div class="booking-summary">
                <h3 style="margin-top: 0; color: #30ac8a;">Your Booking Summary</h3>
                
                <div class="summary-item">
                  <span class="label">Service:</span>
                  <span class="value">${service}</span>
                </div>
                
                <div class="summary-item">
                  <span class="label">Date:</span>
                  <span class="value">${date}</span>
                </div>
                
                <div class="summary-item">
                  <span class="label">Time:</span>
                  <span class="value">${time}</span>
                </div>
                
                <div class="summary-item">
                  <span class="label">Contact:</span>
                  <span class="value">${phone}</span>
                </div>
              </div>

              <p style="background: #fff3cd; padding: 15px; border-radius: 5px; border-left: 4px solid #ffd700;">
                <strong>⏰ What's Next?</strong><br>
                Our team will contact you shortly to confirm the details and prepare for your service. 
                Please make sure to be available at the scheduled time.
              </p>

              <p>If you need to make any changes or have questions, feel free to reach out:</p>
              <ul>
                <li>📞 Phone: +93 784 966 018</li>
                <li>📧 Email: info@sheen.af</li>
                <li>💬 WhatsApp: +93 784 966 018</li>
              </ul>

              <center>
                <a href="https://agency.sheen.af" class="cta-button">Visit Our Website</a>
              </center>
            </div>
            <div class="footer">
              <p>Best regards,<br><strong>Sheen Digital Agency Team</strong></p>
              <p style="font-size: 12px; color: #999;">This is an automated confirmation. Please save this email for your records.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Booking emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending booking email:', error);
    return NextResponse.json(
      { error: 'Failed to send booking email', details: error.message },
      { status: 500 }
    );
  }
}
