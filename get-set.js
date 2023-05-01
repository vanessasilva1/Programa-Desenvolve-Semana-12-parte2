////A partir do momento em que usamos getters ou setters em uma classe, as operações ficam dependentes entre si. Ou seja, uma classe que utiliza getters para acessar propriedades vai precisar necessariamente de setters para modificá-las. Por exemplo:

class User {
    constructor(nome) {
        this._nome = nome
}
  
get nome(){
        return this._nome
   }
}

//Acima, criamos uma classe com apenas um construtor para receber um valor para a propriedade nome e um getter para nome.

//Vamos instanciar a classe e tentar atualizar nome:
// criar o usuário
let novoUser = new User('Rodrigo');
console.log(novoUser.nome) //usando o getter

//novoUser.nome = 'Mariana'
///console.log(novoUser.nome) //não é modificado, continua 'Rodrigo'. O setter não foi implementado, então a propriedade não é modificada.

