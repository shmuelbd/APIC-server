const { exampleCommand } = require("./exampleCommand/controllers");
const express = require('express')

exports.MainRouter = (app) => {
    app.get("/", exampleCommand);
    app.use('/app1', express.static('web_server'))
};
