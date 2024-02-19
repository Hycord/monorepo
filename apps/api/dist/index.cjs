"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_fastify = __toESM(require("fastify"), 1);

// src/routes/neural/digits.ts
var import_neural = require("@hycord/neural");

// src/routes/neural/neural.digits.brain.json

// src/routes/neural/digits.ts
var digits_default = async (server2) => {
  const net = import_neural.FeedForwardNeuralNetwork.fromData(neural_digits_brain_default);
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
var server = (0, import_fastify.default)({
  logger: true
});
server.register(routes_default);
server.listen({ port: 3e3 }, function(err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});