import MensagemView from '../views/MensagemView.js';
import serviceBuscarEndereco from '../services/serviceBuscarEndereco.js';
import validarDataNascimento from '../validacoes/validarDataNascimento.js';
import validarCPF from '../validacoes/validarCPF.js';

const serviceValidarCampos = input => {

    const tipo = input.dataset.tipo;
    const campoEhValido = input.validity.valid;
    const paiDoInput = input.parentNode;

    const elementoDiv = paiDoInput.querySelector("div") || document.createElement('div');
    elementoDiv.classList.add('form__mensagemErro');

    const validadoresEspecificos = {
        dataNascimento: (input) => validarDataNascimento(input),
        cpf: (input) => validarCPF(input),
        cep: (input) => serviceBuscarEndereco(input)
    }

    if (validadoresEspecificos[tipo])
        validadoresEspecificos[tipo](input)

    if (!campoEhValido) {

        input.classList.add('form__input__mensagemErro');
        elementoDiv.textContent = MensagemView.erro(tipo, input.validity)
        paiDoInput.append(elementoDiv);
    }
    else {
        input.classList.remove('form__input__mensagemErro');
        elementoDiv.remove();
    }
}

export default serviceValidarCampos;