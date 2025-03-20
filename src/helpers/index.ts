import crypto from 'crypto';
import { Helpers } from '../types/_index';

export const helpers: Helpers = {
  generateShortCode: (): string => {
    return crypto.randomBytes(3).toString('hex');
  }
}