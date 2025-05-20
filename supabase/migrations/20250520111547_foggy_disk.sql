/*
  # Add skills table

  1. New Tables
    - `skills`
      - `id` (uuid, primary key)
      - `name` (text)
      - `percentage` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `skills` table
    - Add policies for public read access
    - Add policies for authenticated users to manage skills
*/

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  percentage integer NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Allow public to read skills
CREATE POLICY "Anyone can read skills"
  ON skills
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage skills
CREATE POLICY "Authenticated users can manage skills"
  ON skills
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add some initial skills
INSERT INTO skills (name, percentage) VALUES
  ('React', 90),
  ('TypeScript', 85),
  ('Node.js', 80),
  ('PostgreSQL', 75),
  ('Docker', 70),
  ('AWS', 65);