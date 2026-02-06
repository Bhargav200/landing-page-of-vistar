# Google Forms Integration Setup

This guide explains how to connect the Vistar waitlist form to a Google Form for data collection.

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form titled "Vistar Waitlist"
3. Add the following fields:
   - **Question 1**: "What is your name?" (Short answer)
   - **Question 2**: "What is your email?" (Short answer)
   - **Question 3**: "What is your profession?" (Short answer)
   - **Question 4**: "What college/university do you attend?" (Short answer)

## Step 2: Get Your Form ID

1. Open your Google Form
2. Click the **"Send"** button (top right)
3. Click the link icon
4. Copy the form ID from the URL: `https://docs.google.com/forms/d/**FORM_ID**/edit`

## Step 3: Get Field Entry IDs

1. Open your form in edit mode
2. Inspect the form with browser DevTools (F12)
3. Find the hidden input fields for each question
4. Look for patterns like `entry.123456789`
5. Alternative method: Use browser console to inspect form elements

**How to find entry IDs using console:**
```javascript
// Open browser console (F12) on the form page and run:
document.querySelectorAll('input[name^="entry"]').forEach(el => {
  console.log(el.name, el.getAttribute('aria-label'));
});
```

## Step 4: Configure Environment Variables

Add these to your Vercel environment variables:

```
GOOGLE_FORM_ID=your_form_id_here
GOOGLE_FORM_ENTRY_NAME=entry.123456
GOOGLE_FORM_ENTRY_EMAIL=entry.234567
GOOGLE_FORM_ENTRY_PROFESSION=entry.345678
GOOGLE_FORM_ENTRY_COLLEGE=entry.456789
```

Replace the entry numbers with your actual entry IDs from Step 3.

## Step 5: Test the Integration

1. Deploy your site to Vercel
2. Click "Join Waitlist" on the landing page
3. Fill out the form with test data
4. Submit and verify the response appears in your Google Form responses

## Troubleshooting

- **Responses not appearing**: Double-check your entry IDs are correct
- **CORS errors**: Google Forms endpoints handle CORS correctly for this use case
- **No error messages**: Google Forms returns success even if fields don't match, so test with the form directly

## Security Notes

- Google Form IDs are public; they're meant to be shared
- Entry IDs are also public but not easily guessable
- No sensitive API keys are needed for this integration
- Data is submitted directly to Google Forms servers
