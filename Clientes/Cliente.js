class Cliente {

    get cpf() {
        return this._cpf;
    }

    constructor(nome, email, cpf, senha, dataNascimento, cep, logradouro, estado, cidade, bairro) {
        this.nome = nome;
        this._email = email;
        this._cpf = cpf;
        this._senha = senha;
        this._dataNascimento = dataNascimento;
        this._cep = cep;
        this._logradouro = logradouro;
        this._estado = estado;
        this._cidade = cidade;
        this._bairro = bairro;
    }

    autenticar(senha) {
        return this._senha == senha;
    }

}

export default Cliente;