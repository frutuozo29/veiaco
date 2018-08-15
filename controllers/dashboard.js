const dashboardDomain = require('../domain/dashboard')

module.exports.getData = async (req, res, next) => {
  try {
    const filters = req.body
    const dashboard = await dashboardDomain.getData(filters)
    res.send(dashboard)
  } catch (error) {
    res.status(500)
    res.send({ message: error.message })
  }
  next()
}
