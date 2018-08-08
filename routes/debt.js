const debt = require('../domain/debt')

function routes (server) {
    server.get('/debt', debt.read)
    server.get('/debt/:id', debt.readById)
    server.post('/debt', debt.create)
    server.put('/debt/:id', debt.update)
    server.del('/debt', debt.del)
}

module.exports = routes
