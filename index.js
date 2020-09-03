import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';

// A classe funcionar como se fosse um molde, que ao instanciar 
// ele com o 'new' criamos um objeto baseado nesta classe

const cliente1 = new Cliente('Bernardo', 11122233348);
const cliente2 = new Cliente('Breno', 44455566689);

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1000);
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 101);

contaCorrenteCliente1.depositar(500);

let valorTransferir = 200;
contaCorrenteCliente1.transferir(valorTransferir, contaCorrenteCliente2)

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
    let cpf = evento.target.cpf.value;
    let senha = evento.target.senha.value;

    let cliente = new Cliente(nome, cpf, senha);

    let agencia = Math.round(Math.random() * 1000);
    let contaBancaria = new ContaCorrente(cliente, agencia);

    clientes.push(contaBancaria);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    verificarConta();
}

function verificarConta() {

    // Verificar se foi cadastrado o cliente e a conta corrente.

    const listaDeClientes = document.querySelector('[data-lista-clientes]');
    let novoCliente;

    for (let i = 0; i < clientes.length; i++) {

        novoCliente = document.createElement('li');
        novoCliente.innerHTML = `<p></p>`
    }



}









// Procurar por determinado cliente através da conta corrente criada;

let teste = [contaCorrenteCliente1, contaCorrenteCliente2];
let result = teste.filter(conta => {
    return conta.cliente.nome == 'Bernardo';
})

console.log(result);