class MensagemView {

    static erro(tipo, validity) {

        let mensagemDeErro = "";

        const tiposDeErro = [
            "valueMissing",
            "typeMismatch",
            "tooShort",
            "rangeUnderflow",
            "customError",
            "patternMismatch"
        ];

        const mensagensDeErro = {
            nome: {
                valueMissing: "O nome é necessário"
            },
            email: {
                valueMissing: "O e-mail é necessário",
                typeMismatch: "Este não é um e-mail válido"
            },
            senha: {
                valueMissing: "A senha é necessária",
                tooShort: "A senha deve ter no mínimo 4 caracteres"
            },
            dataNascimento: {
                valueMissing: "A data de nascimento é necessária",
                rangeUnderflow: "A data mínima é 01/01/1901",
                customError: "A idade mínima é de 18 anos"
            },
            cpf: {
                valueMissing: "O CPF é necessário",
                customError: "Este não é um CPF válido"
            },
            cep: {
                valueMissing: "O CEP é necessário",
                patternMismatch: "Este CEP não é válido",
                customError: "Este CEP não é válido"
            },
            logradouro: {
                valueMissing: "O logradouro é necessário"
            },
            cidade: {
                valueMissing: "A cidade é necessária"
            },
            estado: {
                valueMissing: "A estado é necessária"
            },
            bairro: {
                valueMissing: "O bairro é necessário"
            }
        };

        tiposDeErro.forEach(erro => {
            if (validity[erro])
                mensagemDeErro = mensagensDeErro[tipo][erro];
        })

        return mensagemDeErro;
    }
}

export default MensagemView;