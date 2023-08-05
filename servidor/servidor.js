import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

import "./db/dbConnect.js";

const app = express();
const porta = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`));

const servidorHttp2 = http.createServer(app);
servidorHttp2.listen(5000, () => console.log(`Servidor escutando na porta 5000`));

const io = new Server(servidorHttp, {
  cors: {
    origin: "http://localhost:5000"
  }
});

export default io;
