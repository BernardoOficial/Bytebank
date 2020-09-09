// variáveis
const formLogin = document.querySelector('[data-form-acessar]');
let clientes;

// localStorage
function atualizarClientes() {

    clientes = JSON.parse(localStorage.getItem('clientes')) || [];
}

formLogin.addEventListener('submit', autentificarCliente)

function autentificarCliente(evento) {

    let cpf = evento.target.cpf.value;
    let senha = evento.target.senha.value;

    atualizarClientes();

    clientes.forEach(cliente => {
        if (!cliente._cpf === cpf && cliente._senha === senha) {
            evento.preventDefault();
        }
        else {
            return;
        }
    });

}

export default autentificarCliente;