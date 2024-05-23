let text = "Hola"

function cadenaPromise(text){

    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            if(text != "Hola"){
                reject("texto diferente")
            }
            resolve(text)
        }, 2000)
    })
}

cadenaPromise(text)
    .then((respuestaResolve) => console.log(respuestaResolve))
    .catch((respuestaReject) => console.log(respuestaReject))