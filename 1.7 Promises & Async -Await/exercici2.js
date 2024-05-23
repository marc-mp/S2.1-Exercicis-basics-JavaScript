let text = "Hola mon"

function cadenaPromise(text){

    return new Promise((resolve) => {

       setTimeout(() => {
            resolve(text)
        }, 2000)
    })
}

cadenaPromise(text).then((respuestaResolve) => console.log(respuestaResolve))

    



