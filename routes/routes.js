const auth = require("./auth");
const home = require("./home");
const debt = require("./debt");
const credit = require("./credit");
const user = require("./user");
const dashboard = require("./dashboard");

module.exports.assignRoutes = server => {
  home(server);
  debt(server);
  credit(server);
  user(server);
  auth(server);
  dashboard(server);
};
