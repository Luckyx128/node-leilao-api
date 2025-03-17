// src/app.ts
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/userRouter";
import authRouter from "./routes/authRouter";

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);
app.use(authRouter);
app.listen(port, () => {
  `Servidor rodando em http://localhost:${port}`;
});
