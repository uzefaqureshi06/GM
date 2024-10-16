
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://hucaghhsuaogwaznmfxk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1Y2FnaGhzdWFvZ3dhem5tZnhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1NzY3MDIsImV4cCI6MjA0MzE1MjcwMn0.EIw_cj02M1DORPbwVlAlJCIpwQLcq_9vqvjgxC5D0NM';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;


