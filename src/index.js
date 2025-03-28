import express from 'express';

const PORT = process.env.PORT ? process.env.PORT : 3000;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
