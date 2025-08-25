import { RequestHandler } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

// Email configuration
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  console.log('Email config check:', {
    userExists: !!emailUser,
    passExists: !!emailPass,
    passLength: emailPass?.length || 0
  });

  const emailConfig = {
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass, // Use App Password for Gmail (no spaces)
    },
  };

  return nodemailer.createTransporter(emailConfig);
};

const sendContactEmail = async (data: z.infer<typeof contactFormSchema>, clientInfo: { ip?: string; userAgent?: string }) => {
  const transporter = createTransporter();

  const emailContent = `
    New Contact Form Submission

    📧 Contact Details:
    Name: ${data.name}
    Email: ${data.email}
    Subject: ${data.subject}

    💬 Message:
    ${data.message}

    🌐 Client Information:
    IP Address: ${clientInfo.ip || 'Unknown'}
    User Agent: ${clientInfo.userAgent || 'Unknown'}
    Timestamp: ${new Date().toLocaleString()}
    Reference ID: MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}
  `;

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: 'vickashshivan.designer@gmail.com',
    subject: `🚀 New Contact: ${data.subject}`,
    text: emailContent,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>

        <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; color: #334155;">📧 Contact Details</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a></p>
          <p style="margin: 5px 0;"><strong>Subject:</strong> ${data.subject}</p>
        </div>

        <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; color: #334155;">💬 Message</h3>
          <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>

        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; font-size: 12px; color: #64748b;">
          <h4 style="margin: 0 0 8px 0; color: #475569;">🌐 Client Information</h4>
          <p style="margin: 2px 0;"><strong>IP Address:</strong> ${clientInfo.ip || 'Unknown'}</p>
          <p style="margin: 2px 0;"><strong>User Agent:</strong> ${clientInfo.userAgent || 'Unknown'}</p>
          <p style="margin: 2px 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <p style="margin: 2px 0;"><strong>Reference ID:</strong> MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}</p>
        </div>

        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; font-size: 12px; color: #64748b;">
          <p>This email was sent from your portfolio contact form.</p>
        </div>
      </div>
    `,
    replyTo: data.email, // Allow replying directly to the sender
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    // Validate request body
    const validatedData = contactFormSchema.parse(req.body);

    // Collect client information
    const clientInfo = {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
    };

    // Log the submission
    console.log("Contact form submission received:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ...clientInfo
    });

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Email will not be sent.');
      // Still return success to not break the user experience
      const response = {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
        data: {
          submittedAt: new Date().toISOString(),
          referenceId: `MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: validatedData.name
        }
      };
      return res.status(200).json(response);
    }

    // Send email notification
    console.log('Attempting to send email with credentials:', {
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_PASS?.length
    });
    await sendContactEmail(validatedData, clientInfo);

    const response = {
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours.",
      data: {
        submittedAt: new Date().toISOString(),
        referenceId: `MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: validatedData.name
      }
    };

    res.status(200).json(response);

  } catch (error) {
    console.error("Contact form submission error:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    }

    // Detailed error logging for email issues
    if (error.code === 'EAUTH') {
      console.error('❌ Gmail authentication failed. Check App Password.');
    } else if (error.code === 'ENOTFOUND') {
      console.error('❌ Network connection issue.');
    } else {
      console.error('❌ Email error details:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again or contact directly via email."
    });
  }
};
