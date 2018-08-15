const mongoose = require('mongoose')
const DebtModel = require('../models/debt')

module.exports.create = async debt => {
  // Create a new debt
  try {
    let debtModel = new DebtModel({
      _id: new mongoose.Types.ObjectId(),
      name: debt.name,
      value: debt.value,
      date: debt.date,
      payed: debt.payed
    })
    const response = await debtModel.save()
    return response
  } catch (err) {
    throw err
  }
}

module.exports.read = async (page, perPage) => {
  try {
    const debts = await DebtModel.find({})
      .skip(perPage * page - perPage)
      .limit(parseInt(perPage))
    const count = await DebtModel.count()

    return { debts, count }
  } catch (err) {
    throw err
  }
}

module.exports.readById = async id => {
  try {
    const debt = await DebtModel.findById(id)
    return debt
  } catch (err) {
    throw err
  }
}

module.exports.update = async (id, debt) => {
  // Update a existent debt
  try {
    let query = { _id: id }
    const response = await DebtModel.findByIdAndUpdate(query, debt)
    return response
  } catch (err) {
    throw err
  }
}

module.exports.del = async id => {
  // Delete a debt
  try {
    let query = { _id: id }
    return await DebtModel.findByIdAndRemove(query)
  } catch (err) {
    throw err
  }
}
