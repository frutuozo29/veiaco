const server = require('./server/server')
const dbTools = require('./tools/db_tools')
const config = require('./config.json')

dbTools.DBConnectMongoose()
    .then(() => {
        var port = process.env.PORT || config.ENV.port
        server.listen(port, () => {
            console.log('Running on PORT: ' + port)
        })
    })
    .catch((err) => {
        console.log(err)
    })
