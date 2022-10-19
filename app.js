const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
app.use(express.json());

//Central router
const { MainRouter } = require("./routes/MainRouter")
MainRouter(app)

//Allows access to files
//for the main path not to automatically run the html files, the commands must be in this order
app.use(express.static('web_server'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})