import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Send welcome email to subscriber
export async function sendWelcomeEmail(email) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Welcome to Sheen - Coming Soon!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #1a4d2e 0%, #2d7a4f 100%);
              color: white;
              padding: 40px 20px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 36px;
              font-weight: bold;
            }
            .content {
              padding: 40px 30px;
              color: #333;
            }
            .content h2 {
              color: #1a4d2e;
              margin-top: 0;
            }
            .content p {
              line-height: 1.6;
              font-size: 16px;
            }
            .footer {
              background-color: #f8f8f8;
              padding: 20px;
              text-align: center;
              color: #666;
              font-size: 14px;
            }
            .button {
              display: inline-block;
              padding: 12px 30px;
              background: linear-gradient(135deg, #1a4d2e 0%, #2d7a4f 100%);
              color: white;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>SHEEN</h1>
            </div>
            <div class="content">
              <h2>Thank You for Subscribing!</h2>
              <p>We're thrilled to have you on board! You're now part of an exclusive community that will be the first to know when Sheen launches.</p>
              <p>We're working hard to bring you something amazing. Stay tuned for updates, sneak peeks, and exclusive offers.</p>
              <p>Get ready for something special!</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Sheen. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
}

// Send notification to admin
export async function sendAdminNotification(email) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Subscriber - Sheen Coming Soon',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 10px;
              padding: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #1a4d2e;
            }
            .info {
              background-color: #f8f8f8;
              padding: 15px;
              border-radius: 5px;
              margin: 20px 0;
            }
            .info p {
              margin: 5px 0;
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Subscriber Alert!</h2>
            <div class="info">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p>A new user has subscribed to the Sheen coming soon list.</p>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return { success: false, error: error.message };
  }
}
