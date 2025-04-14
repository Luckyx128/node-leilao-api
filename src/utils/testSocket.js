import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  path: "/socket.io",
});

socket.on("connect", () => {
  console.log("Conectado ao servidor com ID:", socket.id);
  socket.emit("chat message", "Mensagem de teste!");
});

socket.on("chat message", (msg) => {
  console.log("Mensagem recebida:", msg);
});

socket.on("disconnect", () => {
  console.log("Desconectado");
});
