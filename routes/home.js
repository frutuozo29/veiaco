function routes (server) {
    server.get('/', (req, res, next) => {
        res.send({ message: 'Hello', env: process.env.NODE_ENV })
        next()
    })
}

module.exports = routes
