class Conta {

    constructor(cliente, valorInicial, agencia) {

        // console.log(this.constructor);
        if (this.constructor == Conta) {

            throw new Error('Não recomendamos instanciar a classe Conta diretamente, pois é uma classe abstrata.');
        }

        this._cliente = cliente;
        this._saldo = valorInicial;
        this._agencia = agencia;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {

            this._cliente = novoCliente
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    get agencia() {
        return this._agencia;
    }

    // método genérico
    sacar(valor) {

        throw new Error('o método sacar() da Conta é abstrato');
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;

        if (this._saldo > valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor < 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        let valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}

export default Conta;