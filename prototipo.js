let user = {
    perfil: 'estudante'
}
   
let estudante = {
    nome: 'juliana'
}
   
Object.setPrototypeOf(estudante, user)
console.log(estudante.nome) // 'juliana'
console.log(estudante.perfil) //'estudante'

function User() {

}

User.prototype.perfil = 'estudante'
let estudante1 = new User()
console.log(estudante1.perfil) //'estudante'