-- Adjust RLS policies for public form tables to allow anonymous inserts

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow public newsletter signups" ON public.newsletter_signups;

-- Grant insert permissions to anon and authenticated roles
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT INSERT ON public.newsletter_signups TO anon, authenticated;
GRANT SELECT ON public.contact_submissions TO authenticated;
GRANT SELECT ON public.newsletter_signups TO authenticated;

-- Recreate policies for anon role
CREATE POLICY "Allow anon contact submissions"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anon newsletter signups"
  ON public.newsletter_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);
