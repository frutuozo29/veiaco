const mongoose = require('mongoose')
const DebtModel = require('../models/debt')

module.exports.create = async (req, res, next) => {
    // Create a new debt
    try {
        let debtModel = new DebtModel({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            value: req.body.value
        })
        const debt = await debtModel.save()
        res.send({ debt: debt })
    } catch (err) {
        res.status(500)
        res.send({ message: err })
    }
    next()
}

module.exports.read = async (req, res, next) => {
    // Read debts
    try {
        const debts = await DebtModel.find({})
        res.send({ debts: debts })
    } catch (err) {
        res.status(500)
        res.send({ message: err })
    }
    next()
}

module.exports.readById = async (req, res, next) => {
    // Read debts
    try {
        const debt = await DebtModel.findById(req.params.id)
        res.send({ debt: debt })
    } catch (err) {
        res.status(500)
        res.send({ message: err })
    }
    next()
}

module.exports.update = async (req, res, next) => {
    // Update a existent debt
    try {
        let query = { _id: req.params.id }
        const debt = await DebtModel.findByIdAndUpdate(query, req.body)
        res.send({ debt: debt })
    } catch (err) {
        res.status(500)
        res.send({ message: err })
    }
    next()
}

module.exports.del = async (req, res, next) => {
    // Delete a debt
    try {
        let query = { _id: req.headers._id }
        const debt = await DebtModel.findByIdAndRemove(query)
        res.send({ debt: debt })
    } catch (err) {
        res.status(500)
        res.send({ message: err })
    }
    next()
}
