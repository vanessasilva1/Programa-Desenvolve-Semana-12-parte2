//aproveitar o código de user00 classe.js para admin. IMPORTAR

import Usuario from "./classe.js";

export default class Admin extends Usuario { /// herda propriedades de admin. Super classe é Usuario
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo) //trazer todas as propriedades que a gente quer aproveitar de usuario para admin.
    }

    //nomeAdmin() {
        //return `${this.nome}` //encapsulamento - métodos para ver quais atributos da classe podem ser expostos fora dela e que forma podem acessar
  //  }

    exibirInfos() {
    return `${this.nome}, ${this.role}, ${this.ativo}` //se refere aos get. POLIMORFISMO - metodo é o mesmo, mas retorna algo diferente
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Rogério', 'r@gmail.com', '2021-01-01');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());

//herda os atributos e os métodos

console.log(novoAdmin.criarCurso('JS', 30));
