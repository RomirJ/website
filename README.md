
# Hikaflow Website

A modern website for Hikaflow built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design with modern UI components
- Contact form with Supabase integration
- Newsletter signup functionality
- FAQ section with collapsible items
- GitHub Pages deployment ready

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Deployment

This website is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment Steps

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to Pages section
4. Select "GitHub Actions" as the source
5. The site will be automatically built and deployed

## Supabase Integration

The website connects to Supabase to store:
- Contact form submissions
- Newsletter email signups

The database is configured with proper Row Level Security (RLS) policies to allow public form submissions while restricting data access to authenticated administrators.

## Environment

- Node.js 18+
- React 18
- TypeScript
- Tailwind CSS
- Supabase
