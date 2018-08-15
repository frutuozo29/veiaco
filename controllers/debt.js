const debtDomain = require('../domain/debt')

module.exports.create = async (req, res, next) => {
  try {
    const debt = await debtDomain.create(req.body)
    res.send({ debt: debt })
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}

module.exports.read = async (req, res, next) => {
  try {
    let page = req.query.page || 1
    let perPage = req.query.perpage || 10

    const debts = await debtDomain.read(page, perPage)
    res.send(debts)
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}

module.exports.readById = async (req, res, next) => {
  // Read debts
  try {
    const debt = await debtDomain.readById(req.params.id)
    res.send({ debt: debt })
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}

module.exports.update = async (req, res, next) => {
  try {
    const debt = await debtDomain.update(req.params.id, req.body)
    res.send({ debt: debt })
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}

module.exports.del = async (req, res, next) => {
  try {
    const debt = await debtDomain.del(req.params.id)
    res.send({ debt: debt })
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}
