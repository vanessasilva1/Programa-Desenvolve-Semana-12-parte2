function criaUser(nome, email) {
    return {
      nome,
      email,
      exibeInfos() {
        return `${nome}, ${email}`
        }
    }
}
//função que retorna um objeto

//Veja que, um pouco diferente do que foi feito na aula, não se trata de um objeto literal mas sim uma função que retorna (através da palavra-chave return) um objeto. A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (nome e email) e um método interno (exibeInfos()):

const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibeInfos())

//As factory functions são diferentes das funções construtoras. Veja um exemplo de função construtora, como fizemos anteriormente durante a aula:


function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos1 = function() {
      return `${nome}, ${email}`
    }
}

//As funções construtoras devem ser chamadas com o operador new para criar instâncias do objeto User:

const newUser1 = new User('Mariana', 'm@m.com')
console.log(newUser1)
console.log(newUser1.exibeInfos1())