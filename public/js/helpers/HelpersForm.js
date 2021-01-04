class HelpersForm {

    static _camposCadastro() {
        return [
            "nome",
            "email",
            "cpf",
            "senha",
            "dataNascimento",
            "cep",
            "logradouro",
            "estado",
            "cidade",
            "bairro"
        ];
    }

    static _camposLogin() {
        return [
            "cpf",
            "senha",
        ];
    }

    static getDataInputsCadastro(evento) {

        return HelpersForm._camposCadastro()
            .map(campo => evento.target[campo].value);
    }

    static getDataInputsLogin(evento) {

        return HelpersForm._camposLogin()
            .map(campo => evento.target[campo].value);
    }

    static clearInputsCadastro(evento) {

        HelpersForm._camposCadastro()
            .map(campo => evento.target[campo].value = "");
    }
}

export default HelpersForm