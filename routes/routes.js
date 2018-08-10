const home = require("./home");
const debt = require("./debt");
const auth = require("./auth");

module.exports.assignRoutes = server => {
  home(server);
  debt(server);
  auth(server);
};
