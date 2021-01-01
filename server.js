const express = require('express');

const server = express();

server.get('/', function (req, res) {
    return res.send("Servidor funcionou!");
})

server.listen(3000);