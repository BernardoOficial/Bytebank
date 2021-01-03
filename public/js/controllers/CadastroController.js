import ValuesForm from '../helpers/ValuesForm.js';

const CadastroController = () => {

    const $ = document.querySelector.bind(document);

    $('[data-form-cadastrar]').addEventListener("submit", cadastrarClientes);
}

const cadastrarClientes = (evento) => {

    let valuesForm = new ValuesForm()
    console.log(valuesForm.get(evento))

    // let cliente = new Cliente(
    //     nome,
    //     email,
    //     cpf,
    //     senha,
    //     dataNascimento,
    //     cep, logradouro,
    //     estado,
    //     cidade,
    //     bairro
    // );
}

export default CadastroController