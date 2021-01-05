const validarDataNascimento = (input) => {

    const dataNascimento = new Date(input.value);
    const dataAtual = new Date();

    const dataDe18Anos = new Date(
        dataNascimento.getFullYear() + 18,
        dataNascimento.getMonth(),
        dataNascimento.getDate()
    );

    if (dataDe18Anos > dataAtual) {

        input.setCustomValidity("A idade mínima é de 18 anos");
        return;
    }

    input.setCustomValidity("");
    return;

}

export default validarDataNascimento; 