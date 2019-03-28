const mongoose = require("mongoose");
const config = require("../config.json");

var db;

exports.DBConnectMongoose = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      return db;
    }
    mongoose.Promise = global.Promise;
    let connectionDB =
      process.env.NODE_ENV === "production"
        ? `mongodb+srv://${process.env.USER_MONGO}:${
            process.env.PASSWORD_MONGO
          }@cluster0-hq2ts.mongodb.net/test?retryWrites=true`
        : `mongodb://${config.db_config.host}:${config.db_config.port}/${
            config.db_config.name
          }`;
    mongoose
      .connect(connectionDB, { useNewUrlParser: true })
      .then(() => {
        console.log("mongo connection created");
        resolve(db);
      })
      .catch(err => {
        console.log(`error creating db connection: ${err}`);
        reject(db);
      });
  });
};

exports.getDBConexion = () => {
  if (db) {
    return db;
  }
  console.log("There is no mongo connection");
  return null;
};
