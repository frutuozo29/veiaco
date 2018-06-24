function routes (server) {
    server.get('/', (req, res, next) => {
        res.send({ message: 'Hello' })
        next()
    })
}

module.exports = routes
