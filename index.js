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

function atualizarClientes() {

    clientes = JSON.parse(localStorage.getItem('clientes')) || [];
}

function listarClientes() {

    atualizarClientes();

    // Verificar se foi cadastrado o cliente e a conta corrente.

    const listaDeClientes = document.querySelector('[data-lista-clientes]');
    let novoCliente;

    listaDeClientes.innerHTML = '';

    for (let i = 0; i < clientes.length; i++) {

        novoCliente = document.createElement('li');
        novoCliente.innerHTML = `
            <p>${clientes[i]._cliente.nome} | ${clientes[i]._agencia} | ${clientes[i]._saldo} </p>
        `
        listaDeClientes.appendChild(novoCliente);
    }

}

listarClientes();

function cadastrarCliente(evento) {

    evento.preventDefault();

    let nome = evento.target.nome.value;
    let cpf = evento.target.cpf.value;
    let senha = evento.target.senha.value;

    let cliente = new Cliente(nome, cpf, senha);

    let agencia = Math.round(Math.random() * 1000);
    let contaBancaria = new ContaCorrente(cliente, agencia);

    clientes.push(contaBancaria);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    listarClientes();
}






// Procurar por determinado cliente através da conta corrente criada;

// let teste = [contaCorrenteCliente1, contaCorrenteCliente2];
// let result = teste.filter(conta => {
//     return conta.cliente.nome == 'Bernardo';
// })

// console.log(result);