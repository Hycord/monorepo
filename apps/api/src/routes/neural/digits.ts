import { FastifyInstance } from "fastify";
import { FeedForwardNeuralNetwork } from "@hycord/neural";
import brainData from "./neural.digits.brain.json";
import { useAuthenticated } from "../../lib/utils.js";

export default async (server: FastifyInstance) => {
  const net = FeedForwardNeuralNetwork.fromData(brainData);

  server.post("/neural/digits/predict", async (req, res) => {
    try {
      if (!req.body) throw new Error("No content provided");

      const data = req.body as number[];
      if (typeof data != "object" || !data?.length || data.length != 784)
        throw new Error("Invalid content");

      const prediction = net.feedForward(data);

      res.type("application/json").send(prediction);
    } catch (e) {
      res.code(404).send((e as Error).message);
    }
  });

  server.get("/neural/digits/model", async (req, res) => {
    try {
      await useAuthenticated(req);

      return res.type("application/json").send(brainData);
    } catch (e) {
      res
        .status(401)
        .send(
          "Unauthorized. Submit a contact form to gain access to downloading models (This was done to prevent spam and save costs)"
        );
    }
  });
};
