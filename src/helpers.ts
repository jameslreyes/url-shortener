import crypto from 'crypto';

export const generateShortCode = (): string => {
  return crypto.randomBytes(3).toString('hex');
}