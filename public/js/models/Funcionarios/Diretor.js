import Funcionarios from './Funcionarios.js';

class Diretor extends Funcionarios {

    constructor(nome, cpf, salario) {
        super(nome, cpf, salario);

        this._bonificacao = 2;
    }
}

export default Diretor;

