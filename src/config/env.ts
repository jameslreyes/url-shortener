import dotenv from "dotenv"
import { Config } from "../types/Env";
dotenv.config();

export const requiredEnvVars: string[] = [
  'NODE_ENV',
  'PORT',
  'SUPABASE_URL',
  'SUPABASE_ANON_KEY'
]

export const config: Config = {
  app: {
    environment: process.env.NODE_ENV || '',
    port: process.env.PORT || '3000',
  },
  supabase: {
    url: process.env.SUPABASE_URL || '',
    anonKey: process.env.SUPABASE_ANON_KEY || ''
  }
}