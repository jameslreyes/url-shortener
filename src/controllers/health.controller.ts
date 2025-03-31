import { Request, Response } from "express";

export const healthController = {
  checkHealth: async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version
    });
  }
}