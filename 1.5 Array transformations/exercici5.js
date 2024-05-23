
const numeros = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const filtrats = numeros.filter((numero) => numero >= 10).map((element) => element * 2).reduce((acu, element) => acu + element)
console.log(filtrats)

