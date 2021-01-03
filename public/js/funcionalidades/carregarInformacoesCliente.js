// variáveis
let loginAtual = JSON.parse(localStorage.getItem('login')) || {};

function atualizarLogin() {
    loginAtual = JSON.parse(localStorage.getItem('login')) || {};
}

let boasVindas = document.querySelector('.main__boasVindas');

let infoCliente = document.querySelector('[data-cliente]');
let infoAgencia = document.querySelector('[data-agencia]');
let infoSaldo = document.querySelector('[data-saldo]');

function carregaInformacoesCliente() {

    atualizarLogin();

    if (loginAtual[0]) {
        let nome = loginAtual[0].nome;
        let agencia = "****";
        let saldo = "R$ 0.0"

        const h1 = document.createElement('h1');
        h1.classList.add('main__boasVindas__titulo');
        h1.textContent = `Boas vindas, ${nome}!`;

        infoCliente.textContent += nome;
        infoAgencia.textContent += agencia;
        infoSaldo.textContent += saldo;

        boasVindas.appendChild(h1);
    }
}

carregaInformacoesCliente();

export default carregaInformacoesCliente;