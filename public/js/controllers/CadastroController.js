import HelpersForm from '../helpers/HelpersForm.js';
import Cliente from '../models/Clientes/Cliente.js';
import serviceAlternarAbas from '../services/serviceAlternarAbas.js';
import serviceValidarCampos from '../services/serviceValidarCampos.js';

// localStorage
let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

const $ = document.querySelector.bind(document);
const all = document.querySelectorAll.bind(document);

const CadastroController = () => {

    $('[data-form-cadastrar]')
        .addEventListener("submit", cadastrarClientes);

    all('[data-aba]')
        .forEach(aba => aba.addEventListener('click', serviceAlternarAbas));

    all('[data-tipo]')
        .forEach(input => {

            input.addEventListener('input', () => serviceValidarCampos(input, false));
            input.addEventListener('blur', () => serviceValidarCampos(input))
        })

}

const cadastrarClientes = evento => {

    const inputsDate = HelpersForm.getDataInputsCadastro(evento);
    HelpersForm.clearInputsCadastro(evento)

    let cliente = new Cliente(...inputsDate);

    clientes.push(cliente)

    localStorage.setItem('clientes', JSON.stringify(clientes));
}

export default CadastroController