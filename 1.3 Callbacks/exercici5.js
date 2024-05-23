
let paraula = "ordinador"

function processarCadena (string, callback){

    callback(string.toUpperCase())
}

processarCadena(paraula, imprimir = (paraula) => console.log(paraula))

