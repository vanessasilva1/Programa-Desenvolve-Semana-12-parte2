//Quando criamos uma classe, é possível designar que determinados métodos sejam estáticos. Ou seja, estes métodos não são inicializados quando criamos uma nova instância de classe (usando new), mas sim a partir da própria classe.

/*class User {
    constructor(nome, email, cpf) {
     this.nome = nome
     this.email = email
     this.cpf = cpf
    }
    exibirInfos() {
     return `${this.nome}, ${this.email}, ${this.cpf}`
   }
}*/

//No exemplo acima, o método exibirInfos() não é um método estático, e só é possível executá-lo a partir de uma instância da classe User:

//onst novoUser = new User('Carol', 'c@c.com', '12312312312')
//console.log(novoUser.exibirInfos()) //Carol, c@c.com, 12312312312

//Se tentarmos executar o método sem associá-lo a nenhuma instância da classe, recebemos um erro:
//console.log(User.exibirInfos())
//TypeError: User.exibirInfos is not a function

//Agora vamos refatorar a classe, declarando exibirInfos() como sendo um método estático:

class User {
    constructor(nome, email, cpf) {
     this.nome = nome
     this.email = email
     this.cpf = cpf
   }
    static exibirInfos() {
     return `${this.nome}, ${this.email}, ${this.cpf}`
   }
}

console.log(User.exibirInfos())
//undefined, undefined, undefined

//Não recebemos mais um erro, pois agora o método é static e é executado a partir da própria classe, e não de uma instância dela. Porém, como o método depende de informações recebidas do construtor e isso não ocorreu (uma vez que não criamos uma instância e nem passamos os dados necessários), recebemos undefined para cada propriedade.

class User1 {
    constructor() {
     this.nome = 'Camila'
     this.email = 'c@c.com'
     this.cpf = '12312312312'
   }
    exibirInfos() {
     return `${this.nome}, ${this.email}, ${this.cpf}`
   }
   
   static exibeNome(nome) {
     return nome
   }
}

//Mantivemos o método exibirInfos() como estava e criamos um novo método, estático, chamado exibeNome(). Porém, já vimos que métodos estáticos não podem ser executados a partir de uma instância, então como isso vai funcionar?

const novoUser1 = new User1('Carol', 'c@c.com', '12312312312')
const nomeUser = novoUser1.nome
console.log(User1.exibeNome(nomeUser)) //Camila