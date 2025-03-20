import { Request, Response } from 'express';

export interface UrlController {
  shorten: (req: Request, res: Response) => void;
  redirect: (req: Request, res: Response) => void;
}

export interface HealthController {
  checkHealth: (req: Request, res: Response) => void;
}