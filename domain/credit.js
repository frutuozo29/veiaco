const mongoose = require("mongoose");
const CreditModel = require("../models/credit");

module.exports.create = async credit => {
  try {
    let creditModel = new CreditModel({
      _id: new mongoose.Types.ObjectId(),
      name: credit.name,
      value: credit.value,
      date: credit.date
    });
    const response = await creditModel.save();
    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.read = async (page, perPage) => {
  try {
    const credits = await CreditModel.find({})
      .skip(perPage * page - perPage)
      .limit(parseInt(perPage));

    const count = await CreditModel.count();

    return { credits, count};
  } catch (err) {
    throw err;
  }
};

module.exports.readById = async id => {
  try {
    const credit = await CreditModel.findById(id);
    return credit;
  } catch (err) {
    throw err;
  }
};

module.exports.update = async (id, credit) => {
  try {
    let query = { _id: id };
    const response = await CreditModel.findByIdAndUpdate(query, credit);
    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.del = async id => {
  try {
    let query = { _id: id };
    const response = await CreditModel.findByIdAndRemove(query);
    return response;
  } catch (err) {
    throw err;
  }
};
