const debt = require('../domain/debt')

function routes (server) {
    server.get('/debt', debt.read)
    server.post('/debt', debt.create)
    server.put('/debt', debt.update)
    server.del('/debt', debt.del)
}

module.exports = routes
