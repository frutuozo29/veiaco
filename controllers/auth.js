const userDomain = require("../domain/user");
const config = require("../config.json");
const jwt = require("jsonwebtoken");

module.exports.auth = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await userDomain.authenticate(username, password);

    let token = jwt.sign(user, config.jwt.secret, {
      expiresIn: "86400m"
    });
    let { iat, exp } = jwt.decode(token);
    res.send({ iat, exp, token });
  } catch (err) {
    res.status(500);
    res.send({ message: err });
  }
  next();
};
