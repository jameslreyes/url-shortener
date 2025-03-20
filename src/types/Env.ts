type Supabase = {
  url: string;
  anonKey: string;
}

export interface Env {
  port: string;
  supabase: Supabase;
}