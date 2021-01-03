import Cliente from '../Clientes/Cliente.js';

// variáveis
const formCadastro = document.querySelector('[data-form-cadastrar]');

// localStorage
let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

// Eventos
formCadastro.addEventListener('submit', cadastrarCliente);

function cadastrarCliente(evento) {

    let nome = evento.target.nome.value;
    let email = evento.target.email.value;
    let cpf = evento.target.cpf.value;
    let senha = evento.target.senha.value;
    let dataNascimento = evento.target.dataNascimento.value;
    let cep = evento.target.cep.value;
    let logradouro = evento.target.logradouro.value;
    let estado = evento.target.estado.value;
    let cidade = evento.target.cidade.value;
    let bairro = evento.target.bairro.value;

    let cliente = new Cliente(nome, email, cpf, senha, dataNascimento, cep, logradouro, estado, cidade, bairro);

    // let agencia = Math.round(Math.random() * 1000);
    // let contaBancaria = new ContaCorrente(cliente, agencia);

    clientes.push(cliente);

    limparCampos(evento);
    evento.target.nome.focus();

    localStorage.setItem('clientes', JSON.stringify(clientes));
}

function limparCampos(evento) {
    evento.target.nome.value = "";
    evento.target.email.value = "";
    evento.target.cpf.value = "";
    evento.target.senha.value = "";
    evento.target.dataNascimento.value = "";
    evento.target.cep.value = "";
    evento.target.logradouro.value = "";
    evento.target.estado.value = "";
    evento.target.cidade.value = "";
    evento.target.bairro.value = "";
}

export default cadastrarCliente;