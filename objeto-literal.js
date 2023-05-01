const usuario = {
    nome: "Juliana",
    email: "juliana@gmail.com",
    nascimento: "2021/01/01",
    rola: "admin", 
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

//classe - molde
//this

usuario.exibirInfos()
//atribuindo funções a váriaveis
const exibir = usuario.exibirInfos; ///perdeu contexto com o obj usuario
exibir(); //undefined

//this -- isso. So faz sentido no contexto. Só funciona se tiver contexto. 

const exibir2 = function() {
    console.log(this);
}

exibir2(); //objeto global

const exibir3 = function() {
    console.log(this.nome);
}

const exibirNome = exibir3.bind(usuario) // bind - prender a execução de uma função a um contexto específico
exibirNome();
exibir3();