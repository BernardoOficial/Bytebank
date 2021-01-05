const ehUmCpfComNumerosRepetidos = (cpf) => {

    const cpfsInvalidos = [
        // "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    return cpfsInvalidos.includes(cpf);
}

const calcularTotal = multiplicador => (resultado, numeroAtual) =>
    resultado + numeroAtual * multiplicador--;

const calcularDigito = (parteCPF, multiplicador) => {

    const total = parteCPF.reduce(calcularTotal(multiplicador), 0);
    const resto = total % 11;

    let digito = 11 - resto;

    if (resto < 2) {
        digito = 0;
    }

    return digito;
}

const validarCPF = (input) => {

    const cpfNumeros = input.value.replace(/\D/g, "");

    if (ehUmCpfComNumerosRepetidos(cpfNumeros)) {
        input.setCustomValidity("Este não é um CPF válido");
        return
    }

    const primeiraParteCPF = cpfNumeros.substr(0, 9).split("");
    const primeiroDigitoVerificador = Number(cpfNumeros.charAt(9));
    const primeiroDigitoCalculado = calcularDigito(primeiraParteCPF, 10);

    if (primeiroDigitoVerificador !== primeiroDigitoCalculado) {
        input.setCustomValidity("Este não é um CPF válido");
        return
    }

    const segundaParteCPF = cpfNumeros.substr(0, 10).split("");
    const segundoDigitoVerificador = Number(cpfNumeros.charAt(10));
    const segundoDigitoCalculado = calcularDigito(segundaParteCPF, 11);

    if (segundoDigitoVerificador !== segundoDigitoCalculado) {

        input.setCustomValidity("Este não é um CPF válido");
        return
    }

    input.setCustomValidity("");
    return;
}

export default validarCPF;