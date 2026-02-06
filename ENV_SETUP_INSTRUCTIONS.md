# Environment Variables Setup Guide

## For Local Development

1. **Create a `.env.local` file** in the project root (already created for you)

2. **Add your Google Form credentials:**
   ```
   GOOGLE_FORM_ID=your_form_id_here
   GOOGLE_FORM_ENTRY_NAME=entry.123456
   GOOGLE_FORM_ENTRY_EMAIL=entry.234567
   GOOGLE_FORM_ENTRY_PROFESSION=entry.345678
   GOOGLE_FORM_ENTRY_COLLEGE=entry.456789
   ```

3. **Replace the placeholder values:**
   - `GOOGLE_FORM_ID`: Your form's ID from the Google Form URL
   - `entry.123456` etc: The entry IDs from your form fields

4. **The `.env.local` file is already in `.gitignore`** so it won't be committed to GitHub

## For Production (Vercel Deployment)

### Method 1: Using Vercel Dashboard

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project name
3. Go to **Settings** → **Environment Variables**
4. Add each variable individually:
   - Click **Add New**
   - **Name**: `GOOGLE_FORM_ID`
   - **Value**: Your form ID
   - **Environments**: Select all (Production, Preview, Development)
   - Click **Save**
5. Repeat for all four variables:
   - `GOOGLE_FORM_ID`
   - `GOOGLE_FORM_ENTRY_NAME`
   - `GOOGLE_FORM_ENTRY_EMAIL`
   - `GOOGLE_FORM_ENTRY_PROFESSION`
   - `GOOGLE_FORM_ENTRY_COLLEGE`

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI globally if not already installed
npm i -g vercel

# Link your project to Vercel (if not already linked)
vercel link

# Add environment variables
vercel env add GOOGLE_FORM_ID
vercel env add GOOGLE_FORM_ENTRY_NAME
vercel env add GOOGLE_FORM_ENTRY_EMAIL
vercel env add GOOGLE_FORM_ENTRY_PROFESSION
vercel env add GOOGLE_FORM_ENTRY_COLLEGE

# Deploy
vercel deploy --prod
```

## How to Get Your Google Form Credentials

Follow the instructions in `GOOGLE_FORMS_SETUP.md` to:
1. Create a Google Form with required fields
2. Extract your form ID from the URL
3. Find entry IDs for each field using browser DevTools

## Testing

1. **Locally**: Fill out the waitlist form and check if responses appear in your Google Form
2. **Production**: After deploying to Vercel, test the form again with the new environment variables

## Troubleshooting

- **Form not receiving submissions**: Check that environment variable names are spelled correctly (case-sensitive)
- **404 on form submission**: Verify your GOOGLE_FORM_ID is correct
- **Wrong fields getting values**: Double-check your entry IDs match the correct form fields
- **Still not working**: Clear browser cache and try again with a new response
