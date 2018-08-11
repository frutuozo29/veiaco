const mongoose = require('mongoose')

const creditSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    value: Number,
    date: Date
}, { collection: 'credit' })

module.exports = mongoose.model('Credit', creditSchema)
