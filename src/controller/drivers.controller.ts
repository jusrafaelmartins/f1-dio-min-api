import type { FastifyInstance } from "fastify";
import drivers from "../data/drivers";
import type { DriverParams } from "../types/types";

export default async function driversRoutes(server: FastifyInstance) {
  server.get("/drivers", async (_request, response) => {
    response.type("application/json").code(200);
    return drivers;
  });

  server.get<{ Params: DriverParams }>(
    "/drivers/:id",
    async (request, response) => {
      const id = parseInt(request.params.id, 10);
      //Não fiz service pq, enfim... Não é necessário nesse
      const driver = drivers.find((d) => d.id === id);

      if (!driver) {
        response.type("application/json").code(404);
        return { message: "Piloto não encontrado..." };
      }

      response.type("application/json").code(200);
      return driver;
    }
  );
}