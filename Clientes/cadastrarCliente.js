import Cliente from '../Clientes/Cliente.js';

// variáveis
const formCadastro = document.querySelector('[data-form-cadastrar]');
const formAcessar = document.querySelector('[data-form-acessar]');

// localStorage
let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

// Eventos
formCadastro.addEventListener('submit', cadastrarCliente);
// formAcessar.addEventListener('submit', validarAcesso);

function cadastrarCliente(evento) {

    evento.preventDefault();

    let nome = evento.target.nome.value;
    let email = evento.target.email.value;
    let cpf = evento.target.cpf.value;
    let senha = evento.target.senha.value;
    let estado = evento.target.estado.value;
    let data = evento.target.data.value;

    let cliente = new Cliente(nome, cpf, senha, estado, email, data);

    let agencia = Math.round(Math.random() * 1000);
    let contaBancaria = new ContaCorrente(cliente, agencia);

    clientes.push(contaBancaria);

    limparCampos(evento);
    evento.target.nome.focus();

    localStorage.setItem('clientes', JSON.stringify(clientes));
}

function limparCampos(evento) {
    evento.target.nome.value = "";
    evento.target.email.value = "";
    evento.target.cpf.value = "";
    evento.target.senha.value = "";
    evento.target.estado.value = "";
    evento.target.data.value = "";
}