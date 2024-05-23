let text = "Hola mon"

function cadenaPromise(a){

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(console.log(a))
        }, 2000)
    })
}

cadenaPromise(text)
