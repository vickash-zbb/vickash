import path from "path";
import "dotenv/config";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import { z } from "zod";
import nodemailer from "nodemailer";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(1, "Message is required")
});
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  console.log("Email config check:", {
    userExists: !!emailUser,
    passExists: !!emailPass,
    passLength: emailPass?.length || 0
  });
  const emailConfig = {
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass
      // Use App Password for Gmail (no spaces)
    }
  };
  return nodemailer.createTransport(emailConfig);
};
const sendContactEmail = async (data, clientInfo) => {
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
    IP Address: ${clientInfo.ip || "Unknown"}
    User Agent: ${clientInfo.userAgent || "Unknown"}
    Timestamp: ${(/* @__PURE__ */ new Date()).toLocaleString()}
    Reference ID: MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}
  `;
  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: "vickashshivan.designer@gmail.com",
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
          <p style="margin: 2px 0;"><strong>IP Address:</strong> ${clientInfo.ip || "Unknown"}</p>
          <p style="margin: 2px 0;"><strong>User Agent:</strong> ${clientInfo.userAgent || "Unknown"}</p>
          <p style="margin: 2px 0;"><strong>Timestamp:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
          <p style="margin: 2px 0;"><strong>Reference ID:</strong> MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}</p>
        </div>

        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; font-size: 12px; color: #64748b;">
          <p>This email was sent from your portfolio contact form.</p>
        </div>
      </div>
    `,
    replyTo: data.email
    // Allow replying directly to the sender
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};
const handleContactSubmission = async (req, res) => {
  try {
    const validatedData = contactFormSchema.parse(req.body);
    const clientInfo = {
      ip: req.ip,
      userAgent: req.get("User-Agent")
    };
    console.log("Contact form submission received:", {
      ...validatedData,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      ...clientInfo
    });
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("Email credentials not configured. Email will not be sent.");
      const response2 = {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
        data: {
          submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
          referenceId: `MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: validatedData.name
        }
      };
      return res.status(200).json(response2);
    }
    console.log("Attempting to send email with credentials:", {
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_PASS?.length
    });
    await sendContactEmail(validatedData, clientInfo);
    const response = {
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours.",
      data: {
        submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
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
        errors: error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message
        }))
      });
    }
    if (error.code === "EAUTH") {
      console.error("❌ Gmail authentication failed. Check App Password.");
    } else if (error.code === "ENOTFOUND") {
      console.error("❌ Network connection issue.");
    } else {
      console.error("❌ Email error details:", {
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
function createServer() {
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use(express__default.urlencoded({ extended: true }));
  app2.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app2.get("/api/demo", handleDemo);
  app2.post("/api/contact", handleContactSubmission);
  return app2;
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
