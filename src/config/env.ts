import dotenv from "dotenv"
import { Env } from "../types/Env";
dotenv.config();

export const env: Env = {
  port: process.env.PORT || '',
  supabase: {
    url: process.env.SUPABASE_URL || '',
    anonKey: process.env.SUPABASE_ANON_KEY || ''
  }
}