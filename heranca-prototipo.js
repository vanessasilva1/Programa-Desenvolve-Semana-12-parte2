const usuario = {
    nome: "Juliana",
    email: "juliana@gmail.com",
    nascimento: "2021/01/01",
    role: "estudante", 
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Mari",
    email: "mari@gmail.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, usuario) //vou definir um prótotipo. Parametros - 1: objeto que vai herdar a propriedade. 2: objeto que vai ceder as propriedades.
admin.criarCurso();
admin.exibirInfos()