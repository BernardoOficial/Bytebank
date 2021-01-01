// variáveis
const formLogin = document.querySelector('[data-form-acessar]');
let clientes;

// localStorage
function atualizarClientes() {

    clientes = JSON.parse(localStorage.getItem('clientes')) || [];
}

formLogin.addEventListener('submit', autentificarCliente);

function autentificarCliente(evento) {

    let cpf = evento.target.cpf.value;
    let senha = evento.target.senha.value;

    atualizarClientes();

    let loginEhValido = clientes.filter(cliente => {

        if (cliente._cpf === cpf && cliente._senha === senha) {

            return cliente;
        }
    });

    localStorage.setItem('login', JSON.stringify(loginEhValido));
}

export default autentificarCliente;