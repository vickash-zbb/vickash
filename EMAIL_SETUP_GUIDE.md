# 📧 Contact Form Email Setup Guide

## Current Status

✅ **Contact form is already configured** to send emails to: `vickashshivan.designer@gmail.com`  
❌ **Email credentials need to be set up** for the form to actually send emails

## Quick Setup Steps

### 1. Create Environment File

Create a new file called `.env` in your project root with this content:

```bash
# Email Configuration for Contact Form
EMAIL_USER=vickashshivan.designer@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

### 2. Get Gmail App Password

**⚠️ Important: You MUST use an App Password, not your regular Gmail password!**

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/
   - Click "Security" in the left sidebar

2. **Enable 2-Step Verification** (if not already enabled)
   - Under "How you sign in to Google"
   - Click "2-Step Verification"
   - Follow the setup process

3. **Generate App Password**
   - Still in Security settings
   - Click "App passwords" (you'll only see this if 2-Step is enabled)
   - Select "Mail" as the app
   - Select "Other" as the device
   - Enter "Portfolio Contact Form" as the device name
   - Click "Generate"

4. **Copy the Password**
   - Google will show a 16-character password like: `abcd efgh ijkl mnop`
   - Copy this password (remove any spaces)
   - Paste it in your `.env` file as the `EMAIL_PASS` value

### 3. Example .env File

```bash
EMAIL_USER=vickashshivan.designer@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

### 4. Restart Development Server

After creating the `.env` file:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
pnpm dev
```

## How It Works

When someone fills out the contact form on your website:

1. **Form data is validated** (name, email, subject, message)
2. **Email is sent to your Gmail** (`vickashshivan.designer@gmail.com`)
3. **Email includes:**
   - Sender's contact details
   - Their message
   - Timestamp and reference ID
   - Reply-to is set to sender's email (so you can reply directly)

## Email Template Preview

You'll receive emails that look like this:

**Subject:** `🚀 New Contact: [Their Subject]`

**Content:**

```
📧 Contact Details:
Name: John Doe
Email: john@example.com
Subject: Website Design Inquiry

💬 Message:
Hi, I'm interested in your design services...

🌐 Client Information:
IP Address: 192.168.1.1
Timestamp: 12/25/2024, 3:30:00 PM
Reference ID: MSG-1703511000-abc123def
```

## Security Notes

- ✅ The `.env` file is already in `.gitignore` (won't be committed to git)
- ✅ App passwords are more secure than your main Gmail password
- ✅ The form includes spam protection with validation
- ✅ All emails include sender tracking information

## Troubleshooting

**If emails aren't sending:**

1. Check that `.env` file exists and has correct credentials
2. Verify 2-Step Verification is enabled on Gmail
3. Make sure App Password is 16 characters with no spaces
4. Check the browser console and server logs for error messages

**Common errors:**

- `EAUTH`: Wrong email/password - regenerate App Password
- `ENOTFOUND`: Network issue - check internet connection
- `Missing credentials`: `.env` file not found or empty

## Test the Form

Once set up:

1. Go to your contact page: http://localhost:8082/contact
2. Fill out the form with test data
3. Submit the form
4. Check your Gmail inbox for the test email
5. You should be able to reply directly to the sender's email
