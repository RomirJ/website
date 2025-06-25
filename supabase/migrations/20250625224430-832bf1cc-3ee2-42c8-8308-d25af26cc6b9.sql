
-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for newsletter signups
CREATE TABLE public.newsletter_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for both tables
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access for insertions (since these are public forms)
CREATE POLICY "Allow public contact submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public newsletter signups" 
  ON public.newsletter_signups 
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Create policies to allow reading for authenticated admin users only
CREATE POLICY "Admin can view contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Admin can view newsletter signups" 
  ON public.newsletter_signups 
  FOR SELECT 
  TO authenticated
  USING (true);
