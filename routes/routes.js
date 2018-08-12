const auth = require("./auth");
const home = require("./home");
const debt = require("./debt");
const credit = require("./credit");
const dashboard = require("./dashboard");

module.exports.assignRoutes = server => {
  home(server);
  debt(server);
  credit(server);
  auth(server);
  dashboard(server);
};
