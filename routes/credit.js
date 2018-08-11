const controller = require("../controllers/credit");

function routes(server) {
  server.get("/credit", controller.read);
  server.get("/credit/:id", controller.readById);
  server.post("/credit", controller.create);
  server.put("/credit/:id", controller.update);
  server.del("/credit", controller.del);
}

module.exports = routes;
