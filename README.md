# Personal Portfolio

Check out the live site: https://sanyahegde-personalproject.vercel.app/

## Contact Form Setup

The contact form is fully functional and uses [Resend](https://resend.com) to send emails.

### Setup Instructions:

1. **Create a Resend account** (free tier available):
   - Go to https://resend.com and sign up
   - Navigate to API Keys and create a new key

2. **Add your API key**:
   - Create a `.env.local` file in the root directory
   - Add your Resend API key:
     ```
     RESEND_API_KEY=re_your_api_key_here
     ```

3. **Verify your domain** (optional but recommended):
   - For production, you'll want to verify your domain with Resend
   - For development, you can use `onboarding@resend.dev` (as configured)
   - Update the `from` field in `app/api/contact/route.ts` once you verify your domain

4. **Update recipient email**:
   - The form currently sends to `sanyahegde7@gmail.com`
   - You can change this in `app/api/contact/route.ts` if needed

### Features:
- ✅ Form validation (client and server-side)
- ✅ Error handling with user-friendly messages
- ✅ Success confirmation
- ✅ Email includes sender's email as reply-to
- ✅ Responsive design
