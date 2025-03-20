import express, { Request, Response } from 'express'
import { env } from './config/env';
import { urlController } from './controllers/shorten.controller';

const app = express();
app.use(express.json());

app.post('/shorten', urlController.shorten);
app.get('/:shortCode', urlController.redirect);

app.get('/', (req: Request, res: Response) => {
  console.log(`Received request`)
  res.status(200).json({
    success: true,
    message: "API is working!"
  })
});

app.listen(env.port, () => {
  console.log(`Server is listening on port ${env.port}`)
});