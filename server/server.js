const restify = require('restify');

const server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', (req, res, next) => {
    res.send('Olá')
    next()
})

server.post('/', (req, res, next) => {
    console.log('Chegou no post'+ req)
    res.send(req.body)
    next()
})

module.exports = server
