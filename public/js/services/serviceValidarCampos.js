import validarDataNascimento from '../validacoes/validarDataNascimento.js';
import validarCPF from '../validacoes/validarCPF.js';
import buscarEndereco from '../validacoes/buscarEndereco.js';

const serviceValidarCampos = input => {

    const tipo = input.dataset.tipo;
    const campoEhValido = input.validity.valid;

    // Situação de validar dados
    const validadoresEspecificos = {
        dataNascimento: (input) => validarDataNascimento(input),
        cpf: (input) => validarCPF(input),
        cep: (input) => buscarEndereco(input)
    }

    if (validadoresEspecificos[tipo]) {
        validadoresEspecificos[tipo](input);
    }

    // pai do inputs
    const paiDoInput = input.parentNode;

    // criar div (ou não) com o texto do erro
    const div = paiDoInput.querySelector("div") || document.createElement('div');
    div.classList.add('form__mensagemErro');

    if (!campoEhValido) {

        input.classList.add('form__input__mensagemErro');
        div.textContent = retornarMensagemDeErro(tipo, input.validity)
        paiDoInput.append(div);
    }
    else {
        input.classList.remove('form__input__mensagemErro');
        div.remove();
    }
}

const retornarMensagemDeErro = (tipo, validity) => {

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
        if (validity[erro]) {
            mensagemDeErro = mensagensDeErro[tipo][erro];
        }
    })

    return mensagemDeErro;
}

export default serviceValidarCampos