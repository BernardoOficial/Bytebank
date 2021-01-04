const serviceAlternarAbas = evento => {

    const $ = document.querySelector.bind(document);
    const all = document.querySelectorAll.bind(document);

    const abas = all('[data-aba]');
    const conteudos = all('[data-conteudo]');

    const limparAba = () => abas
        .forEach(aba => aba.classList.remove('ativo'))

    const esconderConteudo = () => conteudos
        .forEach(conteudo => conteudo.classList.add('esconder'));

    const selecionarConteudo = atributo => $(`[data-conteudo="${atributo}"]`)
        .classList.remove('esconder');

    const selecionarAba = aba => aba.classList.add('ativo')

    esconderConteudo();
    limparAba();
    selecionarConteudo(evento.target.dataset.aba);
    selecionarAba(evento.target);
}

export default serviceAlternarAbas