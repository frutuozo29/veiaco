const userDomain = require("../domain/user");
const config = require("../config.json");
const jwt = require('jsonwebtoken');

module.exports.auth = async (req, res, next) => {
  try {
    const user = await userDomain.authenticate(
      req.body.username,
      req.body.password
    );

    let token = jwt.sign(user, config.jwt.secret, {
      expiresIn: "60m"
    });
    let { iat, exp } = jwt.decode(token);
    res.send({ iat, exp, token });
  } catch (err) {
    res.status(500);
    res.send({ message: err });
  }
  next();
};
