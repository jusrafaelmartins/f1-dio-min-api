import type { FastifyInstance } from "fastify";
import teams from "../data/teams";
import type { TeamParams } from "../types/types";

export default async function teamsRoutes(server: FastifyInstance) {
    server.get("/teams", async (_request, response) => {
        response.type("application/json").code(200);

        return teams;
    });

    server.get<{ Params: TeamParams }>('/teams/:id', async (request, response) => {
        const teamId = parseInt(request.params.id, 10);
        const team = teams.find((team) => team.id === teamId);

        if (!team) {
            response.type("application/json").code(404);
            return { message: "Equipe não encontrada..." }
        }

        response.type("application/json").code(200);
        return team;

    });
}