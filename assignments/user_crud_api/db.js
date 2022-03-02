const mongodb = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

mongodb.connect(process.env.CONNECTIONSTRING,function (err, client) {
    module.exports = client
    console.log('Database service connected')
    const app = require('./server')
    app.listen(3000)
    console.log('server is listening at port...3000 ', )
})
