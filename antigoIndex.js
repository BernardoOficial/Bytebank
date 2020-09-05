const cliente1 = new Cliente('Bernardo', 11122233348);
const cliente2 = new Cliente('Breno', 44455566689);

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1000);
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 101);

contaCorrenteCliente1.depositar(500);

let valorTransferir = 200;
contaCorrenteCliente1.transferir(valorTransferir, contaCorrenteCliente2)

