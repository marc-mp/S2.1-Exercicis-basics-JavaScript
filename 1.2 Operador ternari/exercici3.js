
// parte 1 - Ús enllaçat d'operadors ternaris:

let num1 = 6

let resultat = num1 > 0 ? "positiu" : num1 < 0 ? "negatiu" : "zero";
console.log(resultat)

// parte 2 - Operador ternari amb funcions:

let a = 3
let b = 5
let c = 7

let  trobarMaxim = (a,b,c) => a >= b && a > c ? `${a} es valor maxim` : b >= a && b >= c ? `${b} es valor maxim` : `${c} es valor maxim`
console.log(trobarMaxim(a,b,c))


        
