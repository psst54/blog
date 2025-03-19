export interface Env {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
  GA_TRACKING_ID: string;
  ENVIRONMENT: string;
}

export interface SupabaseKey {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}

interface SupabaseCredential {
  url: string;
  key: string;
}

export interface OutletContextType {
  supabaseCredential?: SupabaseCredential;
}
