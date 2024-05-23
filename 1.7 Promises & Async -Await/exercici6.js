let text = "Hola"

function saludoPromise(a){

    return new Promise((resolve) => {
       
        setTimeout(() => {
            resolve(a)
        }, 2000)
    })
}



let numero = 2

function numeroPromise(a){

    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve( a * 10)
        }, 3000)
    })
}


Promise.all([
    saludoPromise(text),
    numeroPromise(numero),
]).then((respuestaResolve) => console.log(respuestaResolve))
