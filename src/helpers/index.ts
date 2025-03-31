import crypto from 'crypto';

export const helpers = {
  generateShortCode: (): string => {
    return crypto.randomBytes(3).toString('hex');
  }
}