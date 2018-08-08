const restify = require("restify");
const logger = require("morgan");
const routes = require("../routes/routes");
const corsMiddleware = require('restify-cors-middleware');

const server = restify.createServer();

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['*']
})

server.pre(cors.preflight)
server.use(cors.actual)

server.use(logger("dev"));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

routes.assignRoutes(server);

module.exports = server;
