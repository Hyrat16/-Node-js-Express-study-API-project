import express from "express";

import { errorHandler } from "./middlewares/errorHandler.js";

import { routes } from "./api/routes/index.js";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const app = express();
app.use(express.json()); //Definition of json for every existing application.
app.use(routes);
app.use(errorHandler); // Definition errorHandler as a basis for the code
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

/*  */
