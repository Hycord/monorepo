import { FastifyInstance } from "fastify";
import neural from "./neural/index.js";

export default async (
  server: FastifyInstance,
  options: any,
  done: () => void
) => {
  await server.register(neural);

  server.get("/", async (req, res) => {
    res.send({
      message:
        "Welcome to my API! I will have documentation available soon under https://masen.dev/api/docs",
    });
  });

  server.all("*", async (req, res) => {
    res.code(404).send({
      message: `Unknown Endpoint ${req.method} ${req.url}`,
    });
  });

  done();
};
