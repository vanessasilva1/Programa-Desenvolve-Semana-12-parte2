//Quando utilizamos o ESM, o mesmo processo de exportação de módulos é feito com a sintaxe export ou export default e a importação com a sintaxe import <nomeModulo> from ‘./caminho/arquivo.js’.

/*A sintaxe do ESM segue os exemplos abaixo. Para exportar funções, por exemplo:*/

export function soma(num1, num2) {
    return num1 + num2;
}
   
export function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
}

//Ou, alternativamente, para exportar somente a função multiplica() como default (padrão):

function soma(num1, num2) {
    return num1 + num2;
}
   
function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
}
   
export default multiplica;

///Ou outra forma de exportar mais de uma função:

function soma(num1, num2) {
    return num1 + num2;
}
   
function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
}
   
export { multiplica, soma };

//Para fazer a importação, seguem os exemplos:

import soma from './caminho/arquivo.js';

//Ou, no caso de mais funções exportadas a partir do mesmo módulo:

import { soma, multiplica } from './caminho/arquivo.js';

//É possível também importar de uma só vez todo o objeto exportado:

import * as operacoes from './caminho/arquivo.js';

//E importar da seguinte forma:

const soma = operacoes.soma(1, 2);
const multiplica = operacoes.multiplica(1, 2);

//Importante: para utilizar a sintaxe ESM com NodeJS é preciso incluir, no arquivo package.json, a propriedade ”type”: “module” e sempre incluir a extensão do arquivo .js nos caminhos de importação - por exemplo import soma from ‘./caminho/arquivo.js’;

//Existe uma convenção no uso de ESM em projetos NodejS, que é utilizar a extensão .mjs para distinguir quais arquivos são módulos, continuando com a extensão .js para os arquivos que não exportam módulos.