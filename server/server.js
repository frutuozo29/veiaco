const restify = require("restify");
const logger = require("morgan");
const routes = require("../routes/routes");
const corsMiddleware = require("restify-cors-middleware");
const rjwt = require("restify-jwt-community");
const config = require("../config.json");

const server = restify.createServer();

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["*", 'authorization']
});

server.use(
  rjwt(config.jwt).unless({
    path: ["/auth"]
  })
);

server.pre(cors.preflight);
server.use(cors.actual);

server.use(logger("dev"));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

routes.assignRoutes(server);

module.exports = server;
