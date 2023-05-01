let dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora)
 // Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora)
 // string

 //instanciando
 let dataEHora1 = new Date() // utilizando o construtor do objeto Date
console.log(dataEHora1)
 // 2022-02-01T02:46:51.517Z
console.log(typeof dataEHora1)
 // object

 //A razão por trás desse comportamento é que, quando utilizamos um construtor, também temos acesso a todos os métodos do objeto Date. Podemos ver melhor essa diferença nos exemplos a seguir:
let dataComConstrutor = new Date()
let data1 = dataComConstrutor.getDate()
console.log(data1) //29 Acima, utilizamos o método getDate(), que já existe em qualquer objeto criado a partir de Date(), para obter o dia do mês.

//let dataFuncao = Date()
//let data2 = dataFuncao.getDate()
 //TypeError: dataFuncao.getDate is not a function
 //Já no exemplo acima, vemos que uma data gerada através da chamada da função Date() diretamente não pode acessar os demais métodos do objeto Date, ao passo que ao gerarmos uma nova instância desse objeto é possível acessar todos os métodos definidos dentro deste objeto, como por exemplo getDate().

 //Alguns exemplos de outros métodos disponíveis no objeto Date são:

 //.getMillisseconds()
 //.getSeconds()
 //.getMinutes()
 //.getHours()
 //.getDay()
 //.getMonth()
 //.getFullYear()