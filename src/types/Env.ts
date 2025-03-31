type Supabase = {
  url: string;
  anonKey: string;
}

type App = {
  environment: string;
  port: string;
}

export interface Config {
  app: App;
  supabase: Supabase;
}