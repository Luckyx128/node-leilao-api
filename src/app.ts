// src/app.ts
import express from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./routes/authRouter";
import leilaoRouter from "./routes/leilaoRouter"
import router from "./routes/userRouter";
import lancesRouter from "./routes/lancesRouter";
dotenv.config();
const app = express();
const server = require("http").createServer(app);
const io = new Server(server, {
     path:'/socket.io',
    cors: {
        origin: '*', 
        methods: ['GET', 'POST'],
        credentials: true,
        allowedHeaders: ['Content-Type'],
    }

});
const port = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],

  }),
);
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    contentSecurityPolicy: false, // Desabilita temporariamente para debug
  }),
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(morgan("dev"));
app.use(express.json());

app.set("io", io);
// Configurar Socket.IO
io.on("connection", (socket: any) => {
  console.log("Cliente conectado");

  socket.on("chat message", (msg: any) => {
    console.log("Mensagem recebida: " + msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

app.use(authRouter);
app.use(leilaoRouter);
app.use(lancesRouter)
app.use(router);
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
