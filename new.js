//cria instâncias de objetos a partir de funções construtoras - new
// construtoras são equivalentes das classes em js

function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`;
    }
}

const novoUser = new User('Ana', 'a@gmail.com');
console.log(novoUser.exibirInfos());

function Admin(role) {
    User.call(this, 'Juliana', 'j@gmail.com') //vai herdar de User. This se refere ao contexto de user
    this.role = role || 'estudante' // se receber role, ele passa o role, mas senão usa o estudante como padrão
}

Admin.prototype = Object.create(User.prototype); //passamos para admin as propriedades de user

const novoAdmin = new Admin('admin');
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.role);

console.log('----------------------------------------------------------------');

const user = {
    init: function(nome, email) { //vai substituir a função construtora
        this.nome = nome;
        this.email = email;
    },
    exibirInfos1: function() { //objeto literal
        return this.nome;
    }
}

// Js sempre cria um protótipo a partir de um objeto

const novoUser1 = Object.create(user) //user vai ser passado como prototipo para dentro de novoUser1. Só q agora não estou dependendo de uma função construtora para isso, faço direto.

novoUser1.init('Aninha', 'an@gmail.com')
console.log(novoUser1.exibirInfos1())

//console.log(novoUser1.exibirInfos1('Ana Julia'));
console.log(user.isPrototypeOf(novoUser1)); // user está /sendo usado como prototype de novoUser1? tem que retornar true
