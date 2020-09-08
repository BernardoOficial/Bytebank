function listarClientes() {

    atualizarClientes();

    const listaDeClientes = document.querySelector('[data-lista-clientes]');
    let novoCliente;

    listaDeClientes.innerHTML = '';

    for (let i = 0; i < clientes.length; i++) {

        let { div, h2, p1, p2, p3 } = criarElementos();

        h2.textContent = clientes[i]._cliente.nome;
        p1.textContent = clientes[i]._cliente._estado;
        p2.textContent = clientes[i]._cliente._nascimento;
        p3.textContent = clientes[i]._cliente._cpf;

        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        listaDeClientes.appendChild(div);
    }

}

let clientes;

function atualizarClientes() {

    clientes = JSON.parse(localStorage.getItem('clientes')) || [];
}

function criarElementos() {
    let div = document.createElement('div');
    div.classList.add('boxes');

    let h2 = document.createElement('h2');
    h2.classList.add('box', 'titulo');

    let p1 = document.createElement('p');
    p1.classList.add('box');
    let p2 = document.createElement('p');
    p2.classList.add('box');
    let p3 = document.createElement('p');
    p3.classList.add('box');

    return {
        div, h2, p1, p2, p3
    }
}

listarClientes();

export default listarClientes;