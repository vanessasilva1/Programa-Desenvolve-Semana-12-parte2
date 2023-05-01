import Usuario from "./classe.js";

export default class Docente extends Usuario {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    
    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso ${curso}.`
    }
}

const novoDocente = new Docente('Maria', 'Maria', '2021-01-01');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Ju', 'JS'));

//strict mode
