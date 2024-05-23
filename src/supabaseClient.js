import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qzmvqwdkqtvxrtauiqyb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6bXZxd2RrcXR2eHJ0YXVpcXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTkzMzYsImV4cCI6MjAzMjAzNTMzNn0.7FDjUxCkOt3KU7aebJ1xkN28SONhhOd_2Mb_gp0Db50';

export const supabase = createClient(supabaseUrl, supabaseKey);