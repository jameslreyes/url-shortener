export interface SupabaseService {
  shortenUrl: (longUrl: string) => Promise<string>;
  getLongUrl: (shortCode: string) => Promise<string | null>;
  trackClick: (shortCode: string) => Promise<void>;
}