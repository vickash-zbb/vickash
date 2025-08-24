import { RequestHandler } from "express";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    // Validate request body
    const validatedData = contactFormSchema.parse(req.body);
    
    // Here you would typically:
    // 1. Send email notification to yourself
    // 2. Store in database
    // 3. Send confirmation email to user
    // 4. Integrate with CRM systems
    
    // For now, we'll simulate processing
    console.log("Contact form submission received:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    // Simulate async processing (like sending email)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // You could integrate with email services like:
    // - SendGrid
    // - Mailgun  
    // - Nodemailer with SMTP
    // - AWS SES
    
    // Example response data
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
    
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later."
    });
  }
};
