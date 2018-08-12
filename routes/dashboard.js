const controller = require("../controllers/dashboard");

function routes(server) {
  server.post("/dashboard", controller.getData);
}

module.exports = routes;
