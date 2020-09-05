import Conta from "./Conta.js";

class ContaCorrente extends Conta {
    static quantDeContasCorrentes = 0;

    constructor(cliente, agencia) {
        super(cliente, 0, agencia);
        ContaCorrente.quantDeContasCorrentes++;
    }

    sacar(valor) {

        const taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

export default ContaCorrente;