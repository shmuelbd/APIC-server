const express = require('express')
const app = express()
const port = 3500

module.exports = {
    exampleCommand: async (req, res, next) => {
        console.log("enter");

        let appServer = app.listen(port, () => {
            console.log(`I'm ready to listen on port ${port}`)
        })

        app.get('/', (subReq, subRes, subNext) => {
            subRes.status(200).json({ message: `Thanks for trying me on port ${port}` })
            console.log("Someone connected to the server");
            appServer.close()
            return res.status(200).json({ message: `The server closes the port ${port}` })
        })
    }
};