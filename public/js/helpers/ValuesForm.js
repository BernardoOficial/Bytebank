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

        return campos.forEach(campo => {
            return evento.target[campo].value;
        });
    }
}

export default ValuesForm