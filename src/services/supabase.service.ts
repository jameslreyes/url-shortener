import { createClient } from '@supabase/supabase-js';
import { env } from '../config/env';
import { generateShortCode } from '../helpers';
import { SupabaseService } from '../types/Supabase';

const supabaseClient = createClient(env.supabase.url, env.supabase.anonKey);

export const supabase: SupabaseService = {
  shortenUrl: async (longUrl: string): Promise<string> => {
    const shortCode = generateShortCode();
    const { error } = await supabaseClient
      .from('urls')
      .insert([{ short_code: shortCode, long_url: longUrl }]);

    if (error) console.error(error);
    return `http://localhost:3000/${shortCode}`;
  },

  getLongUrl: async (shortCode: string): Promise<string | null> => {
    const { data, error } = await supabaseClient
      .from('urls')
      .select('long_url')
      .eq('short_code', shortCode)
      .maybeSingle();

    if (error) return null;
    return data?.long_url;
  },

  trackClick: async (shortCode: string): Promise<void> => {
    const { error } = await supabaseClient.rpc('increment_click_count', { short_code_input: shortCode });

    if (error) console.error(`Error tracking click:\n${JSON.stringify(error, null, 2)}`);
  }
}