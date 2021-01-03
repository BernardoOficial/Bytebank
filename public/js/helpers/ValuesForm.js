class ValuesForm {

    get(evento) {

        const campos = [
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
        ]

        return campos.map(function (campo) {
            return evento.target[campo].value;
        });
    }
}

export default ValuesForm