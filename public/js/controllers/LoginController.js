import HelpersForm from '../helpers/HelpersForm.js';
import serviceAlternarAbas from '../services/serviceAlternarAbas.js';

const $ = document.querySelector.bind(document);
const all = document.querySelectorAll.bind(document);

const LoginController = () => {

    $('[data-form-acessar]')
        .addEventListener('submit', autentificarCliente);

    all('[data-aba]')
        .forEach(aba => aba.addEventListener('click', serviceAlternarAbas));
}

const autentificarCliente = evento => {

    const inputsDate = HelpersForm.getDataInputsLogin(evento);

    const clientes = atualizarClientes();

    localStorage
        .setItem(
            'login',
            JSON.stringify(
                clientes.filter(cliente => {

                    const cpfCorreto = cliente.cpf === inputsDate[0];
                    const senhaCorreta = cliente.senha === inputsDate[0];

                    if (cpfCorreto && senhaCorreta)
                        return cliente
                })
            ));
}

const atualizarClientes = () => JSON.parse(
    localStorage.getItem('clientes')) ||
    [];

export default LoginController;