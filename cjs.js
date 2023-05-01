//Até a versão 13, a função que o NodeJS utiliza por padrão para importar módulos em um arquivo é require(). Os módulos podem importar e exportar todas as funções declaradas no arquivo ou apenas algumas, de acordo com o necessário. Este é o formato de exportação e importação de módulos conhecido como CommonJS ou CJS.

//Por exemplo, para exportar apenas uma função em um arquivo:

module.exports = function soma(num1, num2) {
    return num1 + num2;
};

//ou

function soma(num1, num2) {
    return num1 + num2;
}
   
module.exports = soma;

//É possível exportar apenas a função que precisa ser executada a partir de outra parte do código, enquanto outras funções do mesmo arquivo permanecem inacessíveis ao restante. Por exemplo:

function soma(num1, num2) {
    return num1 + num2;
}
   
function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
}
   
module.exports = multiplica;

/*No exemplo anterior, declaramos as funções soma() e multiplica(). A função multiplica() executa soma() dentro de seu escopo e retorna um resultado. Podemos exportar somente a função multiplica() para ser utilizada em outras partes do código, sem a necessidade de exportar tudo.

Por outro lado, caso seja necessário exportar e importar mais de uma função, podemos fazer isso exportando um único objeto no final do arquivo/módulo:*/

function soma(num1, num2) {
    return num1 + num2;
}
   
function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
}
   
module.exports = { multiplica, soma };

//Essas funções podem ser importadas desestruturando o mesmo objeto:

const { multiplica, soma } = require('./caminho/arquivo');

const resultadoMult = multiplica(2, 2);
const resultadoSoma = soma(2, 2);

//O mesmo princípio se aplica para módulos externos que instalamos em nosso projeto a partir de um gerenciador de pacotes como o NPM (com npm install <nome da lib>); nesse caso não precisamos passar o caminho, pois o JavaScript vai acessar os métodos necessários a partir da pasta node_modules:

const chalk = require('chalk');

//A mesma coisa para módulos que já são built-in no NodeJS. Ou seja, são módulos que integram o sistema, mas mesmo assim precisam ser importados para dentro do projeto, como o módulo fs (file system, ou sistema de arquivos):

const fs = require('fs');