import cors from "@fastify/cors";
import fastify from "fastify";
import driversRoutes from "./controller/drivers.controller";
import teamsRoutes from "./controller/teams.controller";

const server = fastify({ logger: true });

server.register(cors, {
	origin: "*",
});

server.register(teamsRoutes);

server.register(driversRoutes);

const start = async () => {
  try {
    await server.listen({ port: 3333, host: "0.0.0.0" });
    console.log("✅ Servidor rodando em http://localhost:3333");
  } catch (err) {
    console.error("❌ Erro ao iniciar servidor:", err);
    process.exit(1);
  }
};

start();
