import Conta from "./Conta.js";

class ContaPoupanca extends Conta {
    static quantDeContasPoupancas = 0;

    constructor(cliente, valorInicial, agencia) {
        super(cliente, valorInicial, agencia);
        ContaPoupanca.quantDeContasPoupancas++;
    }

    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}


export default ContaPoupanca;