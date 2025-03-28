import express from 'express';
import cors from 'cors';
import { routes } from './mail.controller.js';
import { errorHandler } from './errorHandler.js';

const PORT = process.env.PORT ? process.env.PORT : 3000;
const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(routes);
app.use(
  cors({
    origin: [
      'https://multiple-services-765e6.web.app/',
      'https://multiple-services-765e6.firebaseapp.com/',
      'http://localhost:3000/',
    ],
  })
);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
