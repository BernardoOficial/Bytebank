class Cliente {
    nome;
    _cpf;
    _senha;

    get cpf() {
        return this._cpf;
    }

    get senha() {
        return this._senha;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

}

export default Cliente;