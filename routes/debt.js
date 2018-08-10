const controller = require("../controllers/debt");

function routes(server) {
  server.get("/debt", controller.read);
  server.get("/debt/:id", controller.readById);
  server.post("/debt", controller.create);
  server.put("/debt/:id", controller.update);
  server.del("/debt", controller.del);
}

module.exports = routes;
