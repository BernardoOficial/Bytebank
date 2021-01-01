import ValuesForm from '../helpers/ValuesForm.js';

class CadastroController {

    constructor() {

        const $ = document.querySelector.bind(document);

        this.formCadastro = $('[data-form-cadastrar]')
            .addEventListenner("submit", cadastrarClientes);
    }

    cadastrarClientes(evento) {

        console.log(ValuesForm.get(evento))

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
}

export default CadastroController;