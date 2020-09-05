import Cliente from './Cliente.js';
import ContaCorrente from './Conta/ContaCorrente.js';
import ContaPoupanca from './Conta/ContaPoupanca.js';
import ContaSalario from './Conta/ContaSalario.js';

import Gerente from './Funcionarios/Gerente.js';
import Diretor from './Funcionarios/Diretor.js';
import SistemaAutentificacao from './SistemaAutentificacao.js';


const gerente = new Gerente('Bernardo', 488484484, 10000);
gerente.CadastrarSenha('123456');
const diretor = new Diretor('Breno', 4992993, 12000);
diretor.CadastrarSenha('123');

const cliente = new Cliente('Bruno', 443434344, '456');

const gerenteLogou = SistemaAutentificacao.login(gerente, '123456');
const diretorLogou = SistemaAutentificacao.login(diretor, '123');
const clienteLogou = SistemaAutentificacao.login(cliente, '456');

// variáveis
const formCadastro = document.querySelector('[data-form-cadastrar]');
const formAcessar = document.querySelector('[data-form-acessar]');

// localStorage
let clientes = JSON.parse(localStorage.getItem('clientes')) || [];;

function atualizarClientes() {

    clientes = JSON.parse(localStorage.getItem('clientes')) || [];
}

listarClientes();

// Eventos
formCadastro.addEventListener('submit', cadastrarCliente);
// formAcessar.addEventListener('submit', validarAcesso);

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
    // console.log(clientes);
    // console.log(clientes.cpf);
    // console.log(clientes.senha);

    listarClientes();
}

function listarClientes() {

    atualizarClientes();

    // Verificar se foi cadastrado o cliente e a conta corrente.

    const listaDeClientes = document.querySelector('[data-lista-clientes]');
    let novoCliente;

    listaDeClientes.innerHTML = '';

    for (let i = 0; i < clientes.length; i++) {
        console.log(clientes[i].cliente);

        novoCliente = document.createElement('li');
        novoCliente.innerHTML = `
            <p>${clientes[i].cliente.nome} | ${clientes[i].agencia} | ${clientes[i].saldo} </p>
        `
        listaDeClientes.appendChild(novoCliente);
    }

}

// Procurar por determinado cliente através da conta corrente criada;

// let teste = [contaCorrenteCliente1, contaCorrenteCliente2];
// let result = teste.filter(conta => {
//     return conta.cliente.nome == 'Bernardo';
// })

// console.log(result);