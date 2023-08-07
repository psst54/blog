import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

const SUPABASE_URL = process.env.SUPABASE_URL ? process.env.SUPABASE_URL : "";
const SUPABASE_KEY = process.env.SUPABASE_KEY ? process.env.SUPABASE_KEY : "";
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
