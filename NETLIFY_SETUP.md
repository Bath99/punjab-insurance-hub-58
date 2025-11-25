# Netlify Setup Instructions for Punjab Insurance

## Form Notifications Setup

Your quote request forms are now configured to work with Netlify Forms. Follow these steps to receive form submissions at your email:

### 1. Deploy to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Connect your Git repository
5. Netlify will auto-detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### 2. Configure Form Notifications

After your site is deployed:

1. Go to your site's dashboard on Netlify
2. Navigate to **Site settings** > **Forms** > **Form notifications**
3. Click **Add notification** > **Email notification**
4. Set up email notifications:
   - **Event to listen for**: New form submission
   - **Email to notify**: `palwinderbath@yahoo.ca`
   - You can customize the email subject and body if desired
5. Click **Save**

### 3. Verify Forms Are Working

1. After deployment, visit your site's "Forms" section in Netlify dashboard
2. You should see 6 forms listed:
   - supervisa-quote
   - life-insurance-quote
   - resp-quote
   - critical-illness-quote
   - disability-insurance-quote
   - travel-insurance-quote
3. Test a form submission on your live site
4. Check your email at `palwinderbath@yahoo.ca` for the notification

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Follow the instructions to configure your domain's DNS settings

### Additional Features

- **Spam Protection**: Netlify Forms includes built-in spam filtering
- **Form Submissions**: View all form submissions in the Netlify dashboard under **Forms**
- **Export Data**: You can export form submissions as CSV from the Netlify dashboard
- **Webhooks**: You can also set up webhooks to integrate with other services

### Troubleshooting

If forms aren't working:

1. Make sure your site is deployed and live
2. Check that the forms appear in the Netlify dashboard under **Forms**
3. Verify email notifications are set up correctly
4. Check your spam folder for notification emails
5. Try submitting a test form and check the Netlify dashboard for the submission

## Build Settings

The project includes:
- `public/_redirects` file for proper SPA routing
- `public/netlify-forms.html` for form detection (hidden from users)

These files ensure your React app works correctly on Netlify and that forms are properly detected.
