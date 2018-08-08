const restify = require("restify");
const logger = require("morgan");
const routes = require("../routes/routes");

const server = restify.createServer();

server.use(logger("dev"));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  return next();
});

routes.assignRoutes(server);

module.exports = server;
