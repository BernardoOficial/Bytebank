
function buscarEndereco(input) {

    const cepLimpo = input.value.replace(/\D/g, "");

    const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
    const config = {
        method: "GET"
    }

    if (input.validity.valid) {
        fetch(url, config)
            .then(response => response.json())
            .then(cep =>

                preencherCampos(cep)
            )
    }
    else {

        const logradouro = document.querySelector('[data-tipo="logradouro"]');
        const estado = document.querySelector('[data-tipo="estado"]');
        const cidade = document.querySelector('[data-tipo="cidade"]');
        const bairro = document.querySelector('[data-tipo="bairro"]');

        logradouro.value = "";
        estado.value = "";
        cidade.value = "";
        bairro.value = "";
    }
}

function preencherCampos(cep) {

    const logradouro = document.querySelector('[data-tipo="logradouro"]');
    const estado = document.querySelector('[data-tipo="estado"]');
    const cidade = document.querySelector('[data-tipo="cidade"]');
    const bairro = document.querySelector('[data-tipo="bairro"]');

    logradouro.value = cep.logradouro;
    estado.value = cep.uf;
    cidade.value = cep.localidade;
    bairro.value = cep.bairro;

}

export default buscarEndereco;