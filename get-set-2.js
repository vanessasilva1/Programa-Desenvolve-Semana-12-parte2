//É possível emular os getters e setters com funções. As funções são mais flexíveis do que get/set (podem aceitar argumentos diferentes, por exemplo).

class User {
 _nome = '';

 setNome(nome) {
   this._nome = nome;
 }

 getNome() {
   return this._nome;
 }
}

//Nesse caso, suprimimos o construtor e passamos toda a responsabilidade para setNome(). Vamos executar:

const novoUser = new User()
novoUser.setNome('Rodrigo');
console.log(novoUser.getNome()); //Rodrigo

//A convenção do prefixo _ para atributos privados têm sido usada há muito tempo e, apesar da funcionalidade de atributos privados com # já ter sido implementada, você ainda pode encontrar a forma anterior com frequência.