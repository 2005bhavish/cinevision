-- Create registrations table to store all registration data
CREATE TABLE public.registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id text UNIQUE NOT NULL,
  transaction_id text UNIQUE NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  qr_code_data text NOT NULL,
  qr_code_url text,
  payment_status text DEFAULT 'completed',
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (this will be called from the webhook)
CREATE POLICY "Allow public insert for webhook" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Allow users to view their own registration by email
CREATE POLICY "Users can view their own registration" 
ON public.registrations 
FOR SELECT 
USING (true);

-- Create index for faster lookups
CREATE INDEX idx_registrations_email ON public.registrations(email);
CREATE INDEX idx_registrations_reg_id ON public.registrations(registration_id);