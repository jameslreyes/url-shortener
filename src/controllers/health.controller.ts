import { Request, Response } from "express";
import { HealthController } from "../types/Controllers";

export const healthController: HealthController = {
  checkHealth: async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version
    });
  }
}