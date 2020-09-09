class Cliente {

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha, estado, email, dataNascimento) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
        this._estado = estado;
        this._email = email;
        this._dataNascimento = dataNascimento;
    }

    autenticar(senha) {
        return this._senha == senha;
    }

}

export default Cliente;