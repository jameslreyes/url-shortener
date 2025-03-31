import express from 'express'
import { urlController, healthController } from './controllers/_index';

const app = express();
app.use(express.json());

// Health
app.get('/health', healthController.checkHealth);

// URLs
app.post('/shorten', urlController.shorten);
app.get('/:shortCode', urlController.redirect);

export default app;