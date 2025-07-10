import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rjxekyjcnpqgobihkkon.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqeGVreWpjbnBxZ29iaWhra29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NzQwMjUsImV4cCI6MjA2NzU1MDAyNX0.gKRidNBcTNAQVLoY4Sg-GRE7L9Fn3BHAyvNb4N9Biv4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
