-- Add new columns for multi-event registration
ALTER TABLE public.registrations
ADD COLUMN IF NOT EXISTS event_type text,
ADD COLUMN IF NOT EXISTS shortfilm_title text,
ADD COLUMN IF NOT EXISTS team_name text,
ADD COLUMN IF NOT EXISTS team_members text,
ADD COLUMN IF NOT EXISTS genre text,
ADD COLUMN IF NOT EXISTS team_leader_name text,
ADD COLUMN IF NOT EXISTS contact_details text,
ADD COLUMN IF NOT EXISTS payment_screenshot_url text;

-- Drop old QR code related columns
ALTER TABLE public.registrations
DROP COLUMN IF EXISTS qr_code_data,
DROP COLUMN IF EXISTS qr_code_url,
DROP COLUMN IF EXISTS registration_id;

-- Make transaction_id unique to prevent duplicates
ALTER TABLE public.registrations
ADD CONSTRAINT unique_transaction_id UNIQUE (transaction_id);

-- Create storage bucket for payment screenshots
INSERT INTO storage.buckets (id, name, public)
VALUES ('payment-screenshots', 'payment-screenshots', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for payment screenshots
CREATE POLICY "Anyone can upload payment screenshots"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'payment-screenshots');

CREATE POLICY "Payment screenshots are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'payment-screenshots');