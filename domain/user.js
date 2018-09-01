const mongoose = require("mongoose");
const UserModel = require("../models/user");

module.exports.authenticate = (user, password) => {
  return Promise.resolve({
    _id: "827eh8123hnfwienof",
    user: user,
    password: password
  });
};

module.exports.create = async user => {
  try {
    let userModel = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      name: user.name,
      email: user.email,
      username: user.username,
      password: user.password
    });
    const response = await userModel.save();
    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.read = async (page, perPage) => {
  try {
    const users = await UserModel.find({})
      .skip(perPage * page - perPage)
      .limit(parseInt(perPage));

    const count = await UserModel.count();

    return { users, count };
  } catch (err) {
    throw err;
  }
};

module.exports.readById = async id => {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports.update = async (id, user) => {
  try {
    let query = { _id: id };
    const response = await UserModel.findByIdAndUpdate(query, user);
    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.del = async id => {
  try {
    let query = { _id: id };
    const response = await UserModel.findByIdAndRemove(query);
    return response;
  } catch (err) {
    throw err;
  }
};
