import express from 'express'
import { env } from './config/env';
import { urlController, healthController } from './controllers/_index';

const app = express();
app.use(express.json());

// Health
app.get('/health', healthController.checkHealth);

// URLs
app.post('/shorten', urlController.shorten);
app.get('/:shortCode', urlController.redirect);

app.listen(env.port, () => {
  console.log(`Server is listening on port ${env.port}`)
});