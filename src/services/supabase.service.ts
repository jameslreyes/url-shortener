import { createClient } from '@supabase/supabase-js';
import { config } from '../config/env';
import { helpers } from '../helpers';

const supabaseClient = createClient(config.supabase.url, config.supabase.anonKey);

export const supabase = {
  shortenUrl: async (longUrl: string): Promise<string> => {
    const shortCode = helpers.generateShortCode();
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