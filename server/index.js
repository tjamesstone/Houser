require("dotenv").config()
const express = require('express')
const session = require('express-session')
const ctrl = require('./controller')
const massive = require('massive')

const app = express()

let {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

//Middlework
app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
)

//endpoints
app.get('/api/houses', ctrl.getAllHouses)
app.get('/api/houses:id', ctrl.getOneHouse)
app.post('/api/houses', ctrl.addNewHouse)



// //app listening
// app.listen(SERVER_PORT, () => {
//     console.log(`Server listening on port ${SERVER_PORT}`)
// })

//Massive connection string and app listening
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database is set')
    app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))
})