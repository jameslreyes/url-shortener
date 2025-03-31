type Supabase = {
  url: string;
  anonKey: string;
}

export interface Env {
  nodeEnv: string;
  port: string;
  supabase: Supabase;
}