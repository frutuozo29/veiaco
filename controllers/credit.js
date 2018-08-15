const creditDomain = require('../domain/credit')

module.exports.create = async (req, res, next) => {
  try {
    const credit = await creditDomain.create(req.body)
    res.send({ credit: credit })
  } catch (err) {
    console.log(err)
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}

module.exports.read = async (req, res, next) => {
  try {
    let page = req.query.page || 1
    let perPage = req.query.perpage || 10

    const credits = await creditDomain.read(page, perPage)
    res.send(credits)
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}

module.exports.readById = async (req, res, next) => {
  try {
    const credit = await creditDomain.readById(req.params.id)
    res.send({ credit: credit })
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}

module.exports.update = async (req, res, next) => {
  try {
    const credit = await creditDomain.update(req.params.id, req.body)
    res.send({ credit: credit })
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}

module.exports.del = async (req, res, next) => {
  try {
    const credit = await creditDomain.del(req.params.id)
    res.send({ credit: credit })
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}
