const home = require('./home')
const debt = require('./debt')

module.exports.assignRoutes = (server) => {
    home(server)
    debt(server)
}
