import express from 'express';
import cors from 'cors';
import { routes } from './mail.controller.js';
import { errorHandler } from './errorHandler.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: [
      'https://multiple-services-765e6.web.app',
      'https://multiple-services-765e6.firebaseapp.com',
      'http://localhost:3000',
      'http://38.44.237.152',
    ],
    methods: ['POST', 'OPTIONS'],
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
});
