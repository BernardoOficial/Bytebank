import serviceFetch from "./serviceFetch.js";

const $ = document.querySelector.bind(document);

const campos = [
    $('[data-tipo="logradouro"]'),
    $('[data-tipo="estado"]'),
    $('[data-tipo="cidade"]'),
    $('[data-tipo="bairro"]')
];

const serviceBuscarEndereco = async (input) => {

    const cepLimpo = input.value.replace(/\D/g, "");

    const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
    const config = {
        method: "GET"
    }

    if (input.validity.valid) {
        const cep = await serviceFetch(url, config);
        preencherCampos(cep);
    }
    else {
        limparCampos();
    }
}

const preencherCampos = (cep) => {

    campos[0].value = cep.logradouro;
    campos[1].value = cep.uf;
    campos[2].value = cep.localidade;
    campos[3].value = cep.bairro;
}

const limparCampos = () => campos.forEach(campo => [campo].value = "")

export default serviceBuscarEndereco;