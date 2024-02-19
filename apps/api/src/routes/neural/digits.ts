import { FastifyInstance } from "fastify";
import { FeedForwardNeuralNetwork } from "@hycord/neural";
import brainData from "./neural.digits.brain.json";

export default async (server: FastifyInstance) => {
  const net = FeedForwardNeuralNetwork.fromData(brainData);

  server.post("/neural/digits/predict", async (req, res) => {
    try {
      if (!req.body) throw new Error("No content provided");

      const data = req.body as number[];
      if (typeof data != "object" || !data?.length || data.length != 784)
        throw new Error("Invalid content");

      const prediction = net.feedForward(data);

      res.send(prediction);
    } catch (e) {
      res.send(
        new Response((e as Error).message, {
          status: 404,
        })
      );
    }
  });

  // server.get("/neural/digits/model", async (req, res) => {
  //   const headers = new Headers();
  //   headers.set("Content-Type", "application/json");
  //   res.send(
  //     new Response(JSON.stringify(brainData), {
  //       status: 200,
  //       headers,
  //     })
  //   );
  // });
};
