import Funcionarios from './Funcionarios.js';

class Gerente extends Funcionarios {

    constructor(nome, cpf, salario) {
        super(nome, cpf, salario);

        this._bonificacao = 1.1;
    }
}

export default Gerente;
