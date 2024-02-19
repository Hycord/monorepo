import Fastify from "fastify";
import routes from "./routes/index.js";

const server = Fastify({
  logger: true,
});

server.register(routes);

server.listen({ port: 3000 }, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
