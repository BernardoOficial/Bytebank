const express = require('express');
const server = express();

server
    .use(express.static('public'))
    .get('/', index)
    .get('/acesso', acesso)
    .get('/cadastro-concluido', cadastro)
    .get('/cliente', cliente)
    .listen(3000)

function index(req, res) {
    return res.sendFile(__dirname + "/public/pages/index.html");
}
function acesso(req, res) {
    return res.sendFile(__dirname + "/public/pages/acesso.html");
}
function cadastro(req, res) {
    return res.sendFile(__dirname + "/public/pages/cadastroConcluido.html");
}
function cliente(req, res) {
    return res.sendFile(__dirname + "/public/pages/cliente.html");
}

// QUERO SABER A DIFERENÇA ENTRE SENDFILE E RENDER
// RENDER É UTILIZADO COM O NUNJUNKS