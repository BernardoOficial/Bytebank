// Alternar cadastro e login
const conteudos = document.querySelectorAll('[data-conteudo]');
const abas = document.querySelectorAll('[data-aba]');

abas.forEach(aba => aba.addEventListener('click', alternarAbas));

function alternarAbas(evento) {

    let dataAtributo = evento.target.dataset.aba;
    let aba = evento.target;

    esconderConteudo();
    limparAba();
    selecionarConteudo(dataAtributo);
    selecionarAba(aba);
}

function limparAba() {
    abas.forEach(aba => aba.classList.remove('ativo'));
}

function esconderConteudo() {
    conteudos.forEach(conteudo => conteudo.classList.add('esconder'));
}

function selecionarConteudo(atributo) {
    let conteudo = document.querySelector(`[data-conteudo="${atributo}"]`);

    conteudo.classList.remove('esconder');
}

function selecionarAba(aba) {
    aba.classList.add('ativo');
}

module.exports = {
    alternarAbas
}
