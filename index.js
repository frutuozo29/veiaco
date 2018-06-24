const server = require('./server/server')
const dbTools = require('./tools/db_tools')
const config = require('./config.json')

dbTools.DBConnectMongoose()
    .then(() => {
        server.listen(config.ENV.port, () => {
            console.log('Running on PORT: ' + config.ENV.port)
        })
    })
