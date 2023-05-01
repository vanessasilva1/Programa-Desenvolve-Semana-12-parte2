/*O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.*/

function exibeInfos() {
    console.log(this.nome, this.email)
}
   
const user = {
    nome: 'Mariana',
    email: 'm@m.com'
}
   
exibeInfos.call(user)

//Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:

function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
}
   
const newUser = new User('mariana', 'm@m.com');
console.log(newUser);

//Também é possível passar parâmetros para call(), como no exemplo a seguir. 

const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
}
   
newUser.exibeInfos() //mariana m@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const userio = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.call(userio, this.nome, this.email)
    }
   }
   
   userio.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com