// src/app.ts
import express from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

// Rotas
import authRouter from "./routes/authRouter";
import leilaoRouter from "./routes/leilaoRouter";
import lancesRouter from "./routes/lancesRouter";
import router from "./routes/userRouter";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  path: "/socket.io",
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type"],
  },
});
const port = process.env.PORT ?? 3000;

// Middlewares
app.use(cors({
  origin: "*",
}));
app.use(helmet({
}));
app.use(morgan("dev"));
app.use(express.json());

// Socket.IO
app.set("io", io);
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.on("chat message", (msg) => {
    console.log("Mensagem recebida:", msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

// Rotas
//TODO: Ajustar rotas erro na condicionais das controller req não pode ser usada mais de uma vez
app.use("/auth",authRouter);
app.use("/leilao",leilaoRouter);
app.use("/lances",lancesRouter);
app.use("/router",router);

// Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API",
      version: "1.0.0",
      description: "Documentação da API",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Inicia o servidor
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
