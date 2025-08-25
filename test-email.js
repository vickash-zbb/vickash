// Quick email test script
const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***SET***' : 'NOT SET');

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS.includes('REPLACE_WITH')) {
    console.log('❌ Email credentials not properly configured');
    console.log('Please set up your Gmail App Password in the .env file');
    return;
  }

  try {
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('✅ Email configuration is working!');

    // Send test email
    const testEmail = {
      from: `"Portfolio Test" <${process.env.EMAIL_USER}>`,
      to: 'vickashshivan.designer@gmail.com',
      subject: '🧪 Test Email - Portfolio Contact Form',
      text: 'This is a test email to verify your contact form setup is working!',
      html: `
        <h2>🎉 Success!</h2>
        <p>Your portfolio contact form email setup is working correctly.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    const info = await transporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Check your email: vickashshivan.designer@gmail.com');
    
  } catch (error) {
    console.log('❌ Email test failed:');
    console.log(error.message);
    
    if (error.message.includes('Invalid login')) {
      console.log('\n💡 Troubleshooting:');
      console.log('1. Make sure 2-Factor Authentication is enabled on your Gmail');
      console.log('2. Use an App Password, not your regular Gmail password');
      console.log('3. Double-check your App Password is correct (16 characters)');
    }
  }
}

testEmail();
