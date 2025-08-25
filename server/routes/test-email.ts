import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleTestEmail: RequestHandler = async (req, res) => {
  try {
    console.log('🔧 Testing email configuration...');
    
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    console.log('EMAIL_USER:', emailUser ? '✅ Set' : '❌ Missing');
    console.log('EMAIL_PASS:', emailPass ? `✅ Set (${emailPass.length} chars)` : '❌ Missing');

    if (!emailUser || !emailPass) {
      return res.status(500).json({
        success: false,
        message: 'Email credentials not configured'
      });
    }

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    console.log('🔄 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');

    console.log('📧 Sending test email...');
    const testEmail = {
      from: `"Contact Form Test" <${emailUser}>`,
      to: 'vickashshivan.designer@gmail.com',
      subject: '🧪 Contact Form Test - Working!',
      text: 'This is a test email to verify the contact form is working correctly.',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2563eb;">🧪 Contact Form Test</h2>
          <p>This is a test email to verify your contact form is working correctly.</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <p style="color: #16a34a; font-weight: bold;">✅ Email configuration is working!</p>
        </div>
      `
    };

    const info = await transporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);

    res.json({
      success: true,
      message: 'Test email sent successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Email test failed:', error);
    
    let errorMessage = 'Email test failed';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Gmail authentication failed. Please check App Password.';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Network connection issue.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: error.message
    });
  }
};
