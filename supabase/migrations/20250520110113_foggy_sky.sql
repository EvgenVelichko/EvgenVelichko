/*
  # Create messages table for contact form submissions

  1. New Tables
    - `messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `device_info` (jsonb, device information)
      - `created_at` (timestamp with timezone, auto-generated)

  2. Security
    - Enable RLS on messages table
    - Add policy for inserting messages
    - Add policy for admin to read messages
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  device_info jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages
CREATE POLICY "Anyone can insert messages"
  ON messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users (admin) can read messages
CREATE POLICY "Only authenticated users can read messages"
  ON messages
  FOR SELECT
  TO authenticated
  USING (true);