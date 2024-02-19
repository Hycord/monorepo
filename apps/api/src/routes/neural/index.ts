import { FastifyInstance } from "fastify";
import digits from "./digits.js";

export default async (
  server: FastifyInstance,
  options: any,
  done: () => void
) => {
  await server.register(digits);
  done();
};
