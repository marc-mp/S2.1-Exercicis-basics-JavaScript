const numeros = [1, 3, 5, 7, 9]

function processarElements (array, callback) {

   array.forEach(element => {
        console.log(callback(element))
    })
}


processarElements(numeros, sumaMasUno = (element) => element + 1)

