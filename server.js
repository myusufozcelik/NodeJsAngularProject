const express = require('express')
const app = express();
let bodyParser = require('body-parser')
const db = require('./app/config/db.config.js')

db.sequelize.sync({force:true}).then(() => {
    console.log('Drop and Resync with {force: true}')
})

let router = require('./app/routers/router.js')

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use('/',router)

// Create server

const server = app.listen(8080,()=> {
    let host = server.address().address
    let port = server.address().port
    console.log('App listening at http://%s:%s',host,port)
})
