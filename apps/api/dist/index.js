// src/index.ts
import Fastify from "fastify";

// src/routes/neural/digits.ts
import { FeedForwardNeuralNetwork } from "@hycord/neural";

// src/routes/neural/neural.digits.brain.json

// src/routes/neural/digits.ts
var digits_default = async (server2) => {
  const net = FeedForwardNeuralNetwork.fromData(neural_digits_brain_default);
  server2.post("/neural/digits/predict", async (req, res) => {
    try {
      if (!req.body)
        throw new Error("No content provided");
      const data = req.body;
      if (typeof data != "object" || !data?.length || data.length != 784)
        throw new Error("Invalid content");
      const prediction = net.feedForward(data);
      const headers = new Headers();
      headers.set("Content-Type", "application/json");
      res.send(
        new Response(JSON.stringify(prediction), {
          status: 200,
          headers
        })
      );
    } catch (e) {
      res.send(
        new Response(e.message, {
          status: 404
        })
      );
    }
  });
  server2.get("/neural/digits/model", async (req, res) => {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    res.send(
      new Response(JSON.stringify(neural_digits_brain_default), {
        status: 200,
        headers
      })
    );
  });
};

// src/routes/neural/index.ts
var neural_default = async (server2, options, done) => {
  await server2.register(digits_default);
  done();
};

// src/routes/index.ts
var routes_default = async (server2, options, done) => {
  await server2.register(neural_default);
  server2.get("/", async (req, res) => {
    res.send(
      new Response(
        JSON.stringify({
          message: "Welcome to my API! I will have documentation available soon under https://masen.dev/api/docs"
        })
      )
    );
  });
  done();
};

// src/index.ts
var server = Fastify({
  logger: true
});
server.register(routes_default);
server.listen({ port: 3e3 }, function(err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});