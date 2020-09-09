// variáveis
let loginAtual = JSON.parse(localStorage.getItem('login')) || {};

function atualizarLogin() {
    loginAtual = JSON.parse(localStorage.getItem('login')) || {};
}

let boasVindas = document.querySelector('.main__boasVindas');

function carregaInformacoesCliente() {

    atualizarLogin();

    if (loginAtual[0]) {
        let nome = loginAtual[0].nome;

        const h1 = document.createElement('h1');
        h1.classList.add('main__boasVindas__titulo');
        h1.textContent = `Boas vindas, ${nome}!`;

        boasVindas.appendChild(h1);
    }
}

carregaInformacoesCliente();

export default carregaInformacoesCliente;