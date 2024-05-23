
const  processar = (a, callback) => {
    console.log(callback(a))
}

processar(7, multiplicarPorDos = (a) => a * 2)

