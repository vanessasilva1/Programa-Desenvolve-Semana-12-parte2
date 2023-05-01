import Usuario from "./classe.js";
import Docente from "./docente.js";
import Admin from "./admin.js";

const novoUsuario = new Usuario('Mari', 'm@gmail.com', '2022-01-01')

console.log(novoUsuario.exibirInfos());

//novoUsuario.#nome = 'Marcia'; --vai dar erro

//console.log(novoUsuario.#montaObjetoUsuario()); - dá erro pq está privado

const novoAdmin = new Admin('Rodrigo', 'r@gmail.com', '2022-01-01');
console.log(novoAdmin.nome) //get

novoAdmin.nome = 'ana' //atribuir novo nome pelo set
console.log(novoAdmin.nome); //get

//get nunca recebe argumento, só retornam algo
// não chamamos com (). Pode ter lógica dentro do get
const novoUser = new Usuario('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'

const novoDocente = new Docente('Ana', 'r@gmail.com', '2024-01-01');
console.log(novoDocente.exibirInfos())