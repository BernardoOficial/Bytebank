class Cliente {
    nome;
    #cpf;
    #senha;

    get cpf() {
        return this.#cpf;
    }

    get senha() {
        return this.#senha;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }

}

export default Cliente;