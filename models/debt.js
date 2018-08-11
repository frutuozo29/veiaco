const mongoose = require('mongoose')

const debtSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    value: Number,
    date: Date,
    payed: Boolean
}, { collection: 'debt' })

module.exports = mongoose.model('Debt', debtSchema)
