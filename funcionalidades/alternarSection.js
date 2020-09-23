const sections = document.querySelectorAll('main#cliente > section');
const menu = document.querySelectorAll('aside a');

// console.log(menu);
menu.forEach(link => {

    link.addEventListener('click', alternarSection);
})

const arraySections = {
    "Conta corrente": sections[0],
    "Conta poupança": sections[1],
    "Conta salário": sections[2],
    "Depositar": sections[3],
    "Transferir": sections[4],
    "Cobrar": sections[5],
    "Notificação": sections[6],
    "Configurações": sections[7]
}

function alternarSection(evento) {

    esconderSections();
    deselecionarLinks();

    aparecerSection("Conta corrente");
    selecionarLink(menu[0]);

    if (evento) {
        esconderSections();
        deselecionarLinks();
        const linkAtivado = evento.target;
        const sectionAtivada = evento.target.textContent;

        aparecerSection(sectionAtivada);
        selecionarLink(linkAtivado);
    }
}

function aparecerSection(sectionAtivada) {
    Object.keys(arraySections).forEach(section => {

        if (sectionAtivada === section) {
            arraySections[section].classList.remove('desativado');
            arraySections[section].classList.add('ativo');
        }
    })
}

function esconderSections() {
    sections.forEach(section => {
        section.classList.add('desativado');
    })
}

function deselecionarLinks() {
    menu.forEach(link => {
        link.classList.remove('ativo');
    })
}

function selecionarLink(linkAtivado) {
    linkAtivado.classList.add('ativo');
}

alternarSection()

export default alternarSection;