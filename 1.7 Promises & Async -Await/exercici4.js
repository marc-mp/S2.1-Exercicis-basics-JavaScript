let text = "Hola mon"

function cadenaPromise(text){

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(text)
        }, 2000)
    })
}

async function getSaludar(){
    let saludo = await cadenaPromise(text)
    console.log(saludo)
}

getSaludar()
