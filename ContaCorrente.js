import Cliente from "./Cliente.js";

class ContaCorrente {
    static quantDeContas = 0;

    // Publico
    agencia;

    // Privados
    #cliente;
    #saldo = 0;

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {

            this.#cliente = novoCliente
        }
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }


    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.quantDeContas++;
    }


    sacar(valor) {
        if (this.#saldo > valor) {
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor < 0) return;
        this.#saldo += valor;
    }

    transferir(valor, conta) {
        let valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        // tipo primitivo não é referenciado
        // então não altera a variável original
        valor = 20;
        // tipo não primitivo é referenciado
        // então altera o objeto original
        conta.cidade = 'São Paulo';
    }
}

export default ContaCorrente;