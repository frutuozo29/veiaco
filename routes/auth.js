const controller = require("../controllers/auth");

function routes(server) {
  server.post("/auth", controller.auth);
}

module.exports = routes;
