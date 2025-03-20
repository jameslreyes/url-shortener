import { Request, Response } from "express";
import { supabase } from "../services/supabase.service";
import { UrlController } from "../types/_index";

export const urlController: UrlController = {
  shorten: async (req: Request, res: Response): Promise<void> => {
    const { longUrl } = req.body;
    const response = await supabase.shortenUrl(longUrl);
    console.log(`shorten.controller.ts --> shorten() --> Shortened URL [${longUrl}] to [${response}]`)
    res.status(200).json(response);
  },

  redirect: async (req: Request, res: Response): Promise<void> => {
    const { shortCode } = req.params;
    const longUrl = await supabase.getLongUrl(shortCode);

    if (!longUrl) {
      console.error(`shorten.controller.ts --> redirect() --> Short URL not found for short code [${shortCode}]`)
      res.status(404).json({ error: "Short URL not found" })
      return;
    }

    await supabase.trackClick(shortCode);
    console.log(`shorten.controller.ts --> redirect() --> Redirecting to [${longUrl}]`)
    res.redirect(longUrl);
  }
}