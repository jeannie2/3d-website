import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL =  process.env.SUPABASE_URL;
const ANON_KEY = process.env.ANON_KEY;

const client = createClient(SUPABASE_URL, ANON_KEY)

export { client as supabaseClient }

// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseKey = process.env.ANON_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

// export default supabase;
