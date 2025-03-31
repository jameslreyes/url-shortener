import dotenv from "dotenv"
import { Env } from "../types/Env";
dotenv.config();

export const requiredEnvVars = [
  'NODE_ENV',
  'PORT',
  'SUPABASE_URL',
  'SUPABASE_ANON_KEY'
]

export const env: Env = {
  nodeEnv: process.env.NODE_ENV || '',
  port: process.env.PORT || '',
  supabase: {
    url: process.env.SUPABASE_URL || '',
    anonKey: process.env.SUPABASE_ANON_KEY || ''
  }
}