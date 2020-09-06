import Cliente from './Cliente.js';
import ContaCorrente from './Conta/ContaCorrente.js';
import ContaPoupanca from './Conta/ContaPoupanca.js';
import ContaSalario from './Conta/ContaSalario.js';

import Gerente from './Funcionarios/Gerente.js';
import Diretor from './Funcionarios/Diretor.js';
import SistemaAutentificacao from './SistemaAutentificacao.js';

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





// Procurar por determinado cliente através da conta corrente criada;

// let teste = [contaCorrenteCliente1, contaCorrenteCliente2];
// let result = teste.filter(conta => {
//     return conta.cliente.nome == 'Bernardo';
// })

// console.log(result);