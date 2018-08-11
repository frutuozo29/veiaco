const home = require("./home");
const debt = require("./debt");
const credit = require("./credit");
const auth = require("./auth");

module.exports.assignRoutes = server => {
  home(server);
  debt(server);
  credit(server);
  auth(server);
};
