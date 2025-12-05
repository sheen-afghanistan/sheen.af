import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || 'Sheen Digital Agency'}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL || 'sheen.af.co@gmail.com',
      subject: `New Contact Form: ${subject}`,
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
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: #f9f9f9;
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
            }
            .footer {
              background: #f9f9f9;
              padding: 20px;
              text-align: center;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Sheen Digital Agency contact form</p>
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
      subject: 'Thank you for contacting Sheen Digital Agency',
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
            .highlight {
              background: #f0f9f7;
              padding: 20px;
              border-radius: 5px;
              border-left: 4px solid #30ac8a;
              margin: 20px 0;
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
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for contacting <strong>Sheen Digital Agency</strong>. We have received your message and our team will get back to you as soon as possible.</p>
              
              <div class="highlight">
                <strong>Your message summary:</strong><br>
                <strong>Subject:</strong> ${subject}<br>
                <strong>Message:</strong> ${message}
              </div>

              <p>We typically respond within 24 hours. In the meantime, feel free to explore our services or reach out to us via:</p>
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
              <p style="font-size: 12px; color: #999;">This is an automated response. Please do not reply to this email.</p>
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
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
