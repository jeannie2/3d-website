// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseKey = process.env.ANON_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

// export default supabase;

import { createClient } from "@supabase/supabase-js"
// import { createClient } from '@supabase/auth-helpers-sveltekit'

// const SUPABASE_URL = "https://qwlbxkqedmvzgtxmhpfw.supabase.co"
// const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3bGJ4a3FlZG12emd0eG1ocGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2MjM1MzAsImV4cCI6MjAwNjE5OTUzMH0.WGw_m98yr3Bvz1cA7Zl3C9a0BBCSVSSiot7bdW8kmco"

const SUPABASE_URL = process.env.SUPABASE_URL;
const ANON_KEY = process.env.ANON_KEY;

// const VITE_SUPABASE_URL = process.env.SUPABASE_URL;
// const VITE_ANON_KEY = process.env.ANON_KEY;

// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
// const ANON_KEY = import.meta.env.VITE_ANON_KEY;

// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
// const ANON_KEY = import.meta.env.VITE_ANON_KEY;

const client = createClient(SUPABASE_URL, ANON_KEY)

export { client as supabaseClient }
