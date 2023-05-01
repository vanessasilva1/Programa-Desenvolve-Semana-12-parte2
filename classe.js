export default class Usuario { //exportar todo esse código para usar em outras partes do projeto
    //privando atributos
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) { //iniciar a classe com algumas propriedades
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante'; // ou recebe role como parâmetro, ou já vem por padrão como estudante
        this.#ativo = ativo
    } 
        //métodos - são funções que são executados no contexto do objeto
    get nome() { //pega a informação
        return `${this.#nome} ${this.#sobrenome}`;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) { //aceita apenas um parâmetro por causa do dado a ser alterado
        if (novoNome === '') {
            throw new Error('Formato não válido')
        }
        let [nome, ...sobrenome] = novoNome.split(" ") 
        sobrenome = sobrenome.join(' ')
        this.#nome = novoNome;
        this.#sobrenome = sobrenome;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento;
    }

    set role(novoRole) {
        this.#role = novoRole;
    }

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo;
    }
    /*#montaObjetoUsuario() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }*/

    exibirInfos() {
        //const objUsuario = this.#montaObjetoUsuario()
        return `${this.nome}, ${this.email}, ${this.role}` //se refere aos get
    }  
}

const novoUsuario = new Usuario('Juliana', 'j@gmail.com', '2021-01-01');
console.log(novoUsuario);
console.log(novoUsuario.exibirInfos());

console.log(Usuario.prototype.isPrototypeOf(novoUsuario)); //por baixo da classe usuario temos uma propriedade prototype que foi passado para a cadeia de prototipo...

//HERANÇA de Classe

//npm init -y
//"type" : "module", avisando que faz a exportação e importação de módulos

// também podemos privar métodos

//set - alterar/modificar