import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testEmail() {
  console.log('🔧 Testing email configuration...\n');
  
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  console.log('EMAIL_USER:', emailUser ? '✅ Set' : '❌ Missing');
  console.log('EMAIL_PASS:', emailPass ? `✅ Set (${emailPass.length} chars)` : '❌ Missing');
  console.log('');

  if (!emailUser || !emailPass) {
    console.error('❌ Email credentials not configured properly');
    return;
  }

  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  try {
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
    console.log('\n🎉 Email configuration is working correctly!');
    
  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error details:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Authentication failed. Please check:');
      console.error('   1. Gmail App Password is correct (16 characters, no spaces)');
      console.error('   2. 2-factor authentication is enabled');
      console.error('   3. App password was generated correctly');
    } else if (error.code === 'ENOTFOUND') {
      console.error('\n💡 Network connection issue. Check your internet connection.');
    } else {
      console.error('\n💡 Other issue. Check your Gmail account settings.');
    }
  }
}

testEmail().catch(console.error);
