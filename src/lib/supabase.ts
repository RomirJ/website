
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://kinmyuasdizgccihapsg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpbm15dWFzZGl6Z2NjaWhhcHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODU2OTIsImV4cCI6MjA2NTc2MTY5Mn0.H0xsQ7V0UEMvsYp_rErKZN0SEKP6dhivCQF-bzTgjKY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ContactSubmission {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message: string;
  created_at?: string;
}

export interface NewsletterSignup {
  id?: string;
  email: string;
  created_at?: string;
}

// Database functions
export const saveContactSubmission = async (data: Omit<ContactSubmission, 'id' | 'created_at'>) => {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Error saving contact submission:', error);
    throw error;
  }

  return result;
};

export const saveNewsletterSignup = async (email: string) => {
  const { data: result, error } = await supabase
    .from('newsletter_signups')
    .insert([{ email }])
    .select()
    .single();

  if (error) {
    console.error('Error saving newsletter signup:', error);
    throw error;
  }

  return result;
};
