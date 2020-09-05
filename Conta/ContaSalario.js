import Conta from "./Conta.js";

class ContaSalario extends Conta {
    static quantDeContasSalarios = 0;

    constructor(cliente, agencia) {
        super(cliente, 0, agencia);
        ContaSalario.quantDeContasSalarios++;
    }

    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }


}


export default ContaSalario;